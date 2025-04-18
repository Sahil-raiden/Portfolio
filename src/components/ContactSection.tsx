'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Contact2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContactProps = {
    onSubmit: (e: React.FormEvent) => void;
};

export default function ContactSection({ onSubmit }: ContactProps) {
    return (
        <Section
            id="contact"
            data-aos="fade-up"
            className="relative overflow-hidden"
        >
            {/* Earth video background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            >
                <source src="/assets/earth.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Form container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <Card className="bg-white/5 backdrop-blur-lg shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                            <Contact2 className="text-lime-500 h-5 w-5 animate-pulse" />
                            Contact
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Get in touch with me.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={onSubmit} className="grid gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                required
                            />
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-lime-500 hover:bg-lime-600 transition"
                            >
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
