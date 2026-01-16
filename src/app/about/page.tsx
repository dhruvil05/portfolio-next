import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
    "About",
    "Learn about my experience, approach, and why clients trust me with their web development projects."
);

const skills = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Cloud Infrastructure",
    "RESTful APIs",
    "TypeScript",
    "Tailwind CSS",
];

const values = [
    {
        title: "Clear Communication",
        description: "I keep clients informed every step of the way. No jargon, no surprises, just honest updates on progress and challenges.",
    },
    {
        title: "Business-First Thinking",
        description: "Technology is a means to an end. I focus on solutions that drive real business value, not just impressive tech stacks.",
    },
    {
        title: "Quality Code",
        description: "Clean, maintainable code isn't just nice to have—it saves you money and headaches down the road. I build for the long term.",
    },
    {
        title: "Deadline Commitment",
        description: "When I commit to a timeline, I deliver. I plan realistically and communicate early if anything changes.",
    },
];

export default function AboutPage() {
    return (
        <>
            <Section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-600">
                        Helping SaaS and Healthcare companies build better software
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-600 mb-6">
                            I'm a freelance developer with over 5 years of experience building custom web applications. I specialize in working with SaaS companies and healthcare organizations because I understand the unique challenges these industries face—from scaling multi-tenant platforms to meeting strict compliance requirements.
                        </p>

                        <p className="text-lg text-gray-600 mb-6">
                            Before going freelance, I worked at a healthcare tech startup where I learned firsthand how critical reliable, secure software is to operations. That experience shaped how I approach every project: with a focus on real business outcomes, not just technical features.
                        </p>

                        <p className="text-lg text-gray-600">
                            I work best with clients who value clear communication and collaborative problem-solving. If you're looking for someone who'll understand your business challenges and build solutions that actually work, let's talk.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        How I Work
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <Card key={index}>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {skills.map((skill, index) => (
                            <Badge key={index} variant="primary" className="text-base py-2 px-4">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-center text-gray-600 mt-8 text-sm">
                        I'm always learning and adapting to new technologies. This list represents my current toolkit, but I'm comfortable picking up new tools when a project requires it.
                    </p>
                </div>
            </Section>

            <Section className="bg-gradient-to-r from-primary-600 to-accent-600">
                <div className="text-center text-primary py-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        I'm currently accepting new projects. If you think we'd be a good fit, I'd love to hear about what you're building
                    </p>
                    <Button href="/contact" variant="secondary" size="lg">
                        Get in Touch
                    </Button>
                </div>
            </Section>
        </>
    );
}