"use client";

import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

// Mock project data - you can replace this with your actual data source
const projects = [
  {
    id: 1,
    title: "Style Mate",
    description: "A modern e-commerce platform built with Shopify Liquid",
    image: "/api/placeholder/600/400",
    stack: ["Shopify Liquid", "JavaScript", "CSS"],
    slug: "stylemate",
  },
  {
    id: 2,
    title: "Galaxy Ways",
    description: "Innovative space-themed e-commerce experience",
    image: "/api/placeholder/600/400",
    stack: ["Shopify Liquid", "React", "SCSS"],
    slug: "galaxyways",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio showcasing creative work",
    image: "/api/placeholder/600/400",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    slug: "portfolio",
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description: "Analytics dashboard for online stores",
    image: "/api/placeholder/600/400",
    stack: ["React", "Node.js", "MongoDB"],
    slug: "dashboard",
  },
];

export function SelectedProjects() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20" id="projects">
          <h2 
            ref={ref}
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              inView ? "animate-appear" : "opacity-0"
            }`}
          >
            Selected{" "}
            <span className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-4xl mx-auto ${
              inView ? "animate-appear [animation-delay:200ms]" : "opacity-0"
            }`}
          >
            Over the years, I&apos;ve partnered with startups of all sizes and
            various stages to create some truly unique products. Here are a few
            that I feel were the most challenging yet rewarding.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-card p-8 transition-transform duration-200 hover:-translate-y-6 shadow-lg ${
                index % 2 === 1 ? "lg:translate-y-40 lg:hover:translate-y-34" : ""
              }`}
            >
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto mb-8 rounded"
                />
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-primary/10 text-primary text-sm rounded-full px-4 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-card-foreground mb-8">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-medium tracking-wide">
                    VIEW PROJECT
                  </span>
                  <div className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] rounded-full p-2">
                    <HiOutlineArrowRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link 
              href="/projects"
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              View All Projects
            </Link>
            <div className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] rounded-full p-2">
              <HiOutlineArrowRight className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 