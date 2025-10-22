"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function AdvisorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`px-6 py-16 md:py-24 lg:py-32 bg-secondary/30 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">Advisory Services</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p className="text-xl font-medium text-primary">
                "The best AI products come from deeply understanding what people actually need—not just what's
                technically possible."
              </p>
              <p>
                I partner with startups at critical inflection points, helping them navigate the complexities of AI
                product development and market expansion.
              </p>
              <p>
                My approach combines rigorous user research with strategic product thinking to ensure your AI solutions
                solve real problems for real people.
              </p>
              <div className="pt-4 space-y-3">
                <h3 className="font-serif text-2xl text-foreground">Key Offerings:</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>AI product strategy and roadmap development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>International market expansion and localization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Building first research capabilities and user insights programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Problem validation and product-market fit assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/abstract-warm-tones-collaboration-workspace.jpg" alt="Advisory services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
