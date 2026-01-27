"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { useEffect } from "react";
import { X, ArrowRight, Instagram, Twitter, Linkedin, Github } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}

export default function MobileMenu({ isOpen, onClose, onToggle }: MobileMenuProps) {
    const pathname = usePathname();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-white transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            {/* Header within overlay */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-50">
                <span className="text-xl font-medium tracking-tight text-zinc-900">
                    {siteConfig.name}
                </span>
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 group focus:outline-none"
                    aria-label="Close menu"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900">
                        Close
                    </span>
                    <X size={20} className="text-zinc-900" />
                </button>
            </div>

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-between px-8 pt-12 pb-24">
                <nav className="flex flex-col space-y-6">
                    {navigationItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`group flex items-center justify-between transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 50 + 200}ms` }}
                            >
                                <span className={`text-2xl font-medium tracking-tight ${isActive ? "text-primary" : "text-zinc-900"
                                    }`}>
                                    {item.label}
                                </span>
                                <ArrowRight
                                    size={32}
                                    className={`transition-all duration-300 ${isActive ? "text-primary opacity-100" : "text-zinc-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Content */}
                <div
                    className={`space-y-10 transition-all duration-700 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="h-px w-full bg-zinc-100" />

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-widest text-zinc-400">Engineering Inquiries</p>
                            <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium text-zinc-900 underline decoration-primary/30 underline-offset-4">
                                Contact Us
                            </a>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Social</p>
                            <div className="flex gap-4">
                                <Linkedin size={20} className="text-zinc-400 hover:text-primary transition-colors" />
                                <Twitter size={20} className="text-zinc-400 hover:text-primary transition-colors" />
                                <Github size={20} className="text-zinc-400 hover:text-primary transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
