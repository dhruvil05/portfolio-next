import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
    return (
        <Section className="bg-white min-h-[60vh] flex items-center">
            <div className="text-center mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Button href="/" variant="primary">
                    Go Back Home
                </Button>
            </div>
        </Section>
    );
}