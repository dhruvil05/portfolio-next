"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import {
    ExternalLink,
    ArrowRight,
    Target,
    Cpu,
    PieChart,
    CheckCircle2,
    ShieldCheck,
    BarChart3
} from "lucide-react";

const caseStudies = [
    {
        title: "Scaling a Multi-Tenant SaaS to 50+ Enterprise Clients",
        industry: "SaaS",
        shortDesc: "Architected a scalable, secure foundation for a growth-stage startup.",
        challenge: "The existing monolithic architecture couldn't handle isolated data requirements for enterprise clients or regional compliance needs.",
        solution: "We shifted to a Schema-per-Tenant model on PostgreSQL, implemented a global CDN strategy, and built a custom RBAC engine using Next.js Server Components.",
        impact: [
            "Onboarded 50+ clients in 6 months",
            "99.9% Production Uptime",
            "Sub-200ms API response times"
        ],
        tags: ["Next.js", "Schema Isolation", "RBAC", "PostgreSQL"],
        resultsIcon: ShieldCheck
    },
    {
        title: "60% Reduction in Clinical Administrative Overhead",
        industry: "Healthcare",
        shortDesc: "Automating clinical workflows through secure EMR integration.",
        challenge: "Clinicians were losing 4 hours daily to manual scheduling and legacy EMR data entry, leading to patient delays.",
        solution: "We developed a real-time FHIR-integrated portal that automated patient intake and synced clinical records directly with the EMR.",
        impact: [
            "60% decrease in manual data entry",
            "Zero PII/PHI leakage (HIPAA Compliant)",
            "30% increase in patient throughput"
        ],
        tags: ["HL7/FHIR", "React", "Python", "Secure Vault"],
        resultsIcon: BarChart3
    }
];

export default function CaseStudyList() {
    const [filter, setFilter] = useState<string>("All");
    const industries = ["All", "SaaS", "Healthcare"];

    const filteredStudies = filter === "All"
        ? caseStudies
        : caseStudies.filter(s => s.industry === filter);

    return (
        <div className="space-y-16">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mr-2">Filter By:</span>
                {industries.map((ind) => (
                    <button
                        key={ind}
                        onClick={() => setFilter(ind)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${filter === ind
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                : "bg-background text-muted-foreground border-border hover:border-primary/50"
                            }`}
                    >
                        {ind}
                    </button>
                ))}
            </div>

            {/* Project List */}
            <div className="grid grid-cols-1 gap-24">
                {filteredStudies.map((study, index) => (
                    <div key={index} className="group relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Visual Side */}
                            <div className="aspect-[4/3] bg-muted/20 border border-border rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative group-hover:border-primary/30 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start relative z-10">
                                    <Badge variant="primary" className="px-4 py-1">{study.industry}</Badge>
                                    <div className="w-12 h-12 bg-background rounded-xl border border-border flex items-center justify-center text-primary shadow-sm">
                                        <study.resultsIcon size={24} />
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 py-1 bg-background/50 rounded border border-border/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                        {study.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Target size={20} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">The Challenge</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-foreground">
                                        <Cpu size={20} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">The Nova Solution</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                                        {study.solution}
                                    </p>
                                </div>

                                <div className="bg-muted/30 rounded-3xl p-8 border border-border shadow-sm">
                                    <div className="flex items-center gap-2 text-primary mb-6">
                                        <PieChart size={20} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Measurable Impact</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {study.impact.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-foreground font-semibold">
                                                <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredStudies.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-border rounded-3xl">
                    <p className="text-muted-foreground">No case studies found for this industry yet.</p>
                </div>
            )}
        </div>
    );
}
