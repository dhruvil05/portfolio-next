import Section from "@/components/ui/Section";

const stats = [
    { label: "Years of Expertise", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Uptime Commitment", value: "99.9%" },
    { label: "Client Satisfaction", value: "100%" },
];

export default function Stats() {
    return (
        <Section className="bg-primary py-12 md:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {stat.value}
                        </div>
                        <div className="text-sm font-medium text-white/70 uppercase tracking-widest">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
