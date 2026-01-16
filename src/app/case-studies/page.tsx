import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
    "Case Studies",
    "Real-world projects showcasing custom web development solutions for SaaS and Healthcare clients."
);

const caseStudies = [
    {
        title: "Multi-Tenant SaaS Platform",
        industry: "SaaS",
        problem: "A growing startup needed to transition from serving individual clients to a scalable multi-tenant platform. They required complete data isolation, custom branding per client, and flexible pricing tiers.",
        solution: "Built a robust multi-tenant architecture using React and Node.js with PostgreSQL. Implemented tenant-specific subdomain routing, isolated database schemas, and a white-label theming system. Integrated Stripe for flexible subscription management.",
        features: [
            "Automated tenant provisioning",
            "Custom branding per organization",
            "Role-based access control",
            "Usage analytics dashboard",
        ],
        outcome: "The platform successfully onboarded 50+ enterprise clients in the first 6 months, maintaining 99.9% uptime. Reduced customer onboarding time from 2 weeks to 24 hours.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    },
    {
        title: "Healthcare Workflow Automation System",
        industry: "Healthcare",
        problem: "A busy medical clinic was struggling with manual patient scheduling, paper-based records, and inefficient billing processes. Staff spent hours on administrative tasks that could be automated, leading to delays and errors.",
        solution: "Developed a HIPAA-compliant web application that automated scheduling, digitized patient records, and streamlined billing. Implemented secure patient portal for appointment booking and document access. Integrated with existing billing software via API.",
        features: [
            "Automated appointment reminders",
            "Digital patient intake forms",
            "Secure document management",
            "Insurance verification integration",
        ],
        outcome: "Reduced administrative workload by 60%, freeing staff to focus on patient care. Decreased no-show rates by 35% through automated reminders. Improved patient satisfaction scores by 25%.",
        tags: ["Python", "React", "MySQL", "HIPAA Compliant", "API Integration"],
    },
    {
        title: "Real-Time Analytics Dashboard",
        industry: "SaaS",
        problem: "A B2B software company needed to provide their enterprise clients with real-time insights into system usage, performance metrics, and user behavior. Their existing reporting was delayed by 24 hours and lacked interactivity.",
        solution: "Created a real-time analytics dashboard using React and WebSocket connections. Built a data pipeline that processed events in real-time and updated visualizations instantly. Included customizable widgets and exportable reports.",
        features: [
            "Real-time data updates",
            "Customizable dashboard layouts",
            "Interactive charts and graphs",
            "Scheduled report generation",
        ],
        outcome: "Enabled clients to make data-driven decisions in real-time. Reduced support tickets related to usage questions by 40%. Became a key selling point in closing new deals.",
        tags: ["React", "Node.js", "WebSocket", "Redis", "D3.js"],
    },
];

export default function CaseStudiesPage() {
    return (
        <>
            <Section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Case Studies
                    </h1>
                    <p className="text-xl text-gray-600">
                        Real projects, real results. See how I've helped businesses solve complex challenges
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <Card key={index} hover={false} className="border-l-4 border-l-primary-600">
                            <div className="mb-4">
                                <Badge variant="secondary">{study.industry}</Badge>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {study.title}
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                                    <p className="text-gray-600">{study.problem}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h3>
                                    <p className="text-gray-600 mb-4">{study.solution}</p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {study.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
                                    <p className="text-gray-600">{study.outcome}</p>
                                </div>

                                <div className="pt-4 border-t">
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map((tag, idx) => (
                                            <Badge key={idx} variant="primary">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-gradient-to-r from-primary-600 to-accent-600">
                <div className="text-center text-primary py-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Let's discuss how I can help solve your business challenges
                    </p>
                    <Button href="/contact" variant="secondary" size="lg">
                        Start Your Project
                    </Button>
                </div>
            </Section>
        </>
    );
}