import { MainLayout } from "@/components/layout/main-layout";
import { SelectedProjects } from "@/components/sections/selected-projects";

export default function Projects() {
  return (
    <MainLayout>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-foreground">
            All <span className="bg-gradient-to-r from-[#bd10c3] via-[#cd1590] to-[#d2177e] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-4xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing different technologies and creative solutions.
          </p>
        </div>
        <SelectedProjects />
      </div>
    </MainLayout>
  );
} 