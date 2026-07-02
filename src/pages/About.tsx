import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Quote, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TIMELINE, TOOLS } from "@/constants";
import victor1 from "@/assets/victor-1.png";
import victor2 from "@/assets/victor-2.png";

export default function About() {
  useScrollReveal();

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal">
              <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-6">About the Founder</p>
              <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-8">
                Victor O'Brien
                <br />
                <span className="text-gradient">Junior</span>
              </h1>

              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <MapPin size={14} className="text-blue-400" />
                  <span className="text-white/70 text-sm">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <Calendar size={14} className="text-blue-400" />
                  <span className="text-white/70 text-sm">18 years old</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <Rocket size={14} className="text-blue-400" />
                  <span className="text-white/70 text-sm">Solo Founder</span>
                </div>
              </div>

              <div className="glass-card-blue p-6 rounded-2xl border border-blue-500/20 mb-8 relative">
                <Quote size={24} className="text-blue-400/40 absolute top-4 right-4" />
                <p className="text-white/80 text-lg leading-relaxed italic">
                  "I don't just teach business. I build businesses."
                </p>
              </div>

              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Every framework, website, automation, AI tool, and strategy I share comes from{" "}
                  <span className="text-white font-medium">actual execution</span> — not textbooks.
                </p>
                <p>
                  Growing up in Lagos, I always felt Nigerians have incredible potential but lack access to the right tools, systems, and knowledge to turn that potential into lasting businesses.
                </p>
                <p>
                  So at 18, I decided to become the solution. I built{" "}
                  <span className="text-blue-400 font-medium">{TOOLS.length} AI-powered tools</span>, helped{" "}
                  <span className="text-blue-400 font-medium">50+ businesses</span>, published{" "}
                  <span className="text-blue-400 font-medium">100+ videos</span>, and am growing a community of founders who support each other.
                </p>
                <p>
                  Beta Solutions is not just a brand. It's a movement.{" "}
                  <span className="text-white font-medium">Building businesses that build Africa.</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="btn-primary">
                  Work With Me <ArrowRight size={16} />
                </Link>
                <Link to="/tools" className="btn-glass">
                  See My Tools
                </Link>
              </div>
            </div>

            {/* Two separate photos */}
            <div className="relative reveal reveal-delay-2">
              <div className="grid grid-cols-2 gap-4 items-start">
                {/* Photo 1 — taller, left */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/15 to-transparent rounded-2xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden gradient-border">
                    <img
                      src={victor2}
                      alt="Victor O'Brien Junior – Founder of Beta Solutions"
                      className="w-full h-[340px] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
                  </div>
                  {/* Stat card */}
                  <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-xl border border-white/10">
                    <div className="text-white font-bold text-xl">4</div>
                    <div className="text-white/50 text-xs">AI Tools Built</div>
                  </div>
                </div>
                {/* Photo 2 — offset down, right */}
                <div className="relative mt-8">
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/10 to-transparent rounded-2xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={victor1}
                      alt="Victor O'Brien Junior"
                      className="w-full h-[280px] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
                  </div>
                  {/* Stat card */}
                  <div className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl border border-blue-500/20">
                    <div className="text-blue-400 font-bold text-xl">18</div>
                    <div className="text-white/50 text-xs">Year Old Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">The Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              From Curious Kid to <span className="text-gradient">Builder</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent transform md:-translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div key={item.event} className={`relative flex items-start gap-8 md:gap-0 reveal reveal-delay-${(i % 4) + 1} ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#050505] transform -translate-x-1/2 md:-translate-x-1/2 mt-1 z-10 shadow-sm shadow-blue-500/40" />
                  <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-[55%]"}`}>
                    <div className="glass-card p-5 rounded-xl gradient-border tool-card">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20 font-mono">{item.year}</span>
                        <span className="font-display font-bold text-white">{item.event}</span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">What I Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Core <span className="text-gradient">Beliefs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ArrowRight size={24} className="text-orange-400" />, title: "Execution Over Theory", desc: "Ideas without action are just dreams. Everything I build comes from actually doing the work — and sharing what works.", iconBg: "bg-orange-500/10 border-orange-500/20" },
              { icon: <MapPin size={24} className="text-green-400" />, title: "Africa Has the Potential", desc: "Nigerian founders are some of the most resilient people on earth. They just need the right tools, systems and access.", iconBg: "bg-green-500/10 border-green-500/20" },
              { icon: <Rocket size={24} className="text-blue-400" />, title: "Build to Give Back", desc: "As I grow, I bring others with me. Every tool, resource and video I release is designed to lower the barrier to entry for the next founder.", iconBg: "bg-blue-500/10 border-blue-500/20" },
            ].map((val, i) => (
              <div key={val.title} className={`glass-card p-7 gradient-border tool-card reveal reveal-delay-${i + 1}`}>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${val.iconBg}`}>{val.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Whether you want a website, automation, strategy or just to link up — I'm here.</p>
          <Link to="/contact" className="btn-primary text-base py-4 px-10">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
