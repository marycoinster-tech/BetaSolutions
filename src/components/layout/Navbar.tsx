import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-sm glow-blue">
              β
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight">Beta</span>
              <span className="font-display font-light text-blue-400 text-lg ml-1">Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-blue-400 active"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col pt-24 pb-12 px-8 ${
          menuOpen ? "open" : "closed"
        }`}
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              to={item.href}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`py-4 text-2xl font-display font-semibold border-b border-white/5 transition-all duration-300 ${
                location.pathname === item.href
                  ? "text-blue-400"
                  : "text-white/80 hover:text-white"
              } ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <Link to="/contact" className="btn-primary justify-center text-base py-4">
            Book a Free Call
          </Link>
          <Link to="/tools" className="btn-glass justify-center text-base py-4">
            Explore Tools
          </Link>
        </div>
      </div>
    </>
  );
}
