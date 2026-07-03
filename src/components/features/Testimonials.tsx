import { useEffect, useRef, useState } from "react";
import { Star, BadgeCheck } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  businessType: string;
  quote: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Tunde Adeyemi",
    role: "CEO",
    businessType: "Logistics SME",
    quote: "Victor redesigned our entire digital presence. Our website traffic doubled and we started getting leads from Google within three weeks of the Google Business setup. This guy is the real deal.",
    rating: 5,
    initials: "TA",
    avatarColor: "from-blue-500 to-cyan-500",
  },
  {
    name: "Chisom Okafor",
    role: "Founder",
    businessType: "Fashion Brand",
    quote: "ViralForgeAI changed how we create content. We went from struggling to post twice a week to having a full 30-day content calendar ready in under an hour. Absolutely worth it.",
    rating: 5,
    initials: "CO",
    avatarColor: "from-pink-500 to-rose-500",
  },
  {
    name: "Emeka Nwosu",
    role: "Director",
    businessType: "Consulting Firm",
    quote: "BetaBook gave us full visibility into our cash flow for the first time. We could see where money was going, plug the leaks, and actually plan. Our margins improved by 22% in two months.",
    rating: 5,
    initials: "EN",
    avatarColor: "from-green-500 to-emerald-500",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Co-Founder",
    businessType: "EdTech Startup",
    quote: "The strategy session alone was worth triple what I paid. Victor broke down our business model, identified three critical gaps, and gave us a clear 90-day roadmap. We hit our first ₦1M month after that.",
    rating: 5,
    initials: "FA",
    avatarColor: "from-purple-500 to-violet-500",
  },
  {
    name: "Segun Balogun",
    role: "Owner",
    businessType: "Restaurant Chain",
    quote: "OmniDesk streamlined our operations across all three locations. What used to take three people to track now runs itself. Our team is finally working on growth, not admin tasks.",
    rating: 5,
    initials: "SB",
    avatarColor: "from-orange-500 to-amber-500",
  },
  {
    name: "Adaeze Eze",
    role: "Marketing Lead",
    businessType: "Real Estate Agency",
    quote: "We hired Beta Solutions for website design and SEO. Six months later we rank on the first page of Google for our city. The leads coming in are warm and qualified. I recommend Victor to every business owner I meet.",
    rating: 5,
    initials: "AE",
    avatarColor: "from-teal-500 to-cyan-500",
  },
  {
    name: "Ibrahim Musa",
    role: "Founder",
    businessType: "Fintech Startup",
    quote: "VerolenteAI solved a problem we didn't even know how to articulate. Content authenticity is critical in fintech, and having a verification layer gave our investors confidence. Brilliant product.",
    rating: 5,
    initials: "IM",
    avatarColor: "from-indigo-500 to-blue-500",
  },
  {
    name: "Ngozi Phillip",
    role: "CEO",
    businessType: "Healthcare SME",
    quote: "The digital product toolkit was exactly what I needed to launch my online course. Step-by-step, no jargon, real actionable content. I made my first sale within 48 hours of launching.",
    rating: 5,
    initials: "NP",
    avatarColor: "from-red-500 to-pink-500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < rating ? "#FBBF24" : "none"}
          stroke={i < rating ? "#FBBF24" : "#ffffff30"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[320px] sm:w-[360px] flex-shrink-0 glass-card p-6 rounded-2xl border border-white/8 hover:border-blue-500/25 transition-all duration-300 mx-3">
      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={t.rating} />
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-4">
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-semibold text-sm">{t.name}</span>
            <BadgeCheck size={13} className="text-blue-400 flex-shrink-0" />
          </div>
          <span className="text-white/40 text-xs">{t.role} · {t.businessType}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);
  const speedRef = useRef(0.6);

  // Duplicate for seamless loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function animate() {
      if (!track) return;
      if (!isPaused) {
        posRef.current += speedRef.current;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-14 reveal">
        <div className="text-center">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Social Proof</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Founders <span className="text-gradient">Say</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            Real businesses. Real results. From Lagos to Abuja and beyond.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex items-stretch will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Summary stats strip */}
      <div className="max-w-3xl mx-auto px-6 mt-14 reveal">
        <div className="glass-card gradient-border p-6 rounded-2xl">
          <div className="grid grid-cols-3 gap-6 divide-x divide-white/8">
            {[
              { value: "50+", label: "Businesses Served" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "Recommend Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="font-display text-2xl font-black text-blue-400 mb-1">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
