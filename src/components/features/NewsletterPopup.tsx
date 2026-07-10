import { useState, useEffect, useRef } from "react";
import { X, ArrowRight, Mail } from "lucide-react";

const STORAGE_KEY = "beta_newsletter_dismissed";
const DELAY_MS = 30000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Don't show if already dismissed or subscribed
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    // Auto-hide after 3s
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{ maxWidth: 340 }}
    >
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15, 23, 42, 0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(59,130,246,0.18)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/6 transition-all duration-200"
          aria-label="Dismiss newsletter popup"
        >
          <X size={14} />
        </button>

        <div className="p-6 pr-10">
          {submitted ? (
            /* Success state */
            <div className="text-center py-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center mx-auto mb-3">
                <Mail size={18} className="text-blue-400" />
              </div>
              <p className="text-white font-semibold text-sm mb-1">You're in.</p>
              <p className="text-white/45 text-xs leading-relaxed">
                Check your inbox this Sunday for your first insight.
              </p>
            </div>
          ) : (
            <>
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Get new articles every Sunday</p>
                  <p className="text-white/35 text-xs mt-0.5">No spam. One lesson, one tool, one opportunity.</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary py-2.5 text-sm justify-center w-full"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>

              <button
                onClick={dismiss}
                className="mt-3 w-full text-center text-white/25 text-xs hover:text-white/45 transition-colors duration-200"
              >
                No thanks
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
