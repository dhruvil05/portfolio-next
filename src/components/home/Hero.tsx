"use client";

import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [currentFrame, setCurrentFrame] = useState(0);
    const totalFrames = 40; // Assuming there are 40 frames in the sequence

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
        }, 100); // Adjust the interval as needed for smoother animation

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Context */}
                    <div className="text-center md:text-left">
                        <div className="animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Custom Web Solutions<br />
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-primary">
                                    for SaaS & Healthcare
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
                                Crafting scalable, secure applications that drive business growth and improve operations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                                <Button href="/contact" variant="primary" size="lg">
                                    Start Your Project
                                </Button>
                                <Button href="/case-studies" variant="outline" size="lg">
                                    View My Work
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Frame Visualization */}
                    <div className="relative w-full h-96 md:h-full">
                        <Image
                            src={`/frames/ezgif-frame-${String(currentFrame + 1).padStart(3, '0')}.jpg`}
                            alt="3D Keyboard Animation"
                            layout="fill"
                            objectFit="contain"
                            priority
                        />
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                    {[
                        { label: "Years Experience", value: "5+" },
                        { label: "Projects Delivered", value: "30+" },
                        { label: "Industries", value: "2" },
                        { label: "Client Satisfaction", value: "100%" },
                    ].map((stat, index) => (
                        <div key={index} className="animate-fade-in-up delay-{index * 100}">
                            <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                            <p className="text-gray-600 mt-2">{stat.label}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );
}