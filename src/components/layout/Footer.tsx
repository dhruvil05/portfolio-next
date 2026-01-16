import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navigationItems } from "@/lib/navigation";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">{siteConfig.name}</h3>
                        <p className="text-sm">{siteConfig.shortBio}</p>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-primary-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-primary-400 transition-colors">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}