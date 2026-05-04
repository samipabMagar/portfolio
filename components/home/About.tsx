import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="py-10 bg-background-muted border-t border-border-soft/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold tracking-widest mb-4  uppercase text-sm mb- flex items-center gap-3">
          <span className="w-8 h-[2px] bg-accent"></span>
          About Me
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left: Developer ID Card */}
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            <div className="relative bg-text-primary rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/me.webp"
                  alt="Samipab"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/20 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="px-8 pb-8 -mt-4 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-accent text-xs tracking-widest uppercase font-semibold">
                    Available for work
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-background-main mb-1">
                  Samipab Roka Magar
                </h3>
                <p className="text-background-muted/70 text-sm tracking-widest uppercase mb-6">
                  Web Developer · Pokhara, Nepal
                </p>

                <div className="h-px bg-background-muted/10 mb-6" />

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "MySQL",
                    "MongoDB",
                    "GSAP",
                    "Sanity",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background-muted/10 text-background-muted/70 border border-background-muted/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
