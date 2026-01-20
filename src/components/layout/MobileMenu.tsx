"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

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
        <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-xl transition-colors duration-300">
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="text-xl font-bold text-foreground">Menu</span>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="p-4 bg-background">
                    <div className="space-y-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/80 hover:bg-muted"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}