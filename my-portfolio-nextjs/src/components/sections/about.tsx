"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Text Container */}
        <div className="mb-60">
          <h2 
            ref={ref}
            className={`text-7xl leading-none font-medium mb-12 -ml-2 ${
              inView ? "animate-appear" : "opacity-0"
            }`}
          >
            ERNIE RYAN
          </h2>
          
          <div className="flex flex-col md:flex-row gap-20">
            <p 
              className={`text-lg leading-relaxed text-foreground flex-1 ${
                inView ? "animate-appear" : "opacity-0"
              }`}
            >
              Front-end / eCommerce developer based in Tokyo, Japan. I love
              building and designing responsive websites.
            </p>
            <p 
              className={`text-lg leading-relaxed text-foreground flex-1 ${
                inView ? "animate-appear" : "opacity-0"
              }`}
            >
              What is your challenge? I can help you with your eCommerce website
              and solve the problems that hinders the growth of your business!
            </p>
          </div>

          <div 
            className={`flex justify-start mt-10 mb-10 ml-12 ${
              inView ? "animate-appear" : "opacity-0"
            }`}
          >
            <div className="border-l-8 border-blue-500 pl-4 w-[70%]">
              <blockquote className="text-2xl leading-tight">
                &quot;You can do anything you set your mind to.&quot;
                <span className="text-2xl"> - Eminem</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-40">
          {/* Divider line */}
          <div className="absolute w-full h-px bg-border opacity-30 -top-40"></div>
          
          <div className="flex justify-center">
            <div className="w-[90%] flex">
              {/* Section 1 */}
              <div className="flex-1">
                <div className="relative">
                  <Image
                    src="/api/placeholder/400/450" // Replace with actual image
                    alt="About image 1"
                    width={400}
                    height={450}
                    className="border-4 border-card h-[45rem] w-full object-cover transform -rotate-[10deg] relative z-10"
                  />
                  <Image
                    src="/api/placeholder/400/450" // Replace with actual image
                    alt="About image 2"
                    width={400}
                    height={450}
                    className="border-4 border-card h-[45rem] w-full object-cover transform rotate-[15deg] -translate-y-28 relative z-20"
                  />
                </div>
              </div>
              
              {/* Section 2 */}
              <div className="flex-1">
                <div className="relative">
                  <Image
                    src="/api/placeholder/400/450" // Replace with actual image
                    alt="About image 3"
                    width={400}
                    height={450}
                    className="border-4 border-card h-[45rem] w-full object-cover transform rotate-[7deg] relative z-10"
                  />
                  <Image
                    src="/api/placeholder/400/450" // Replace with actual image
                    alt="About image 4"
                    width={400}
                    height={450}
                    className="border-4 border-card h-[45rem] w-full object-cover transform -rotate-[15deg] -translate-y-20 relative z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 