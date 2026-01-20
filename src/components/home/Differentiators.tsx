import Section from "@/components/ui/Section";
import { ShieldCheck, Zap, Users } from "lucide-react";

const differentiators = [
    {
        title: "Security-First Coding",
        description: "Protection is never an afterthought. We build healthcare-grade security into every line of code from day one.",
        icon: ShieldCheck,
    },
    {
        title: "Scalable Foundations",
        description: "We architect for tomorrow's growth today. Our SaaS platforms handle traffic spikes and multi-tenancy with ease.",
        icon: Zap,
    },
    {
        title: "Partner Mindset",
        description: "We aren't just a vendor; we're your technical extensions. Your business outcomes define our engineering success.",
        icon: Users,
    },
];

export default function Differentiators() {
    return (
        <Section className="bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {differentiators.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
