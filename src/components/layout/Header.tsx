"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 h-16 md:h-20"
                : "bg-white h-20 md:h-24"
                }`}
        >
            <nav className="container mx-auto px-6 sm:px-10 lg:px-12 max-w-7xl h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Brand Logo - Left */}
                    <Link href="/" className="flex items-center">
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation - Right */}
                    <div className="hidden md:flex items-center space-x-8 ml-auto">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative text-xs font-medium tracking-widest transition-colors hover:text-primary ${isActive ? "text-primary" : "text-zinc-500"
                                        }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Trigger - Right */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="flex items-center gap-2 group focus:outline-none"
                            aria-label="Open menu"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 group-hover:text-primary transition-colors">
                                Menu
                            </span>
                            <div className="space-y-1">
                                <div className="w-5 h-0.5 bg-zinc-900 group-hover:bg-primary transition-colors" />
                                <div className="w-3 h-0.5 bg-zinc-900 group-hover:bg-primary transition-colors ml-auto" />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
        </header>
    );
}