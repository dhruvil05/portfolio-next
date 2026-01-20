import Section from "@/components/ui/Section";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business requirements and map out the technical strategy for success.",
    },
    {
        number: "02",
        title: "Agile Engineering",
        description: "Our team builds in rapid, transparent sprints with weekly demos to ensure constant alignment.",
    },
    {
        number: "03",
        title: "Rigorous QA",
        description: "Automated and manual testing cycles ensure your application is bug-free and performant.",
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "We handle the deployment and monitor performance to ensure a smooth, scalable rollout.",
    },
];

export default function Process() {
    return (
        <Section className="bg-muted/30 border-y border-border">
            <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                    How We Bring Ideas to Life
                </h2>
                <p className="text-xl text-muted-foreground">
                    A proven, transparent process designed to minimize risk and maximize technical quality.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                        <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-6 uppercase">
                            {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
