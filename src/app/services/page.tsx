import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";
import {
    Code2,
    Layers,
    ShieldCheck,
    Zap,
    Activity,
    Search,
    Terminal,
    Box,
    Lock,
    Server,
    Cpu,
    GitBranch,
    FileCode
} from "lucide-react";

export const metadata: Metadata = generatePageSEO(
    "Services",
    "Tailored full-cycle engineering services for SaaS and Healthcare. Performance-focused, security-first solutions."
);

const serviceDeepDives = [
    {
        title: "Full-Cycle Product Development",
        description: "We take your product from a whiteboard sketch to a production-ready application. We specialize in building complex, multi-tenant SaaS platforms that handle scaling without friction.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        impact: "Accelerated time-to-market and a foundation ready for millions of users.",
        icon: Box
    },
    {
        title: "Mission-Critical Backend Systems",
        description: "Our backend architectures prioritize security, data integrity, and high availability. We build robust APIs and microservices that power seamless healthcare and enterprise integrations.",
        techStack: ["Node.js", "PostgreSQL", "Redis", "AWS / Docker"],
        impact: "Zero-downtime performance and enterprise-grade data security.",
        icon: Server
    },
    {
        title: "System Modernization & Maintenance",
        description: "Technical debt shouldn't hold you back. We modernize legacy codebases, optimize performance bottleneck, and provide proactive security maintenance to keep your business moving.",
        techStack: ["React Native", "Python", "GraphQL", "Azure"],
        impact: "60% reduction in maintenance costs and significantly improved developer velocity.",
        icon: Cpu
    }
];

const standards = [
    {
        title: "Security-First",
        description: "Encrypted data at rest and in transit, HIPAA-ready architectures, and regular security audits.",
        icon: Lock
    },
    {
        title: "Performance Optimized",
        description: "Sub-second load times and efficient database queries built into the foundation of every app.",
        icon: Zap
    },
    {
        title: "Full Test Coverage",
        description: "Automated unit and e2e testing suites that ensure your application remains bug-free as it scales.",
        icon: ShieldCheck
    },
    {
        title: "Clean Documentation",
        description: "Well-documented APIs and codebases that allow your internal teams to take over whenever needed.",
        icon: FileCode
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* Impact Hero */}
            <Section className="bg-background pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                        Full-Cycle Product <span className="text-primary">Engineering</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        We build more than just websites. We engineer scalable, secure, and performant digital products that drive business value for SaaS and Healthcare.
                    </p>
                </div>
            </Section>

            {/* Deep Dives */}
            {serviceDeepDives.map((service, index) => (
                <Section key={index} className={index % 2 === 0 ? "bg-muted/20" : "bg-background"}>
                    <div className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-1 space-y-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <service.icon size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                {service.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                                <p className="text-sm font-medium text-foreground">
                                    <span className="text-primary mr-2">Impact:</span> {service.impact}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full aspect-video bg-muted/40 rounded-3xl border border-border/50 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Code2 size={80} className="text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500" />
                        </div>
                    </div>
                </Section>
            ))}

            {/* The Nova Standard */}
            <Section className="bg-foreground text-background py-32">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        The Nova Standard
                    </h2>
                    <p className="text-xl opacity-70 max-w-2xl mx-auto">
                        We prioritize technical excellence so your business can scale without infrastructure bottlenecks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {standards.map((standard, index) => (
                        <div key={index} className="space-y-4">
                            <div className="text-primary">
                                <standard.icon size={36} />
                            </div>
                            <h3 className="text-xl font-bold">{standard.title}</h3>
                            <p className="text-sm opacity-60 leading-relaxed">
                                {standard.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Methodology Preview */}
            <Section className="bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                            How We Work
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our technical delivery methodology ensures weekly progress and high-transparency for every partner.
                        </p>
                        <Button href="/about" variant="outline" size="md">
                            Learn more about our team
                        </Button>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Weekly Sprints", icon: GitBranch, desc: "Fast iterations with weekly review sessions." },
                            { title: "Automated QA", icon: Activity, desc: "Every commit is verified by our test suite." },
                            { title: "Transparent Dev", icon: Terminal, desc: "Real-time visibility into the code progress." },
                            { title: "Daily Syncs", icon: Layers, desc: "Constant communication to keep blockers at bay." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-muted/20 border border-border rounded-2xl hover:border-primary/50 transition-colors">
                                <item.icon className="text-primary mb-4" size={24} />
                                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-muted/30 border-t border-border py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-lg mb-10 text-muted-foreground opacity-90">
                        Discuss your technical challenges with our engineering team today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary" size="lg">
                            Get a Technical Consultation
                        </Button>
                        <Button href="/industries" variant="outline" size="lg">
                            See Industry Expertise
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
