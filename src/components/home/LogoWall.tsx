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
    // Duplicate the logos to create a seamless loop
    const displayLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

    return (
        <div className="border-y border-border/50 bg-muted/20 overflow-hidden">
            <Section className="py-10 md:py-12">
                <div className="flex flex-col items-center gap-10">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center">
                        Powering Modern Enterprise Solutions With
                    </p>

                    <div className="w-full max-w-2xl mx-auto relative overflow-hidden flex border-x border-border/20">
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted/20 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-muted/20 to-transparent z-10" />

                        <div className="animate-marquee flex items-center gap-x-12 px-4 opacity-40 grayscale hover:grayscale-0 transition-opacity duration-500">
                            {displayLogos.map((logo, index) => (
                                <span
                                    key={`${logo.name}-${index}`}
                                    className="text-lg md:text-xl font-bold tracking-tight text-foreground whitespace-nowrap"
                                >
                                    {logo.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
