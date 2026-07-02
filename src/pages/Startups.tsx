import { ExternalLink, Lightbulb, TrendingUp, Briefcase, Laptop, Package, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { OPPORTUNITIES } from "@/constants";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BADGE_CONFIGS: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  blue: { color: "text-blue-300", bg: "bg-blue-500/10 border-blue-500/20", icon: <Lightbulb size={12} /> },
  green: { color: "text-green-300", bg: "bg-green-500/10 border-green-500/20", icon: <TrendingUp size={12} /> },
  orange: { color: "text-orange-300", bg: "bg-orange-500/10 border-orange-500/20", icon: <Briefcase size={12} /> },
  cyan: { color: "text-cyan-300", bg: "bg-cyan-500/10 border-cyan-500/20", icon: <Laptop size={12} /> },
  purple: { color: "text-purple-300", bg: "bg-purple-500/10 border-purple-500/20", icon: <Package size={12} /> },
};

const IDEA_ICONS = [
  <Briefcase size={24} className="text-orange-400" />,
  <Cpu size={24} className="text-blue-400" />,
  <TrendingUp size={24} className="text-green-400" />,
  <Laptop size={24} className="text-cyan-400" />,
  <Package size={24} className="text-purple-400" />,
  <Lightbulb size={24} className="text-yellow-400" />,
];

export default function Startups() {
  useScrollReveal();

  const ideas = [
    { title: "Ghost Kitchen / Food Delivery Brand", category: "Business Idea", investment: "₦50K–₦200K", potential: "High", desc: "Start a food brand with no physical restaurant. Use delivery apps and social media to sell consistently." },
    { title: "Content Creation Agency", category: "Business Idea", investment: "₦0–₦30K", potential: "High", desc: "Help businesses create content for their social media. Reels, graphics, YouTube — demand is massive." },
    { title: "AI Consulting for SMEs", category: "AI Opportunity", investment: "₦0", potential: "Very High", desc: "Help small businesses integrate AI tools into their workflow. You don't need to code — just know the tools." },
    { title: "Online Course Business", category: "Digital Product", investment: "₦0–₦20K", potential: "High", desc: "Package what you know into a course. Sell once, earn forever. Works in any niche." },
    { title: "E-commerce / Dropshipping", category: "Business Idea", investment: "₦30K–₦150K", potential: "Medium-High", desc: "Sell products online without holding inventory. Source locally or internationally and sell at a margin." },
    { title: "Website Design Agency", category: "Business Idea", investment: "₦0", potential: "Very High", desc: "Every business needs a website. Learn to design with no-code tools and charge ₦50K–₦500K per project." },
  ];

  const grants = [
    { name: "Tony Elumelu Foundation", amount: "$5,000", deadline: "Yearly (Q1)", link: "https://tonyelumelufoundation.org" },
    { name: "Founder Institute Nigeria", amount: "Equity + Mentorship", deadline: "Rolling", link: "#" },
    { name: "SMEDAN Funding Programme", amount: "₦500K–₦5M", deadline: "Quarterly", link: "#" },
    { name: "Google for Startups Africa", amount: "$100K Cloud Credits", deadline: "Rolling", link: "#" },
    { name: "CBN Youth Entrepreneurship Fund", amount: "₦1M–₦10M", deadline: "Yearly", link: "#" },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Opportunity Hub</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Discover Your Next <span className="text-gradient">Opportunity</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Business ideas, side hustles, grants, funding, competitions, remote jobs and AI opportunities — curated for African founders.
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 reveal">
            <h2 className="font-display text-3xl font-bold text-white mb-2">Current <span className="text-gradient">Opportunities</span></h2>
            <p className="text-white/40 text-sm">Curated weekly. Fresh opportunities for ambitious founders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPPORTUNITIES.map((opp, i) => {
              const badge = BADGE_CONFIGS[opp.badgeColor] || BADGE_CONFIGS.blue;
              return (
                <div key={opp.id} className={`glass-card gradient-border p-6 tool-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.color}`}>
                      {badge.icon}
                      {opp.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-3">{opp.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{opp.description}</p>
                  {opp.link ? (
                    <a href={opp.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
                      Learn More <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link to="/contact" className="inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
                      Get Guidance <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Ideas */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">Ideas Bank</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Business <span className="text-gradient">Ideas to Start Now</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, i) => (
              <div key={idea.title} className={`glass-card p-6 tool-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {IDEA_ICONS[i]}
                  </div>
                  <div>
                    <span className="text-blue-400/70 text-xs uppercase tracking-wide">{idea.category}</span>
                    <h3 className="font-display text-sm font-bold text-white">{idea.title}</h3>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{idea.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white/30">Investment: </span>
                    <span className="text-white/70 font-medium">{idea.investment}</span>
                  </div>
                  <span className={`font-semibold ${idea.potential.includes("Very") ? "text-green-400" : "text-blue-400"}`}>
                    {idea.potential} Potential
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grants */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">Funding</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Grants & <span className="text-gradient">Funding Opportunities</span>
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/8 bg-white/3">
                  <th className="text-left px-6 py-4 text-white/50 text-xs uppercase tracking-widest font-medium">Programme</th>
                  <th className="text-left px-6 py-4 text-white/50 text-xs uppercase tracking-widest font-medium hidden md:table-cell">Amount</th>
                  <th className="text-left px-6 py-4 text-white/50 text-xs uppercase tracking-widest font-medium hidden md:table-cell">Deadline</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {grants.map((grant, i) => (
                  <tr key={grant.name} className={`border-b border-white/5 hover:bg-blue-500/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="px-6 py-4">
                      <span className="text-white font-medium text-sm">{grant.name}</span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-green-400 font-semibold text-sm">{grant.amount}</span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-white/50 text-sm">{grant.deadline}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a href={grant.link} target="_blank" rel="noopener noreferrer" className="btn-glass text-xs py-1.5 px-3 inline-flex">
                        Apply <ExternalLink size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Not Sure Where to <span className="text-gradient">Start?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Book a free strategy call. Let's figure out the best opportunity for your situation.</p>
          <Link to="/contact" className="btn-primary text-base py-4 px-10">
            Book Free Strategy Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
