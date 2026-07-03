import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BLOG_POSTS } from "@/constants/blog";

const ALL_CATEGORIES = ["All", "Business", "AI Tools", "Marketing", "Startups", "Automation"];

export default function Blog() {
  useScrollReveal();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = BLOG_POSTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOG_POSTS.filter((p) => p.featured);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Blog</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6">
            Business <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Real frameworks, AI breakdowns, and growth strategies for African founders. Written from the ground up, not from a textbook.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {!search && activeCategory === "All" && (
        <section className="pb-10 relative">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-6 reveal">Featured</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group glass-card gradient-border overflow-hidden tool-card reveal reveal-delay-${i + 1}`}
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={post.thumb}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/30 text-xs">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={11} /> {post.publishDateFormatted}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <span className="text-blue-400 text-xs flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter + Grid */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap mb-10 reveal">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-blue-500/15 border-blue-500/30 text-blue-300"
                    : "glass-card border-white/5 text-white/50 hover:text-white/80 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-white/25 text-xs">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-white/30">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles found</p>
              <p className="text-sm mt-2">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group glass-card overflow-hidden tool-card reveal reveal-delay-${(i % 3) + 1} flex flex-col`}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={post.thumb}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category + meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-white/30 text-xs">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug line-clamp-2 flex-1">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="flex items-center gap-1 text-white/30 text-xs">
                        <Calendar size={10} /> {post.publishDateFormatted}
                      </span>
                      <span className="text-blue-400 text-xs flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                        Read more <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss an <span className="text-gradient">Insight</span>
          </h2>
          <p className="text-white/50 mb-8">Get new articles + one business opportunity every Sunday in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-200 text-sm"
            />
            <button type="submit" className="btn-primary py-3 px-5 whitespace-nowrap text-sm">
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
