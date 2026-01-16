import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
    "Services",
    "Custom web development services for SaaS and Healthcare industries. From concept to deployment."
);

const services = [
    {
        title: "Custom Web Application Development",
        description: "I build web applications from scratch, tailored to your specific business needs. Whether you need a customer portal, internal dashboard, or data management system, I create solutions that fit your workflow perfectly.",
        benefits: [
            "Fully customized to your requirements",
            "Scalable architecture for future growth",
            "Clean, maintainable code",
        ],
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end development of Software-as-a-Service platforms. I handle everything from database design to user authentication, payment integration, and ongoing feature development.",
        benefits: [
            "Multi-tenant architecture",
            "Subscription and billing integration",
            "User management and permissions",
        ],
    },
    {
        title: "Backend & API Development",
        description: "Robust backend systems and RESTful APIs that power your applications. I ensure your data is secure, your integrations are seamless, and your system can handle growth.",
        benefits: [
            "Secure, performant APIs",
            "Third-party integrations",
            "Database optimization",
        ],
    },
    {
        title: "System Optimization & Maintenance",
        description: "Keep your applications running smoothly with regular updates, performance monitoring, and proactive improvements. I help you avoid downtime and ensure your systems stay fast and reliable.",
        benefits: [
            "Performance monitoring and tuning",
            "Security updates and patches",
            "Feature enhancements",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Development Services
                    </h1>
                    <p className="text-xl text-gray-600">
                        From initial concept to ongoing support, I provide comprehensive development services that help your business grow
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <Card key={index} hover={false} className="border-l-4 border-l-primary-600">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                {service.description}
                            </p>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</h3>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-gradient-to-r from-primary-600 to-accent-600">
                <div className="text-center text-primary py-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Every project is unique. Let's discuss your specific needs and how I can help
                    </p>
                    <Button href="/contact" variant="secondary" size="lg">
                        Start a Conversation
                    </Button>
                </div>
            </Section>
        </>
    );
}