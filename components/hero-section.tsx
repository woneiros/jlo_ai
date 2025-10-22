"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`px-6 py-16 md:py-24 lg:py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
              Hi there!
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                I&apos;m a user-centric AI product and research strategist with
                15+ years translating customer insights into shipped products at
                scale at <span className="font-medium">Grammarly</span>,{" "}
                <span className="font-medium">Uber</span>, and{" "}
                <span className="font-medium">SK Telecom</span>.
              </p>
              <p>
                I specialize in bridging the gap between cutting-edge AI
                capabilities and real human needs, ensuring that technology
                serves people rather than the other way around.
              </p>
              <p>
                I also advise startups on problem assessment, product strategy,
                and market expansion—helping founders navigate critical
                inflection points with clarity and confidence.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-card">
                <Image
                  src="/jlo_portfolio.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
