import { siteConfig } from "@/lib/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-6 sm:px-10 lg:px-12 max-w-7xl py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="font-bold text-foreground">
                        {siteConfig.name}
                    </div>
                    <div>
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
