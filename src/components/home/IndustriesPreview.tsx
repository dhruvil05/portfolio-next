import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Building2, Activity, CheckCircle2 } from "lucide-react";

const industries = [
    {
        name: "SaaS & B2B Software",
        description: "Building tools that help businesses scale, from customer portals to internal dashboards and automation platforms.",
        features: ["Multi-tenant architecture", "Payment integration", "Analytics & reporting"],
        icon: Building2,
    },
    {
        name: "Healthcare Operations",
        description: "Developing secure, compliant systems that streamline healthcare workflows and improve patient outcomes.",
        features: ["HIPAA compliance", "Data security", "Workflow automation"],
        icon: Activity,
    },
];

export default function IndustriesPreview() {
    return (
        <Section className="bg-muted/30 border-y border-border py-24">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    Industries We Serve
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Specialized expertise where it matters most
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {industries.map((industry, index) => (
                    <Card
                        key={index}
                        className="h-full bg-background border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <industry.icon size={32} />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-4">{industry.name}</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>

                        <div className="space-y-3">
                            {industry.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle2 size={16} className="text-primary mr-2" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button href="/industries" variant="primary" size="lg" className="group">
                    Learn More About Our Expertise
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </div>
        </Section>
    );
}