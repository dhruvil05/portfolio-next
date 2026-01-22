"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We provide dedicated maintenance and optimization packages to ensure your application stays secure and updated as you scale. Our support includes priority bug fixes, regular security audits, and performance tuning.",
    },
    {
        question: "Who owns the intellectual property?",
        answer: "You do. Upon project completion and full payment, you own 100% of the source code, design assets, and associated intellectual property. We believe in total transparency and client ownership.",
    },
    {
        question: "How do you handle HIPAA compliance?",
        answer: "For healthcare projects, we follow strict encryption standards (AES-256), comprehensive audit logging, and role-based access controls to meet or exceed HIPAA requirements. Professional BAAs are provided for all healthcare engagements.",
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary depending on complexity, but a high-fidelity MVP typically takes 8-12 weeks from initial discovery to production launch. We use agile methodologies to deliver value incrementally.",
    },
    {
        question: "Can you scale with my business?",
        answer: "Our architecture is built for scale from Day 1. Whether you are handling 1,000 or 1,000,000 users, we leverage cloud-native solutions (AWS/Supabase) to ensure your infrastructure grows seamlessly with your user base.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section className="bg-white border-t border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left side: Header */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Inquiry Guide</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                            Common <br className="hidden md:block" />
                            <span className="text-primary italic">Questions</span>
                        </h2>
                        <p className="text-lg text-zinc-500 max-w-sm">
                            Everything you need to know before we start building your next digital edge.
                        </p>
                    </div>
                </div>

                {/* Right side: Accordion */}
                <div className="lg:col-span-2 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group border rounded-3xl transition-all duration-300 ${isOpen
                                        ? "bg-zinc-50/80 border-primary/20 shadow-sm"
                                        : "bg-white border-zinc-100 hover:border-zinc-200"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left px-8 py-7 flex items-center justify-between focus:outline-none"
                                >
                                    <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-primary" : "text-zinc-900"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200"
                                        }`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-8 pb-8">
                                        <div className="h-px w-full bg-primary/10 mb-6" />
                                        <p className="text-zinc-600 leading-relaxed text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
