import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Rocket, Laptop, Server, Wrench } from "lucide-react";

const services = [
    {
        title: "Custom Web Applications",
        description: "Tailored solutions built from the ground up to match your specific business requirements and workflows.",
        icon: Rocket,
    },
    {
        title: "SaaS Development",
        description: "End-to-end development of scalable SaaS platforms with robust architecture and seamless user experiences.",
        icon: Laptop,
    },
    {
        title: "Backend & API Development",
        description: "Powerful, secure APIs and backend systems that integrate smoothly with your existing infrastructure.",
        icon: Server,
    },
    {
        title: "Maintenance & Optimization",
        description: "Keep your applications running at peak performance with regular updates, monitoring, and improvements.",
        icon: Wrench,
    },
];

export default function ServicesPreview() {
    return (
        <Section className="bg-background py-24">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    What We Offer
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Full-stack development services designed to solve real business problems
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="h-full border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="mb-6 w-14 h-14 bg-primary/10 flex items-center justify-center rounded-xl text-primary">
                            <service.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button href="/services" variant="outline" size="lg" className="group">
                    Explore All Services
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
            </div>
        </Section>
    );
}