import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
    "Industries",
    "Specialized web development for SaaS and Healthcare industries with deep domain expertise."
);

const industries = [
    {
        name: "SaaS & B2B Software",
        intro: "I help SaaS companies build products that scale. From early-stage MVPs to enterprise-grade platforms, I understand the unique challenges of building software that serves multiple customers.",
        problems: [
            "Need to support multiple tenants with isolated data",
            "Complex permission systems and user management",
            "Integration with payment processors and billing systems",
            "Scaling infrastructure as customer base grows",
        ],
        solutions: [
            "Multi-tenant architecture with data isolation",
            "Role-based access control (RBAC) systems",
            "Stripe, PayPal, and subscription management",
            "Scalable cloud infrastructure on AWS/Azure",
        ],
        caseStudyLink: "/case-studies",
    },
    {
        name: "Healthcare Operations",
        intro: "Healthcare organizations need software that's not just functional, but secure and compliant. I build systems that streamline operations while meeting strict regulatory requirements.",
        problems: [
            "Managing sensitive patient data securely",
            "Ensuring HIPAA compliance across all systems",
            "Manual workflows that slow down care delivery",
            "Integration with existing healthcare systems",
        ],
        solutions: [
            "HIPAA-compliant data encryption and access controls",
            "Automated audit logging and compliance monitoring",
            "Workflow automation for scheduling, billing, and records",
            "HL7/FHIR integration with EHR systems",
        ],
        caseStudyLink: "/case-studies",
    },
];

export default function IndustriesPage() {
    return (
        <>
            <Section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Industries I Serve
                    </h1>
                    <p className="text-xl text-gray-600">
                        Deep expertise in SaaS and Healthcare means I understand your challenges and speak your language
                    </p>
                </div>
            </Section>

            {industries.map((industry, index) => (
                <Section key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {industry.name}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {industry.intro}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <Card>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Common Challenges
                                </h3>
                                <ul className="space-y-3">
                                    {industry.problems.map((problem, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-red-500 mr-2 mt-1">⚠️</span>
                                            <span className="text-gray-600">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    My Solutions
                                </h3>
                                <ul className="space-y-3">
                                    {industry.solutions.map((solution, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            <span className="text-gray-600">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                        <div className="text-center">
                            <Button href={industry.caseStudyLink} variant="outline">
                                See {industry.name} Projects
                            </Button>
                        </div>
                    </div>
                </Section>
            ))}

            <Section className="bg-gradient-to-r from-primary-600 to-accent-600">
                <div className="text-center text-primary py-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Working in a Different Industry?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        While I specialize in SaaS and Healthcare, I'm always open to discussing interesting projects in other domains
                    </p>
                    <Button href="/contact" variant="secondary" size="lg">
                        Let's Talk
                    </Button>
                </div>
            </Section>
        </>
    );
}