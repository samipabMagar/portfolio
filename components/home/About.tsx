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

          {/* Right: Content */}
          <div className="flex flex-col justify-center py-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary tracking-tight mb-10 leading-[1.1]">
              Crafting digital <br className="hidden sm:block" />
              experiences with{" "}
              <span className="italic text-brand">purpose.</span>
            </h2>

            <div className="space-y-6 text-base text-text-secondary leading-relaxed font-light">
              <p>
                I love building things for the web — from clean, fast frontends
                to solid backend systems. I care a lot about both how things
                work and how they look, so I always try to write code that is
                easy to maintain and build interfaces that feel great to use.
              </p>

              {/* Highlighted Quote */}
              <div className="relative pl-6 py-2 my-1">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-full" />
                <p className="text-2xl font-serif italic text-accent leading-snug">
                  "Great software lives at the intersection of clean logic and
                  intuitive design."
                </p>
              </div>

              <p>
                I'm currently a Software Developer Intern at Yeti Nepal and
                doing my Bachelors in Information Technology (BIT) at
                Informatics College Pokhara. I enjoy learning new things,
                working with others, and turning real problems into working
                solutions. I'm always looking for ways to improve and build
                things that actually matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
