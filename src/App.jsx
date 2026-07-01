import React, { useState } from 'react';
import { 
  Award, Clock, GraduationCap, IndianRupee, FileText, 
  Download, CheckCircle, Info, Calendar, HelpCircle, 
  Phone, Mail, MapPin, ChevronDown 
} from 'lucide-react';

export default function ScholarshipPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Who is eligible for the CSSS scholarship?", a: "Students who are above the 80th percentile of successful candidates in the relevant stream from the respective Board of Examination in Class XII." },
    { q: "Is this scholarship renewable?", a: "Yes, it is renewable for up to 5 years, subject to maintaining a minimum of 50% marks and 75% attendance." },
    { q: "Can I apply if I am pursuing a diploma?", a: "No, this scheme is strictly for regular undergraduate and postgraduate courses." }
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-[#f0f5ff] to-[#e6efff] text-gray-800 selection:bg-blue-200">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="text-[#2563EB] w-8 h-8" />
            <span className="font-bold text-xl text-[#2563EB]">EduPortal Govt.</span>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-gray-600">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Home</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Scholarships</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Track Status</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Glassmorphism) */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 overflow-hidden">
          {/* Background Decorative Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#60A5FA] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Merit-Based
                </span>
                <span className="px-4 py-1.5 bg-[#60A5FA]/15 text-[#2563EB] rounded-full text-sm font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Undergraduate
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                PM-USP – Central Sector Scheme of Scholarship (CSSS)
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                Financial assistance to meritorious students from low-income families to meet a part of their day-to-day expenses while pursuing higher studies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/60 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 shadow-sm">
                  <div className="p-2 bg-[#2563EB]/10 rounded-full"><IndianRupee className="text-[#2563EB] w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Amount</p>
                    <p className="font-bold text-gray-900">₹10,000–₹20,000/year</p>
                  </div>
                </div>
                <div className="bg-white/60 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 shadow-sm">
                  <div className="p-2 bg-orange-100 rounded-full"><Clock className="text-orange-500 w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Deadline</p>
                    <p className="font-bold text-gray-900">October 31, 2026</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                  Apply Now <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
                <button className="px-8 py-3.5 bg-white text-[#2563EB] border border-[#2563EB]/20 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-sm">
                  <Download className="w-4 h-4" /> Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* About Section */}
          <section className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-900">
              <Info className="text-[#60A5FA]" /> About the Scholarship
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Central Sector Scheme of Scholarship for College and University Students (CSSS) is implemented by the Department of Higher Education. The objective of the scheme is to provide financial assistance to meritorious students from low-income families to meet a part of their day-to-day expenses while pursuing higher studies.
            </p>
          </section>

          {/* Eligibility Criteria */}
          <section className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-900">
              <CheckCircle className="text-[#60A5FA]" /> Eligibility Criteria
            </h2>
            <ul className="space-y-4">
              {[
                "Top 20th percentile of successful candidates in Class XII board exams.",
                "Pursuing regular courses (not correspondence or distance mode) from recognized institutions.",
                "Family income must not exceed ₹4,50,000 per annum.",
                "Not receiving any other scholarship.",
                "Age strictly between 18 to 25 years at the time of application."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Required Documents */}
          <section className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-900">
              <FileText className="text-[#60A5FA]" /> Required Documents
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Aadhaar Card", "Class 12th Marksheet", "Income Certificate", 
                "Bank Passbook (Seed with Aadhaar)", "Caste Certificate (If applicable)", 
                "Disability Certificate (If applicable)"
              ].map((doc, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center gap-3">
                  <FileText className="text-gray-400 w-5 h-5" />
                  <span className="text-gray-700 font-medium text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-900">
              <HelpCircle className="text-[#60A5FA]" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-800">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          
          {/* Important Dates */}
          <section className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-t-4 border-[#2563EB]">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
              <Calendar className="text-[#2563EB]" /> Important Dates
            </h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="bg-blue-50 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full mb-1">Open</div>
                <div className="text-sm font-semibold text-gray-800">Applications Start</div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-1">31 Oct 2026</div>
                <div className="text-sm font-semibold text-gray-800">Last Date to Apply</div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-1">15 Nov 2026</div>
                <div className="text-sm font-semibold text-gray-800">Institute Verification</div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-[#2563EB] rounded-[20px] p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-200 shrink-0" />
                <p>National Scholarship Division, Department of Higher Education, New Delhi</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200 shrink-0" />
                <p>0120 - 6619540</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200 shrink-0" />
                <p>helpdesk@nsp.gov.in</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2026 EduPortal Govt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}