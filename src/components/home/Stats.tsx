"use client";

import Section from "@/components/ui/Section";
import { useEffect, useState, useRef } from "react";

interface StatItem {
    label: string;
    value: string;
    numericValue: number;
    suffix: string;
    decimals?: number;
}

const stats: StatItem[] = [
    { label: "Years of Expertise", value: "5+", numericValue: 5, suffix: "+" },
    { label: "Projects Delivered", value: "50+", numericValue: 50, suffix: "+" },
    { label: "Uptime Commitment", value: "99.9%", numericValue: 99.9, suffix: "%", decimals: 1 },
    { label: "Client Satisfaction", value: "100%", numericValue: 100, suffix: "%" },
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

export default function Stats() {
    return (
        <Section className="bg-primary py-12 md:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white tracking-tight min-h-[1.2em]">
                            <AnimatedCounter
                                target={stat.numericValue}
                                suffix={stat.suffix}
                                decimals={stat.decimals}
                            />
                        </div>
                        <div className="text-sm font-medium text-white/70 uppercase tracking-widest">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
