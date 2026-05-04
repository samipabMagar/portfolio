import Link from "next/link";
import { DownloadIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <main className="relative overflow-hidden flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-brand/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div
        className="absolute top-40 -right-32 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-start text-left">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent"></span>
              Web Developer based in Nepal
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-text-primary leading-[1.1] mb-6 tracking-tight">
              Transforming ideas <br className="hidden sm:block" />
              into <span className="italic text-brand">engaging</span>{" "}
              <br className="hidden sm:block" />
              digital products.
            </h1>

            <p className="text-lg text-text-secondary max-w-lg mb-10 leading-relaxed font-light">
              I love building modern, responsive web applications that merge
              clean design with optimized performance. Always learning,
              building, and exploring new technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors shadow-md flex items-center justify-center"
              >
                View Work
              </Link>
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className="border-2 border-border-soft hover:border-brand text-text-primary hover:text-brand px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all bg-background-surface/50 backdrop-blur-sm shadow-sm flex items-center justify-center gap-2"
              >
                Resume
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
