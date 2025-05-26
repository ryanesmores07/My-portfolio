"use client";

import Link from "next/link";
import { usePortfolio } from "@/context/portfolio-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const { isSidebarOpen, showSidebar, hideSidebar, links } = usePortfolio();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground" onClick={hideSidebar}>
            <div className="w-12 h-12 bg-gradient-to-r from-[#bd10c3] to-[#d2177e] rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={isSidebarOpen ? hideSidebar : showSidebar}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isSidebarOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={hideSidebar}
                className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors text-lg"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 