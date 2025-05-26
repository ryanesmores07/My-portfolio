"use client";

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

export function ContactCTA() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center" id="contact">
          <h1 
            ref={ref}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${
              inView ? "animate-appear" : "opacity-0"
            }`}
          >
            Have projects in mind?
          </h1>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 ${
              inView ? "animate-appear [animation-delay:200ms]" : "opacity-0"
            }`}
          >
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] bg-clip-text text-transparent">
              together
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-20 max-w-4xl mx-auto ${
              inView ? "animate-appear [animation-delay:400ms]" : "opacity-0"
            }`}
          >
            I&apos;m Ernie Ryan— a developer who works with startups looking to push
            creative boundaries that propels your businesses to the next level!
          </p>

          <div 
            className={`inline-flex items-center relative ${
              inView ? "animate-appear [animation-delay:600ms]" : "opacity-0"
            }`}
          >
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] via-[#d2177e] to-[#eb9fed] text-primary-foreground rounded-full py-5 px-16 pr-28 text-lg font-normal relative z-10 hover:shadow-lg transition-shadow"
            >
              Get in touch
            </Link>
            <div className="absolute right-1 bg-primary-foreground w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
              <HiOutlineArrowRight className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 