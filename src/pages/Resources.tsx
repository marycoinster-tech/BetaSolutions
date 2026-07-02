import { Download, FileText, ArrowRight, BarChart2, ClipboardList, Megaphone, Users, LayoutGrid } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RESOURCES, PRODUCTS } from "@/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const LUCIDE_MAP: Record<string, LucideIcon> = {
  BarChart2, ClipboardList, FileText, Megaphone, Users, LayoutGrid,
};

const ICON_COLORS: Record<string, string> = {
  BarChart2: "#3b82f6",
  ClipboardList: "#8b5cf6",
  FileText: "#06b6d4",
  Megaphone: "#ec4899",
  Users: "#22c55e",
  LayoutGrid: "#f59e0b",
};

export default function Resources() {
  useScrollReveal();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Free Resources</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Business <span className="text-gradient">Templates & Downloads</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Free, plug-and-play business templates and frameworks. Used by real businesses to plan, pitch, invoice and grow.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Free <span className="text-gradient">Downloads</span>
              </h2>
              <p className="text-white/40 mt-2 text-sm">No email required. Just click and download.</p>
            </div>
            <span className="text-blue-400/60 text-sm hidden md:block">{RESOURCES.length} templates available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((res, i) => {
              const IconComponent = LUCIDE_MAP[res.icon] || FileText;
              const iconColor = ICON_COLORS[res.icon] || "#3b82f6";
              return (
                <div key={res.id} className={`glass-card gradient-border p-6 tool-card group reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 flex-shrink-0"
                      style={{ color: iconColor }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <span className="text-white/30 text-xs uppercase tracking-wide">{res.type}</span>
                      <h3 className="font-display text-base font-bold text-white">{res.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{res.description}</p>
                  <a
                    href={res.downloadUrl}
                    className="inline-flex items-center gap-2 btn-glass text-sm py-2.5 px-4 w-full justify-center group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300"
                  >
                    <Download size={15} className="group-hover:text-blue-400" />
                    Download Free
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Products */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/4 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Digital Products</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Premium <span className="text-gradient">Toolkits</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Comprehensive bundles with everything you need to launch, run and scale a real business.
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
                    <span className="px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="font-display text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{product.description}</p>
                <div className="mb-6">
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

      {/* Scripts & Frameworks */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">Frameworks</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Scripts & <span className="text-gradient">Playbooks</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: <Users size={24} className="text-blue-400" />, title: "Sales Call Script", desc: "A word-for-word framework for closing clients on discovery calls.", badge: "Free" },
              { icon: <FileText size={24} className="text-purple-400" />, title: "Cold Email Templates", desc: "5 cold email templates that have gotten real responses from Nigerian businesses.", badge: "Free" },
              { icon: <Megaphone size={24} className="text-pink-400" />, title: "DM Outreach Templates", desc: "Instagram and WhatsApp DM templates for reaching potential clients professionally.", badge: "Free" },
              { icon: <BarChart2 size={24} className="text-green-400" />, title: "Lead Magnet Playbook", desc: "Step-by-step guide to creating a lead magnet that builds your email list fast.", badge: "Free" },
            ].map((item, i) => (
              <div key={item.title} className={`glass-card p-6 tool-card reveal reveal-delay-${i + 1} flex items-start gap-5`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">{item.badge}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <button className="inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
                    <Download size={13} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Want <span className="text-gradient">Custom Resources</span>?
          </h2>
          <p className="text-white/50 text-lg mb-10">Get templates and frameworks tailored to your specific business. Book a 1-on-1 session.</p>
          <Link to="/contact" className="btn-primary text-base py-4 px-10">
            Book a Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
