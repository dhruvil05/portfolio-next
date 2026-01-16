import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const industries = [
    {
        name: "SaaS & B2B Software",
        description: "Building tools that help businesses scale, from customer portals to internal dashboards and automation platforms.",
        features: ["Multi-tenant architecture", "Payment integration", "Analytics & reporting"],
    },
    {
        name: "Healthcare Operations",
        description: "Developing secure, compliant systems that streamline healthcare workflows and improve patient outcomes.",
        features: ["HIPAA compliance", "Data security", "Workflow automation"],
    },
];

export default function IndustriesPreview() {
    return (
        <Section className="bg-gradient-to-br from-gray-50 to-primary-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Industries I Serve
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Specialized expertise where it matters most
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {industries.map((industry, index) => (
                    <Card key={index} className="h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                        <p className="text-gray-600 mb-6">{industry.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {industry.features.map((feature, idx) => (
                                <Badge key={idx} variant="primary">{feature}</Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button href="/industries" variant="primary">
                    Learn More About My Expertise
                </Button>
            </div>
        </Section>
    );
}