import Section from "@/components/ui/Section";

const techLogos = [
    { name: "Next.js", icon: "Next.js" },
    { name: "React", icon: "React" },
    { name: "Node.js", icon: "Node.js" },
    { name: "PostgreSQL", icon: "PostgreSQL" },
    { name: "AWS", icon: "AWS" },
    { name: "Stripe", icon: "Stripe" },
];

export default function LogoWall() {
    return (
        <div className="border-y border-border/50 bg-muted/20">
            <Section className="py-10 md:py-12">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center">
                        Powering Modern Enterprise Solutions With
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {techLogos.map((logo) => (
                            <span key={logo.name} className="text-xl md:text-2xl font-bold tracking-tighter text-foreground whitespace-nowrap">
                                {logo.name}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
