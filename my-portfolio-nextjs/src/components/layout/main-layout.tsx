import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 bg-background text-foreground">
        {children}
      </main>
      <Footer />
    </div>
  );
} 