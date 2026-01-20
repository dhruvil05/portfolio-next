"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import {
    Mail,
    Linkedin,
    MessageSquare,
    Clock,
    CheckCircle2,
    ArrowRight,
    Search,
    PhoneCall,
    FileText,
    ShieldCheck
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        industry: "SaaS",
        projectScale: "MVP Development",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Consultation Inquiry:", formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* Consultation Hero */}
            <Section className="bg-background pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                        Scale Your <span className="text-primary">Vision</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Tell us about your technical challenges. We respond to all inquiries with a preliminary engineering perspective within 24 hours.
                    </p>
                </div>
            </Section>

            <Section className="bg-background pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Inquiry Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card rounded-[2.5rem] border border-border p-8 md:p-12 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                            {submitted ? (
                                <div className="text-center py-20 relative z-10">
                                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground mb-4">
                                        Inquiry Received
                                    </h3>
                                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                                        Thank you for the detailed information. One of our lead engineers will review your request and reach out shortly.
                                    </p>
                                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-10">
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="industry" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                Industry
                                            </label>
                                            <select
                                                id="industry"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground appearance-none"
                                            >
                                                <option value="SaaS">SaaS & B2B</option>
                                                <option value="Healthcare">Healthcare / MedTech</option>
                                                <option value="Fintech">FinTech</option>
                                                <option value="Other">Other Domain</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="projectScale" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                Project Scale
                                            </label>
                                            <select
                                                id="projectScale"
                                                name="projectScale"
                                                value={formData.projectScale}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground appearance-none"
                                            >
                                                <option value="MVP Development">MVP Development</option>
                                                <option value="Scaling / Refactoring">Scaling / Refactoring</option>
                                                <option value="Ongoing Maintenance">Ongoing Maintenance</option>
                                                <option value="Technical Consultation">Technical Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                            Technical Requirements
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground resize-none"
                                            placeholder="Tell us about your tech stack, timeline, and the core problems you need to solve..."
                                        />
                                    </div>

                                    <Button type="submit" variant="primary" size="lg" className="w-full py-8 text-lg rounded-xl">
                                        Start Technical Consultation
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Sidebar / Roadmap */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em]">
                                The Nova Sequence
                            </h3>
                            <div className="space-y-8 relative before:absolute before:left-[1.2rem] before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
                                {[
                                    { step: "01", title: "Technical Review", desc: "Our lead engineers analyze your project requirements.", icon: Search },
                                    { step: "02", title: "Discovery Call", desc: "A 15-minute sync to align on goals and tech stack.", icon: PhoneCall },
                                    { step: "03", title: "Project Roadmap", desc: "We deliver a detailed proposal and implementation plan.", icon: FileText }
                                ].map((item, i) => (
                                    <div key={i} className="relative flex gap-6 group">
                                        <div className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-[10px] font-bold text-primary z-10 group-hover:border-primary transition-colors">
                                            {item.step}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-muted/30 rounded-[2rem] border border-border space-y-6">
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                                <ShieldCheck size={18} className="text-primary" /> Availability
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Currently accepting new high-impact projects. Typical response time is under 12 hours.
                            </p>
                            <div className="pt-4 space-y-4">
                                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                                        <Mail size={16} />
                                    </div>
                                    <span className="text-sm font-medium">{siteConfig.email}</span>
                                </a>
                                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                                        <Linkedin size={16} />
                                    </div>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
