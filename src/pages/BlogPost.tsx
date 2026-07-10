import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BLOG_POSTS } from "@/constants/blog";
import NewsletterPopup from "@/components/features/NewsletterPopup";

export default function BlogPost() {
  useScrollReveal();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (!post) navigate("/blog", { replace: true });
  }, [post, navigate]);

  if (!post) return null;

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = BLOG_POSTS[currentIndex - 1] || null;
  const nextPost = BLOG_POSTS[currentIndex + 1] || null;

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: post?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <main className="pt-24">
      <NewsletterPopup />
      {/* Back */}
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-0">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-white/40 hover:text-blue-400 text-sm transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        {/* Category + Meta */}
        <div className="flex items-center flex-wrap gap-3 mb-6">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-white/30 text-xs">
            <Calendar size={11} /> {post.publishDateFormatted}
          </span>
          <span className="flex items-center gap-1.5 text-white/30 text-xs">
            <Clock size={11} /> {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-white/60 text-lg leading-relaxed mb-8 border-l-2 border-blue-500/40 pl-5">
          {post.excerpt}
        </p>

        {/* Author row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-10 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
              V
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Victor O'Brien Junior</p>
              <p className="text-white/40 text-xs">Founder, Beta Solutions</p>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 btn-glass text-xs py-2 px-4"
          >
            <Share2 size={13} /> Share Article
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video">
          <img src={post.thumb} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent" />
        </div>

        {/* Rich Content */}
        <div
          className="prose-beta"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <div className="mt-16 pt-10 border-t border-white/8">
          <div className="glass-card-blue p-6 rounded-2xl border border-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <BookOpen size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">About the Author</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Victor O'Brien Junior is an 18-year-old founder from Lagos, Nigeria. He builds AI tools, helps SMEs scale, and documents every lesson learned along the way. Follow his journey across all platforms.
                </p>
                <Link to="/about" className="inline-flex items-center gap-1.5 text-blue-400 text-sm mt-3 hover:text-blue-300 transition-colors font-medium">
                  Learn more about Victor <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Prev / Next */}
      {(prevPost || nextPost) && (
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group glass-card p-5 rounded-xl border border-white/8 hover:border-blue-500/25 transition-all duration-300">
                <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
                  <ArrowLeft size={12} /> Previous
                </div>
                <p className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">{prevPost.title}</p>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group glass-card p-5 rounded-xl border border-white/8 hover:border-blue-500/25 transition-all duration-300 text-right">
                <div className="flex items-center justify-end gap-2 text-white/30 text-xs mb-2">
                  Next <ArrowRight size={12} />
                </div>
                <p className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">{nextPost.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      )}

      {/* More Articles */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 reveal">
            <h2 className="font-display text-2xl font-bold text-white">More <span className="text-gradient">Articles</span></h2>
            <Link to="/blog" className="btn-glass text-sm py-2 px-4">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherPosts.map((p, i) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className={`group glass-card overflow-hidden tool-card reveal reveal-delay-${i + 1}`}>
                <div className="relative overflow-hidden h-36">
                  <img src={p.thumb} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${p.categoryColor} mb-2 inline-block`}>{p.category}</span>
                  <h3 className="font-display text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-3 mt-3 text-white/30 text-xs">
                    <span className="flex items-center gap-1"><Clock size={10} />{p.readTime}</span>
                    <span>{p.publishDateFormatted}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
