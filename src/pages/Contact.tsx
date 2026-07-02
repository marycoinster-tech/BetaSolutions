import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SOCIALS } from "@/constants";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <defs>
      <linearGradient id="ig-contact" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-contact)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SERVICES = [
  "Website Design & Development",
  "Google Business Profile Setup",
  "1-on-1 Strategy Session",
  "AI Tools Consultation",
  "Business Automation Setup",
  "Digital Product Inquiry",
  "Partnership / Collaboration",
  "Other",
];

const BUDGETS = [
  "Under ₦50,000",
  "₦50,000 – ₦150,000",
  "₦150,000 – ₦500,000",
  "₦500,000+",
  "Let's discuss",
];

export default function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Let's Build <span className="text-gradient">Something Together</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a website, automation, strategy session or just want to link up — I respond to every serious inquiry personally.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-2 space-y-8 reveal">
              {/* Contact info */}
              <div className="glass-card p-7 gradient-border rounded-2xl">
                <h3 className="font-display text-lg font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                      <Mail size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:hello@betasolutions.co" className="text-white/80 text-sm hover:text-blue-400 transition-colors">
                        hello@betasolutions.co
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                      <MapPin size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">Location</p>
                      <span className="text-white/80 text-sm">Lagos, Nigeria 🇳🇬</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                      <Clock size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">Response Time</p>
                      <span className="text-white/80 text-sm">Usually within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="glass-card p-7 rounded-2xl">
                <h3 className="font-display text-sm font-bold text-white/60 uppercase tracking-widest mb-5">Services Available</h3>
                <div className="space-y-3">
                  {[
                    { icon: "🌐", service: "Website Design & Development" },
                    { icon: "📍", service: "Google Business Profile Setup" },
                    { icon: "🤖", service: "AI Tools Integration" },
                    { icon: "⚡", service: "Business Automation" },
                    { icon: "📦", service: "Digital Products" },
                    { icon: "📞", service: "1-on-1 Strategy Calls" },
                  ].map((item) => (
                    <div key={item.service} className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-white/60 text-sm">{item.service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="glass-card p-7 rounded-2xl">
                <h3 className="font-display text-sm font-bold text-white/60 uppercase tracking-widest mb-5">Follow Along</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon, color: "hover:text-pink-400 hover:border-pink-500/20" },
                    { label: "YouTube", href: SOCIALS.youtube, Icon: YouTubeIcon, color: "hover:text-[#FF0000] hover:border-red-500/20" },
                    { label: "TikTok", href: SOCIALS.tiktok, Icon: TikTokIcon, color: "hover:text-white hover:border-white/15" },
                    { label: "LinkedIn", href: SOCIALS.linkedin, Icon: LinkedInIcon, color: "hover:text-[#0A66C2] hover:border-blue-600/20" },
                  ].map(({ label, href, Icon, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 glass-card p-3 rounded-xl text-white/50 ${color} transition-all duration-200 hover:border-white/15 text-sm`}
                    >
                      <Icon />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal reveal-delay-2">
              <div className="glass-card gradient-border p-8 md:p-10 rounded-2xl">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-blue-500/15 flex items-center justify-center mx-auto mb-6 glow-blue">
                      <CheckCircle size={36} className="text-blue-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Message Received!</h3>
                    <p className="text-white/50 max-w-sm mx-auto leading-relaxed mb-8">
                      Thanks for reaching out. Victor will review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", businessName: "", service: "", budget: "", message: "" }); }}
                      className="btn-glass"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-white mb-2">Send a Message</h2>
                      <p className="text-white/40 text-sm">Fill in your details and I'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="email">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@email.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="phone">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 xxx xxx xxxx"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="businessName">
                            Business Name
                          </label>
                          <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            value={formData.businessName}
                            onChange={handleChange}
                            placeholder="Your Business Ltd."
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="service">
                          What do you need? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0f172a] text-white/50">Select a service...</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s} className="bg-[#0f172a] text-white">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="budget">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0f172a] text-white/50">Select a budget range...</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b} className="bg-[#0f172a] text-white">{b}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wide mb-2 font-medium" htmlFor="message">
                          Tell me more *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe your project, goals, or what you're looking to achieve..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-4 text-base justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-white/25 text-xs text-center">
                        By submitting, you agree to be contacted regarding your inquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-3xl font-bold text-white">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "A standard business website takes 5–14 days depending on complexity, number of pages and content readiness. I'll give you a clear timeline after our initial call." },
              { q: "Do you work with businesses outside Nigeria?", a: "Yes. While my primary focus is on Nigerian and African businesses, I work with founders globally. Payment can be made in Naira, USD or other currencies." },
              { q: "What is included in a 1-on-1 strategy session?", a: "A 60-minute deep dive into your business — covering your goals, challenges, and creating a clear action plan with tools, systems and next steps tailored to your situation." },
              { q: "Can I get a refund on digital products?", a: "Digital products are non-refundable once accessed. However, if there's a genuine issue with your purchase, reach out and I'll make it right." },
            ].map((item, i) => (
              <div key={item.q} className={`glass-card p-6 rounded-xl reveal reveal-delay-${(i % 3) + 1}`}>
                <h3 className="font-medium text-white mb-3 text-sm">{item.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
