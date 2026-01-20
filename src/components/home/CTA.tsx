import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
    return (
        <Section className="bg-foreground text-background py-24">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-background">
                    Ready to Build Something Great?
                </h2>
                <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto">
                    Let&apos;s discuss your project and how we can help bring your vision to life
                </p>
                <div className="flex justify-center gap-4">
                    <Button href="/contact" variant="primary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </Section>
    );
}