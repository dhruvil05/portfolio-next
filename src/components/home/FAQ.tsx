import Section from "@/components/ui/Section";

const faqs = [
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We provide dedicated maintenance and optimization packages to ensure your application stays secure and updated as you scale.",
    },
    {
        question: "Who owns the intellectual property?",
        answer: "You do. Upon project completion and payment, you own 100% of the source code and associated intellectual property.",
    },
    {
        question: "How do you handle HIPAA compliance?",
        answer: "For healthcare projects, we follow strict encryption standards, audit logging, and access controls to meet or exceed HIPAA requirements.",
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary depending on complexity, but an MVP typically takes 8-12 weeks from discovery to launch.",
    },
];

export default function FAQ() {
    return (
        <Section className="bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Common Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know before we start building together.
                    </p>
                </div>

                <div className="lg:col-span-2 space-y-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold text-foreground">{faq.question}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
