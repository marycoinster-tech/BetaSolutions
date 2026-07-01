import { ExternalLink, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TOOLS, UTILITY_TOOLS } from "@/constants";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Tools() {
  useScrollReveal();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Beta Suite</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Tools Built for <span className="text-gradient">Real Business</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every tool was built to solve a real problem faced by African founders. Not generic. Not theoretical. Built from the ground up to work.
          </p>
        </div>
      </section>

      {/* Main Tools */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-10 reveal">
            <span className="text-gradient">AI-Powered</span> Core Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOOLS.map((tool, i) => (
              <div key={tool.id} className={`glass-card gradient-border p-8 tool-card reveal reveal-delay-${i + 1} relative overflow-hidden`}>
                {/* Background glow */}
                <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br ${tool.color} blur-2xl pointer-events-none opacity-60`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl border border-white/10`}>
                      {tool.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {tool.badge}
                      </span>
                      <span className="text-white/30 text-xs">{tool.category}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3">{tool.name}</h3>
                  <p className="text-white/55 leading-relaxed mb-8">{tool.description}</p>

                  <div className="flex items-center gap-3">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-3 px-6"
                    >
                      Open Tool <ExternalLink size={15} />
                    </a>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass py-3 px-6"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utility Tools */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">Coming Soon</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Utility <span className="text-gradient">Toolbox</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-lg">Free business tools being built for the Beta community. No sign-up required.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {UTILITY_TOOLS.map((tool, i) => (
              <div
                key={tool.name}
                className={`glass-card p-5 tool-card reveal reveal-delay-${(i % 4) + 1} cursor-pointer group`}
              >
                <div className="text-2xl mb-4">{tool.icon}</div>
                <h3 className="font-display text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{tool.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{tool.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-blue-400/50 text-xs group-hover:text-blue-400 transition-colors">
                  <Zap size={10} />
                  <span>Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & SEO Services */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Services</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                We Also Build
                <br />
                <span className="text-gradient">Websites & SEO</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Beta Solutions doesn't just create tools — we also build custom websites for businesses and set up Google Business Profiles to drive organic leads and increase your local SEO rankings.
              </p>
              <div className="space-y-4">
                {[
                  "Custom website design & development",
                  "Google Business Profile setup & optimisation",
                  "Local SEO to drive qualified leads",
                  "Landing pages that convert visitors to clients",
                  "Ongoing website maintenance & updates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary">
                  Request a Website <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-xl" />
                <div className="glass-card-blue gradient-border p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { label: "Websites Built", value: "20+", icon: "🌐" },
                      { label: "Avg. Load Time", value: "<2s", icon: "⚡" },
                      { label: "Google Rankings", value: "Top 3", icon: "📈" },
                      { label: "Client Satisfaction", value: "100%", icon: "⭐" },
                    ].map((stat) => (
                      <div key={stat.label} className="glass-card p-5 rounded-xl text-center">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="font-display text-xl font-bold text-blue-400">{stat.value}</div>
                        <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 glass-card rounded-xl border border-blue-500/10">
                    <p className="text-white/60 text-sm leading-relaxed italic">
                      "A great website is your 24/7 salesperson. It works while you sleep, generates leads while you're busy, and builds trust before you even say a word."
                    </p>
                    <p className="text-blue-400 text-xs mt-3 font-medium">— Victor O'Brien Jr.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Need a <span className="text-gradient">Custom Solution?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Not finding exactly what you need? Let's talk and build something just for your business.
          </p>
          <Link to="/contact" className="btn-primary text-base py-4 px-10">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
