import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />

      <div className="relative text-center px-6 max-w-xl">
        <div className="font-display text-[120px] md:text-[180px] font-black leading-none text-gradient opacity-20 mb-4 select-none">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 -mt-8">
          Page Not Found
        </h1>
        <p className="text-white/50 text-lg mb-10 leading-relaxed">
          This page doesn't exist. But there's a lot of value waiting on the pages that do.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary py-3 px-8">
            <Home size={16} /> Go Home
          </Link>
          <Link to="/tools" className="btn-glass py-3 px-8">
            Explore Tools <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
