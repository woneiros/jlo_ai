"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
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
      <div className="mx-auto max-w-3xl">
        <Card className="p-8 md:p-12 bg-card shadow-lg border-border/50">
          <div className="text-center space-y-8">
            {/* Decorative Icon */}
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-accent/10">
                <Pencil className="w-6 h-6 text-accent" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Work with me
            </h2>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a
                href="mailto:lomongestudios@gmail.com"
                className="group flex items-center gap-3 text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">Email</span>
              </a>

              <div className="hidden sm:block w-px h-8 bg-border" />

              <a
                href="https://linkedin.com/in/jenlo1018"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Optional Subtext */}
            <p className="text-muted-foreground text-base max-w-md mx-auto pt-4">
              Let&apos;s discuss how we can work together to build AI products
              that truly serve your users.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
