# Optional: only needed if your deployment platform builds from a Dockerfile
# (Render, Railway, and Fly.io can also deploy directly from package.json
# without this - see DEPLOYMENT.md). Not tested against a live Docker daemon
# in this environment; verify locally before relying on it in production.
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# Persisted uploads should be mounted as a volume in production
# (container filesystems are ephemeral) - see DEPLOYMENT.md.
RUN mkdir -p uploads

EXPOSE 5000

CMD ["node", "server.js"]
