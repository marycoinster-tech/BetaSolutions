import { useState } from "react";
import { Play, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SOCIALS } from "@/constants";
import { Link } from "react-router-dom";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
  </svg>
);

const YouTubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TABS = [
  { id: "youtube", label: "YouTube", Icon: YouTubeIcon, color: "#FF0000" },
  { id: "tiktok", label: "TikTok", Icon: TikTokIcon, color: "#ffffff" },
  { id: "instagram", label: "Instagram", Icon: InstagramIcon, color: "#E1306C" },
  { id: "linkedin", label: "LinkedIn", Icon: LinkedInIcon, color: "#0A66C2" },
];

const CONTENT: Record<string, Array<{ title: string; thumb: string; views: string; date: string; link: string }>> = {
  youtube: [
    { title: "How to Start a Business in Nigeria with Zero Capital", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop", views: "2.4K views", date: "2 weeks ago", link: SOCIALS.youtube },
    { title: "5 AI Tools Every Nigerian Business Owner Must Use in 2025", thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop", views: "1.8K views", date: "1 month ago", link: SOCIALS.youtube },
    { title: "How to Build a Digital Product Business from Scratch", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop", views: "3.1K views", date: "3 weeks ago", link: SOCIALS.youtube },
    { title: "The Real Reason Nigerian Businesses Fail (and How to Fix It)", thumb: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=600&h=340&fit=crop", views: "5.2K views", date: "2 months ago", link: SOCIALS.youtube },
    { title: "Automate Your Business in 30 Minutes Using These Free Tools", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop", views: "4.1K views", date: "6 weeks ago", link: SOCIALS.youtube },
    { title: "How I Validated My Business Idea Before Spending a Single Naira", thumb: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&h=340&fit=crop", views: "2.9K views", date: "2 months ago", link: SOCIALS.youtube },
  ],
  tiktok: [
    { title: "3 Business ideas you can start this week", thumb: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=700&fit=crop", views: "12.4K views", date: "3 days ago", link: SOCIALS.tiktok },
    { title: "The AI tool that changed my business forever", thumb: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=700&fit=crop", views: "8.1K views", date: "1 week ago", link: SOCIALS.tiktok },
    { title: "Why you're not making money online (honest truth)", thumb: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=700&fit=crop", views: "19.7K views", date: "2 weeks ago", link: SOCIALS.tiktok },
    { title: "Free tools that replace expensive subscriptions", thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=700&fit=crop", views: "6.3K views", date: "3 weeks ago", link: SOCIALS.tiktok },
  ],
  instagram: [
    { title: "The business framework that took me from 0 to profit", thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop", views: "3.2K likes", date: "5 days ago", link: SOCIALS.instagram },
    { title: "Why every small business needs a Google Business Profile", thumb: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c8b1?w=500&h=500&fit=crop", views: "2.1K likes", date: "1 week ago", link: SOCIALS.instagram },
    { title: "Automate your invoicing in 10 minutes", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", views: "4.5K likes", date: "2 weeks ago", link: SOCIALS.instagram },
  ],
  linkedin: [
    { title: "I built 4 AI tools at 18. Here's what I learned about building for African founders.", thumb: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=600&h=340&fit=crop", views: "1.4K reactions", date: "1 week ago", link: SOCIALS.linkedin },
    { title: "The gap between Nigerian talent and Nigerian opportunity — and what I'm doing about it", thumb: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=340&fit=crop", views: "892 reactions", date: "3 weeks ago", link: SOCIALS.linkedin },
  ],
};

export default function Content() {
  const [activeTab, setActiveTab] = useState("youtube");
  useScrollReveal();

  const activeContent = CONTENT[activeTab] || [];
  const isVertical = activeTab === "tiktok" || activeTab === "instagram";
  const activeTabData = TABS.find(t => t.id === activeTab);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Content Hub</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Media <span className="text-gradient">Center</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Business insights, AI tutorials, startup frameworks and real talk on building in Africa — across every platform.
          </p>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="pb-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer"
            className="group relative block rounded-3xl overflow-hidden glass-card gradient-border tool-card reveal">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=400&fit=crop"
                alt="Featured video" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Play size={26} fill="white" className="text-white ml-1" />
              </div>
              <div>
                <span className="text-red-400 text-xs uppercase tracking-widest font-medium mb-2 block">Featured Video</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  How to Start a Business in Nigeria with Zero Capital
                </h3>
                <p className="text-white/50 text-sm">Watch on YouTube · 2.4K views</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 reveal">
            {TABS.map(({ id, label, Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  activeTab === id
                    ? "bg-white/8 border-white/15 text-white"
                    : "glass-card border-white/5 text-white/50 hover:text-white/80 hover:border-white/10"
                }`}
              >
                <span style={{ color: activeTab === id ? color : undefined }}>
                  <Icon size={18} />
                </span>
                {label}
              </button>
            ))}
          </div>

          <div className={`grid gap-6 ${isVertical ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
            {activeContent.map((item, i) => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer"
                className={`group glass-card overflow-hidden tool-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={`relative overflow-hidden ${isVertical ? "h-56 md:h-72" : "h-44"}`}>
                  <img src={item.thumb} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: activeTabData?.color || "#FF0000" }}>
                      <Play size={18} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <ExternalLink size={14} className="text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white text-sm leading-snug mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span>{item.views}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <a href={SOCIALS[activeTab as keyof typeof SOCIALS] || SOCIALS.youtube}
              target="_blank" rel="noopener noreferrer" className="btn-glass py-3 px-8 inline-flex">
              View All on {TABS.find(t => t.id === activeTab)?.label} <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="max-w-3xl mx-auto px-6 text-center relative reveal">
          <div className="glass-card-blue gradient-border p-10 md:p-14 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
              <Mail size={26} className="text-blue-400" />
            </div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Every Sunday</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The Beta <span className="text-gradient">Newsletter</span>
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              One business lesson. One AI tool. One opportunity. Straight to your inbox. No fluff, no spam — just value.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200" />
              <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-white/20 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
