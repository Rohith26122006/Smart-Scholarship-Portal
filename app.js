const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const scholarshipRoutes = require("./routes/scholarshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

// Most PaaS providers (Render, Railway, Heroku) put the app behind a
// reverse proxy. Without this, Express sees every request as coming from
// the proxy's internal IP (breaks rate limiting) and req.secure is always
// false (breaks secure cookies in production).
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// ------------------ Security Middlewares ------------------
app.use(helmet());
app.use(compression());
app.use(mongoSanitize()); // strips any $ or . operators from req.body/query/params to block NoSQL injection

// Global rate limiter - generous enough for normal use, tight enough to
// blunt brute-force/credential-stuffing and scraping attempts.
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try again later" },
});
app.use("/api", globalLimiter);

// Tighter limiter specifically on auth endpoints, where brute-forcing
// matters most.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many auth attempts. Please try again later" },
});
app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);
app.use("/api/auth/forgot-password", authLimiter);
app.use("/api/auth/reset-password", authLimiter);

// ------------------ Global Middlewares ------------------
// Supports a comma-separated list (e.g. "https://app.example.com,https://www.example.com")
// so both a custom domain and a platform-provided preview URL can be allowed at once.
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (curl, server-to-server, mobile apps) which
      // send no Origin header at all.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ------------------ Routes ------------------
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notifications", notificationRoutes);
// All core modules are now wired up.

app.get("/", (req, res) => {
  res.send("Smart Scholarship Portal API - see /api/health for status");
});

// ------------------ Error Handling (must be last) ------------------
app.use(notFound);
app.use(errorHandler);

module.exports = app;
