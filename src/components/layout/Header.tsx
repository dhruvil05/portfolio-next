"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
            <nav className="container mx-auto px-6 sm:px-10 lg:px-12 max-w-7xl">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                            {siteConfig.name}
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
                            aria-label="Open menu"
                        >
                            <Menu size={28} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </nav>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </header>
    );
}