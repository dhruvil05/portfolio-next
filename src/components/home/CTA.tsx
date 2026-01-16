import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
    return (
        <Section className="bg-gradient-to-r from-primary-600 to-accent-600">
            <div className="text-center text-primary py-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Build Something Great?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let's discuss your project and how I can help bring your vision to life
                </p>
                <Button href="/contact" variant="secondary" size="lg">
                    Get in Touch
                </Button>
            </div>
        </Section>
    );
}