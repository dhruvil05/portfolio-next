import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
    {
        title: "Custom Web Applications",
        description: "Tailored solutions built from the ground up to match your specific business requirements and workflows.",
        icon: "🚀",
    },
    {
        title: "SaaS Development",
        description: "End-to-end development of scalable SaaS platforms with robust architecture and seamless user experiences.",
        icon: "💻",
    },
    {
        title: "Backend & API Development",
        description: "Powerful, secure APIs and backend systems that integrate smoothly with your existing infrastructure.",
        icon: "⚡",
    },
    {
        title: "Maintenance & Optimization",
        description: "Keep your applications running at peak performance with regular updates, monitoring, and improvements.",
        icon: "🔧",
    },
];

export default function ServicesPreview() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What I Offer
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Full-stack development services designed to solve real business problems
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {services.map((service, index) => (
                    <Card key={index}>
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button href="/services" variant="outline">
                    Explore All Services
                </Button>
            </div>
        </Section>
    );
}