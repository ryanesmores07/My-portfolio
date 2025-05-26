"use client";

import React, { useState, createContext, useContext } from "react";

interface PortfolioContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  showSidebar: () => void;
  hideSidebar: () => void;
  links: Array<{ id: number; text: string; url: string }>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

interface PortfolioProviderProps {
  children: React.ReactNode;
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Navigation links - we'll populate this from constants later
  const [links] = useState([
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Projects", url: "/projects" },
    { id: 4, text: "Contact", url: "/contact" },
  ]);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        showSidebar,
        hideSidebar,
        links,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}; 