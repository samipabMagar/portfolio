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

          <div className="relative lg:ml-auto w-full max-w-lg mt-10 lg:mt-0">
            <div className="animate-float relative z-20 bg-text-primary rounded-2xl shadow-2xl border border-border-soft/10 overflow-hidden">
              {/* Fake Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-border-soft/10 bg-black/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-background-muted/20"></div>
                  <div className="w-3 h-3 rounded-full bg-background-muted/20"></div>
                  <div className="w-3 h-3 rounded-full bg-background-muted/20"></div>
                </div>
                <div className="mx-auto text-text-muted/70 text-xs font-mono tracking-widest uppercase">
                  Samipab.tsx
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 text-sm sm:text-base font-mono leading-relaxed overflow-x-auto">
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    1
                  </span>
                  <span className="text-accent">import</span>
                  <span className="text-background-main ml-2">
                    &#123; Developer &#125;
                  </span>
                  <span className="text-accent ml-2">from</span>
                  <span className="text-brand ml-2">"@/nepal"</span>
                  <span className="text-background-main">;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    2
                  </span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    3
                  </span>
                  <span className="text-accent">export const</span>
                  <span className="text-background-main ml-2">Samipab</span>
                  <span className="text-accent ml-2">=</span>
                  <span className="text-background-main ml-2">()</span>
                  <span className="text-accent ml-2">=&gt;</span>
                  <span className="text-background-main ml-2">&#123;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    4
                  </span>
                  <span className="text-accent ml-4">return</span>
                  <span className="text-background-main ml-2">(</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    5
                  </span>
                  <span className="text-brand ml-8">&lt;Developer</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    6
                  </span>
                  <span className="text-text-muted ml-12">stack=</span>
                  <span className="text-background-main">&#123;[</span>
                  <span className="text-brand">"React"</span>
                  <span className="text-background-main">, </span>
                  <span className="text-brand">"Next.js"</span>
                  <span className="text-background-main">, </span>
                  <span className="text-brand">"Node"</span>
                  <span className="text-background-main">]&#125;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    7
                  </span>
                  <span className="text-text-muted ml-12">location=</span>
                  <span className="text-background-main">&#123;</span>
                  <span className="text-accent">"Pokhara, Nepal 🇳🇵"</span>
                  <span className="text-background-main">&#125;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    8
                  </span>
                  <span className="text-text-muted ml-12">status=</span>
                  <span className="text-background-main">&#123;</span>
                  <span className="text-accent">
                    "Designing. Building. Iterating."
                  </span>
                  <span className="text-background-main">&#125;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    9
                  </span>
                  <span className="text-text-muted ml-12">philosophy=</span>
                  <span className="text-background-main">&#123;</span>
                  <span className="text-accent">
                    "Build less. Build better."
                  </span>
                  <span className="text-background-main">&#125;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    10
                  </span>
                  <span className="text-brand ml-8">/&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    11
                  </span>
                  <span className="text-background-main ml-4">);</span>
                </div>
                <div className="flex">
                  <span className="text-text-secondary select-none pr-4 text-right w-8">
                    12
                  </span>
                  <span className="text-background-main">&#125;;</span>
                </div>
              </div>
            </div>

            {/* Decorative background element behind the card */}
            <div
              className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-brand/30 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl z-0 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
