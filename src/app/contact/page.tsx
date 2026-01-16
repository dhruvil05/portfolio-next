"use client";

import { useState } from "react";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, this would send to your backend/email service
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Let's Start a Conversation
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tell me about your project and I'll get back to you within 24 hours
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card hover={false}>
                                {submitted ? (
                                    <div className="text-center py-8">
                                        <div className="text-5xl mb-4">✓</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Thanks for reaching out!
                                        </h3>
                                        <p className="text-gray-600">
                                            I'll review your message and get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                            Send Me a Message
                                        </h2>
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                                                    placeholder="Your company name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Project Details *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                                                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                                                />
                                            </div>

                                            <Button type="submit" variant="primary" size="lg" className="w-full" onClick={handleSubmit}>
                                                Send Message
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Direct Contact
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm font-medium text-gray-700 mb-1">Email</div>
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="text-primary-600 hover:text-primary-700 break-all"
                                        >
                                            {siteConfig.email}
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-700 mb-1">LinkedIn</div>
                                        <a
                                            href={siteConfig.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 hover:text-primary-700"
                                        >
                                            Connect with me
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Response Time
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to email me directly.
                                </p>
                            </Card>

                            <Card>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    What to Include
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Brief project description</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Estimated timeline</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Your budget range</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Any specific requirements</span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}