import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Play, ExternalLink, CheckCircle,
  Zap, TrendingUp, Globe, Users, Star,
  Settings, Megaphone, Target, BarChart3,
  MessageSquare, BookOpen, Flame, Layers, ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedCounter from "@/components/features/AnimatedCounter";
import { TOOLS, STATS, FLOATING_CARDS, PRODUCTS, SOCIALS } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import ecosystemBg from "@/assets/ecosystem-bg.jpg";

const BG_SLIDES = [
  heroBg,
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&auto=format",
];

// Brand-accurate social icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

// Map icon string name to Lucide component
const ICON_MAP: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={16} />,
  Zap: <Zap size={16} />,
  Globe: <Globe size={16} />,
  Settings: <Settings size={16} />,
  Megaphone: <Megaphone size={16} />,
  Target: <Target size={16} />,
  BarChart3: <BarChart3 size={16} />,
  MessageSquare: <MessageSquare size={16} />,
  Flame: <Flame size={20} />,
  BookOpen: <BookOpen size={20} />,
  Layers: <Layers size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
};

function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % BG_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides with blur */}
      <div className="absolute inset-0">
        {BG_SLIDES.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === slideIdx ? 1 : 0,
              filter: "blur(2px) brightness(0.22)",
              transform: "scale(1.05)",
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Subtle glow orbs — no neon */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      {/* Floating Cards with Lucide icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {FLOATING_CARDS.map((card, i) => {
          const positions = [
            { top: "12%", left: "6%" },
            { top: "20%", right: "8%" },
            { top: "55%", left: "3%" },
            { top: "65%", right: "5%" },
            { top: "80%", left: "15%" },
            { top: "75%", right: "18%" },
            { top: "38%", left: "1%" },
            { top: "35%", right: "2%" },
          ];
          const pos = positions[i] || { top: `${20 + i * 10}%`, left: "5%" };
          const delays = ["0s", "1s", "2s", "0.5s", "1.5s", "2.5s", "0.8s", "1.8s"];
          return (
            <div
              key={card.label}
              className="absolute animate-float"
              style={{ ...pos, animationDelay: delays[i], animationDuration: `${5 + i}s` }}
            >
              <div className={`glass-card px-3 py-2 flex items-center gap-2 bg-gradient-to-br ${card.color} border border-white/10`}>
                <span style={{ color: card.iconColor }}>
                  {ICON_MAP[card.icon]}
                </span>
                <span className="text-white text-xs font-medium whitespace-nowrap">{card.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card border border-blue-500/20 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Building businesses that build Africa</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 animate-slide-up">
            Build Smarter.
            <br />
            <span className="text-gradient">Scale Faster.</span>
            <br />
            <span className="text-white/70 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Create Businesses</span>
            <br />
            <span className="text-white/70 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">That Last.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Business systems, AI tools, growth frameworks, and startup opportunities designed for ambitious founders.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/tools" className="btn-primary text-base py-4 px-8">
              Explore Tools <ArrowRight size={18} />
            </Link>
            <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="btn-glass text-base py-4 px-8">
              <Play size={18} className="text-blue-400" /> Watch on YouTube
            </a>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white/30 text-xs uppercase tracking-widest mr-2">Follow</span>
            {[
              { href: SOCIALS.instagram, Icon: InstagramIcon, label: "Instagram", color: "hover:text-[#E1306C]" },
              { href: SOCIALS.tiktok, Icon: TikTokIcon, label: "TikTok", color: "hover:text-white" },
              { href: SOCIALS.youtube, Icon: YouTubeIcon, label: "YouTube", color: "hover:text-[#FF0000]" },
              { href: SOCIALS.linkedin, Icon: LinkedInIcon, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
            ].map(({ href, Icon, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className={`w-9 h-9 rounded-xl glass-card flex items-center justify-center text-white/50 ${color} transition-all duration-300 border border-white/5 hover:border-white/15`}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400/0 to-blue-400/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-blue-500/3" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated ecosystem with SVG connection lines
function EcosystemVisual() {
  const nodes = [
    { label: "Beta Solutions", main: true, x: 50, y: 8 },
    { label: "Education", x: 20, y: 30 },
    { label: "Community", x: 80, y: 30 },
    { label: "AI Tools", x: 20, y: 55 },
    { label: "Automation", x: 80, y: 55 },
    { label: "Growth", x: 50, y: 75 },
    { label: "Business Results", main: false, x: 50, y: 95 },
  ];

  const connections = [
    [0, 1], [0, 2],
    [1, 3], [2, 4],
    [3, 5], [4, 5],
    [5, 6],
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: 420 }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <line
              key={i}
              x1={`${a.x}%`} y1={`${a.y}%`}
              x2={`${b.x}%`} y2={`${b.y}%`}
              stroke="rgba(59,130,246,0.35)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              className="ecosystem-line"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          );
        })}
        {/* Data particles as animated circles on paths */}
        {connections.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          return (
            <circle
              key={`p-${i}`}
              r="0.8"
              fill="#60a5fa"
              opacity="0.7"
              style={{
                animation: `data-move-${i} ${2.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <animateMotion
                dur={`${2.5 + i * 0.3}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              >
                <mpath xlinkHref={`#path-${i}`} />
              </animateMotion>
            </circle>
          );
        })}
        {/* Define paths for particle motion */}
        <defs>
          {connections.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            return (
              <path
                key={`def-${i}`}
                id={`path-${i}`}
                d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
              />
            );
          })}
        </defs>
      </svg>

      {/* Node labels */}
      {nodes.map((node, i) => (
        <div
          key={node.label}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div
            className={`ecosystem-node px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
              i === 0
                ? "bg-blue-600 text-white text-base px-6 py-3 shadow-lg shadow-blue-900/30"
                : i === 6
                ? "bg-[#0f172a] border border-blue-500/40 text-blue-300"
                : "glass-card border border-white/10 text-white/80"
            }`}
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatBetaBuilds() {
  const items = [
    {
      icon: <Zap size={22} className="text-blue-400" />,
      title: "AI-Powered Tools",
      desc: "Custom-built tools that automate tasks, verify content, track finances, and generate marketing — all designed for African businesses.",
    },
    {
      icon: <Globe size={22} className="text-blue-300" />,
      title: "Website & Digital Presence",
      desc: "Professional websites, Google Business Profile setup, and SEO strategies that drive real leads and grow your online visibility.",
    },
    {
      icon: <TrendingUp size={22} className="text-blue-400" />,
      title: "Growth Frameworks",
      desc: "Battle-tested systems and frameworks that help founders move from idea to revenue faster — without guesswork.",
    },
    {
      icon: <Users size={22} className="text-blue-300" />,
      title: "Community & Education",
      desc: "A growing network of founders who share resources, opportunities, and accountability to build together.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundImage: `url(${ecosystemBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#050505]/92" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">The Ecosystem</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What Beta <span className="text-gradient">Builds</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Not just a portfolio. A platform for founders to learn, use tools, discover opportunities, and grow together.
          </p>
        </div>

        {/* Animated ecosystem visual */}
        <div className="mb-16 reveal reveal-delay-2">
          <EcosystemVisual />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className={`glass-card gradient-border p-6 reveal reveal-delay-${i + 1} tool-card`}>
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/15">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TOOL_ICONS: Record<string, React.ReactNode> = {
  Flame: <Flame size={28} />,
  BookOpen: <BookOpen size={28} />,
  Layers: <Layers size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
};

const TOOL_ICON_COLORS: Record<string, string> = {
  Flame: "#f97316",
  BookOpen: "#22c55e",
  Layers: "#3b82f6",
  ShieldCheck: "#8b5cf6",
};

function ToolsPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Beta Suite</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Your Business <span className="text-gradient">Tools</span>
            </h2>
          </div>
          <Link to="/tools" className="btn-glass self-start md:self-auto flex-shrink-0">
            View All Tools <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOOLS.map((tool, i) => (
            <div key={tool.id} className={`glass-card gradient-border p-7 tool-card reveal reveal-delay-${i + 1} cursor-pointer`}>
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center border border-white/10`}
                  style={{ color: TOOL_ICON_COLORS[tool.icon] || "#3b82f6" }}
                >
                  {TOOL_ICONS[tool.icon]}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {tool.badge}
                </span>
              </div>
              <div className="mb-1">
                <span className="text-white/30 text-xs uppercase tracking-widest">{tool.category}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{tool.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5 inline-flex">
                Open Tool <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Digital Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Start <span className="text-gradient">Building Today</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Proven toolkits, frameworks and systems built from real execution — not theory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={`relative glass-card p-7 tool-card reveal reveal-delay-${i + 1} ${product.popular ? "border-blue-500/40" : ""}`}
              style={{ borderColor: product.popular ? "rgba(59,130,246,0.4)" : undefined }}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star size={10} fill="white" /> Most Popular
                  </span>
                </div>
              )}
              <div className="mb-2">
                <h3 className="font-display text-lg font-bold text-white">{product.name}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">{product.description}</p>
              </div>
              <div className="my-6">
                <span className="font-display text-3xl font-black text-blue-400">{product.price}</span>
                <span className="text-white/30 text-sm ml-1">one-time</span>
              </div>
              <ul className="space-y-2.5 mb-7">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle size={14} className="text-blue-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`w-full justify-center flex ${product.popular ? "btn-primary" : "btn-glass"}`}>
                Get Access <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentPreviewSection() {
  const videos = [
    { title: "How to Start a Business in Nigeria with Zero Capital", thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop", views: "2.4K", date: "2 weeks ago" },
    { title: "5 AI Tools Every Nigerian Business Owner Must Use", thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop", views: "1.8K", date: "1 month ago" },
    { title: "How to Build a Digital Product Business from Scratch", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop", views: "3.1K", date: "3 weeks ago" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Content Hub</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Fresh <span className="text-gradient">Content</span>
            </h2>
          </div>
          <Link to="/content" className="btn-glass self-start md:self-auto flex-shrink-0">
            View All Content <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <a key={v.title} href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer"
              className={`group glass-card overflow-hidden tool-card reveal reveal-delay-${i + 1}`}>
              <div className="relative overflow-hidden h-44">
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#FF0000]/90 flex items-center justify-center">
                    <Play size={22} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {v.views} views
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-white text-sm leading-snug mb-2 group-hover:text-blue-300 transition-colors">{v.title}</h3>
                <span className="text-white/30 text-xs">{v.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Community</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Join Founders <span className="text-gradient">Building Together</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A private community of ambitious founders, entrepreneurs and builders sharing ideas, tools, wins and opportunities every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal reveal-delay-1">
          {[
            { icon: <MessageSquare size={28} className="text-[#2CA5E0]" />, platform: "Telegram Community", desc: "Daily business insights, AI updates and opportunities", cta: "Join Telegram", href: "#" },
            { icon: <YouTubeIcon />, platform: "YouTube Channel", desc: "100+ videos on business, AI and growth frameworks", cta: "Subscribe", href: SOCIALS.youtube, iconClass: "text-[#FF0000]" },
            { icon: <TrendingUp size={28} className="text-blue-400" />, platform: "Sunday Newsletter", desc: "One lesson, one tool, one opportunity every Sunday", cta: "Subscribe", href: "#newsletter" },
          ].map((item) => (
            <div key={item.platform} className="glass-card-blue gradient-border p-6 text-center tool-card">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-display text-base font-bold text-white mb-2">{item.platform}</h3>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">{item.desc}</p>
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="btn-glass text-sm py-2 px-4 inline-flex">
                {item.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-6">Ready?</p>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Ready to build
            <br />
            <span className="text-gradient">something bigger?</span>
          </h2>
          <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
            Explore the ecosystem. Use the tools. Join the community. Let's build together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tools" className="btn-primary text-base py-4 px-10">
              Explore the Ecosystem <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-glass text-base py-4 px-10">
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useScrollReveal();
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <WhatBetaBuilds />
      <ToolsPreviewSection />
      <ProductsSection />
      <ContentPreviewSection />
      <CommunitySection />
      <CTASection />
    </main>
  );
}
