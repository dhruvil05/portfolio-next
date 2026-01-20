import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";
import {
    Layout,
    ShieldCheck,
    Activity,
    Lock,
    RefreshCcw,
    Zap,
    Users,
    Server,
    ShieldAlert,
    CheckCircle2,
    Database,
    Globe,
    CreditCard
} from "lucide-react";

export const metadata: Metadata = generatePageSEO(
    "Industries",
    "Tailored engineering for SaaS and Healthcare. Specialized compliance and scalable architecture experts."
);

const industryFocus = [
    {
        name: "SaaS & B2B Software",
        icon: Layout,
        intro: "We build scalable, multi-tenant B2B applications designed for longevity and user growth. Our engineering handles the complexity so your product team can focus on the roadmap.",
        challenges: [
            "Complex data models & granular permissions",
            "Subscription lifecycle & billing complexity",
            "Friction-heavy user onboarding",
            "Critical API reliability and scaling"
        ],
        outcomes: [
            "Robust RBAC & Multi-tenant isolation",
            "Seamless Stripe / LemonSqueezy integrations",
            "Interactive, low-drop onboarding flows",
            "Auto-scaling infrastructure & developer docs"
        ],
        techHighlight: "Built for: Founders, Product Managers, and CTOs."
    },
    {
        name: "Healthcare & MedTech",
        icon: Activity,
        intro: "Security is non-negotiable in Healthcare. We build compliant, secure, and user-friendly medical software that bridges the gap between complex data and clinical needs.",
        challenges: [
            "Strict HIPAA & GDPR data requirements",
            "Legacy EHR/EMR integration silos",
            "Clinical workflow fatigue & UI complexity",
            "PHI data encryption and auditing"
        ],
        outcomes: [
            "End-to-end AES-256 data encryption",
            "HL7 / FHIR standard implementation",
            "Optimized clinical dashboards & UX",
            "Comprehensive audit logging & reporting"
        ],
        techHighlight: "Built for: Health-Tech Startups, Clinics, and Labs."
    }
];

const standards = [
    { name: "HIPAA Compliant", icon: ShieldCheck },
    { name: "SOC2 Mindset", icon: Lock },
    { name: "GDPR Ready", icon: Globe },
    { name: "FHIR/HL7 Standards", icon: RefreshCcw }
];

export default function IndustriesPage() {
    return (
        <>
            {/* Hero Section */}
            <Section className="bg-background pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                        Domain <span className="text-primary text-secondary">Expertise</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Industry-specific constraints shouldn&apos;t be a barrier to innovation. We speak your domain language and build solutions that meet your specific standards.
                    </p>
                </div>
            </Section>

            {/* Compliance Bar */}
            <div className="bg-muted/30 border-y border-border overflow-hidden">
                <div className="container mx-auto px-6 py-6 lg:px-12 flex flex-wrap justify-between items-center gap-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Engineering Standards:</span>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        {standards.map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                <s.icon size={18} className="text-primary" />
                                {s.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Industry Deep-Dives */}
            {industryFocus.map((industry, index) => (
                <Section key={index} className={index % 2 !== 0 ? "bg-muted/10" : "bg-background"}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <industry.icon size={32} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                {industry.name}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {industry.intro}
                            </p>
                            <p className="text-sm font-bold text-primary italic">
                                {industry.techHighlight}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-8 bg-background border border-border rounded-3xl space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-red-500/80 flex items-center gap-2">
                                    <ShieldAlert size={16} /> Market Challenges
                                </h3>
                                <ul className="space-y-4">
                                    {industry.challenges.map((c, i) => (
                                        <li key={i} className="flex items-start text-sm text-muted-foreground leading-snug">
                                            <span className="mr-3 text-red-500">•</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl space-y-6 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                                    <CheckCircle2 size={16} /> Technical Outcome
                                </h3>
                                <ul className="space-y-4">
                                    {industry.outcomes.map((o, i) => (
                                        <li key={i} className="flex items-start text-sm text-foreground font-medium leading-snug">
                                            <span className="mr-3 text-primary">✓</span>
                                            {o}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* Expertise Highlight Grid */}
            <Section className="bg-foreground text-background">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Engineering for Complexity
                    </h2>
                    <p className="text-xl opacity-70">
                        How we solve the deep-level problems that define your industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Scalable RBAC", icon: Users, desc: "Building granular permission systems that grow with enterprise requirements." },
                        { title: "Compliance Core", icon: Lock, desc: "Security isn't an addon; we build it into the foundational architecture." },
                        { title: "Data Integrity", icon: Database, desc: "ACID compliant systems that ensure zero data loss in critical environments." }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                                <item.icon size={20} />
                            </div>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-background pt-24 pb-32">
                <div className="max-w-4xl mx-auto text-center bg-muted/30 rounded-3xl p-12 border border-border">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Have a specialized project?
                    </h2>
                    <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                        While we specialize in SaaS and Healthcare, we thrive on deep-level engineering challenges across any domain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary" size="lg">
                            Get a Domain Consultation
                        </Button>
                        <Button href="/services" variant="outline" size="lg">
                            Explore Capabilities
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
