"use client";

import Button from "@/components/ui/Button";

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

                    {/* Right Column: Gradient Placeholder */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none lg:h-[600px] flex items-center justify-center">
                        {/* Abstract Gradient Blob Animation */}
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900 dark:mix-blend-lighten"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900 dark:mix-blend-lighten"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900 dark:mix-blend-lighten"></div>

                        {/* Placeholder Card/Frame */}
                        <div className="relative bg-card border border-border rounded-xl shadow-2xl p-8 w-full max-w-sm aspect-square flex items-center justify-center backdrop-blur-sm bg-opacity-80">
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Project Showcase</p>
                                <p className="text-xs text-muted-foreground">Image Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}