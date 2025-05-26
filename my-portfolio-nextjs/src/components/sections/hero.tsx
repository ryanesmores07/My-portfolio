"use client";

import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

export function Hero() {
  return (
    <section className="bg-background text-foreground py-20 px-8 md:px-16 lg:px-40 flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 max-w-7xl w-full">
        {/* Text Container */}
        <div className="flex-1 lg:flex-[60%] mb-12 lg:mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-0 animate-slide-up">
            <span className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] bg-clip-text text-transparent">
              Shopify Developer
            </span>
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-0 animate-slide-up [animation-delay:200ms]">
            crafting products
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 animate-slide-up [animation-delay:400ms]">
            that people love
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-20 max-w-[95%] md:max-w-[65%] lg:max-w-[80%] animate-slide-up [animation-delay:600ms]">
            I&apos;m Ernie Ryan— a web developer who works with startups looking to
            push creative boundaries and create unique user experiences.
          </p>

          <div className="flex items-center relative animate-slide-up [animation-delay:800ms]">
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

        {/* Image Container */}
        <div className="flex-1 lg:flex-[40%] text-center relative p-4 animate-slide-up">
          <div className="relative">
            {/* Gradient blur background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#cd1590] to-[#d2177e] blur-[25px] opacity-50 animate-pulse"></div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <Image
                src="/api/placeholder/400/550" // You'll need to add your actual image
                alt="Ernie Ryan"
                width={400}
                height={550}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 