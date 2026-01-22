"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { useEffect } from "react";
import { X, Mail, Github, Linkedin, Twitter } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] md:hidden">
            {/* Absolute background covering every inch */}
            <div className="absolute inset-0 bg-white" />

            {/* Main Content Container */}
            <div className="relative h-full w-full flex flex-col bg-white">
                {/* Mobile Header (Matching main header height) */}
                <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-zinc-100">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="text-xl font-bold tracking-tight text-zinc-900"
                    >
                        {siteConfig.name}
                    </Link>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-900 hover:text-primary transition-colors focus:outline-none"
                        aria-label="Close menu"
                    >
                        <X size={24} strokeWidth={2} />
                    </button>
                </div>

                {/* Vertical Navigation */}
                <nav className="flex-1 flex flex-col justify-center px-10 py-12 bg-white">
                    <ul className="space-y-10">
                        {navigationItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className={`text-4xl font-bold tracking-tight transition-colors ${pathname === item.href
                                            ? "text-primary"
                                            : "text-zinc-900 hover:text-primary"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Minimalist Footer */}
                <div className="p-10 border-t border-zinc-100 space-y-8">
                    <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                            Direct Contact
                        </span>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-lg font-medium text-zinc-900 hover:text-primary transition-colors flex items-center gap-3"
                        >
                            <Mail size={18} className="text-primary" />
                            {siteConfig.email}
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-zinc-400 hover:text-primary transition-colors"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="#"
                            className="text-zinc-400 hover:text-primary transition-colors"
                        >
                            <Twitter size={22} />
                        </a>
                        <a
                            href="#"
                            className="text-zinc-400 hover:text-primary transition-colors"
                        >
                            <Github size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
