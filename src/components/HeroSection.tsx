// src/components/HeroSection.tsx
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/Section';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <Section id="hero" className="bg-background py-20">
            <div className="container mx-auto text-center">
                <Avatar className="w-32 h-32 rounded-full mx-auto mb-4" data-aos="fade-down">
                    <AvatarImage src="/assets/pfp.jpg" alt="SA" />

                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl font-bold" data-aos="fade-up">
                    A Sahil Madan Goud
                </h1>
                <p className="text-lg mt-2" data-aos="fade-up" data-aos-delay="100">
                    CS Student | Web Dev | ML Enthusiast
                </p>
                <Button variant="outline" className="mt-4" data-aos="fade-up" data-aos-delay="200">
                    Learn More
                </Button>
            </div>
        </Section>
    );
}
