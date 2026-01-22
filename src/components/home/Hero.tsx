"use client";

import Button from "@/components/ui/Button";
import { useEffect, useState, useRef } from "react";

interface StatItem {
    label: string;
    numericValue: number;
    suffix: string;
    decimals?: number;
}

const heroStats: StatItem[] = [
    { label: "Expertise", numericValue: 5, suffix: "Y+" },
    { label: "Projects", numericValue: 50, suffix: "+" },
    { label: "Uptime", numericValue: 99.9, suffix: "%", decimals: 1 },
    { label: "Client Satis.", numericValue: 100, suffix: "%" },
];

function AnimatedCounter({ target, suffix, decimals = 0, duration = 2000 }: { target: number, suffix: string, decimals?: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(progress * target);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, target, duration]);

    return (
        <span ref={countRef}>
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
            <div className="container mx-auto px-6 sm:px-10 lg:px-12 max-w-7xl relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Column: Typography */}
                    <div className="flex flex-col justify-center space-y-8 text-center lg:text-left lg:pl-12 text-foreground">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
                                Building Digital <br className="hidden lg:block" />
                                <span className="text-primary">Experiences</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                                Specializing in scalable React applications and intuitive user interfaces for SaaS & Healthcare industries.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                            <Button href="/contact" size="lg" variant="primary">
                                Get in Touch
                            </Button>
                            <Button href="/case-studies" size="lg" variant="outline">
                                View Work
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Animated Stats Display */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none flex items-center justify-center py-12 lg:py-0">
                        {/* Background Blobs for depth */}
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                        {/* Interactive Stats Grid */}
                        <div className="relative grid grid-cols-2 gap-4 w-full">
                            {heroStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 bg-white/40 backdrop-blur-xl border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className="space-y-2">
                                        <div className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight group-hover:text-primary transition-colors">
                                            <AnimatedCounter
                                                target={stat.numericValue}
                                                suffix={stat.suffix}
                                                decimals={stat.decimals}
                                            />
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-600 transition-colors">
                                            {stat.label}
                                        </div>
                                    </div>
                                    {/* Decorative subtle pulse */}
                                    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:animate-pulse" />
                                </div>
                            ))}

                            {/* Central accent element */}
                            <div className="absolute inset-0 m-auto w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
