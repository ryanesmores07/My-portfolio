import Link from "next/link";
import { socialLinks } from "@/constants/navigation";

export function Footer() {

  return (
    <footer className="bg-background text-foreground pt-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex space-x-12 mb-8 md:mb-0">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-2xl md:text-3xl hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-2"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Made with Gatsby/Next.js */}
        <div className="text-center py-12">
          <Link 
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-muted-foreground hover:text-primary transition-colors"
          >
            Next.js ❤️
          </Link>
        </div>
      </div>
    </footer>
  );
} 