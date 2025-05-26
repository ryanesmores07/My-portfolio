import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <SelectedProjects />
      <ContactCTA />
    </MainLayout>
  );
}
