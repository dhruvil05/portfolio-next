"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                        {siteConfig.name}
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${pathname === item.href
                                        ? "text-primary-600"
                                        : "text-gray-700 hover:text-primary-600"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden p-2 text-gray-700 hover:text-primary-600"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </header>
    );
}