// src/components/AboutSection.tsx
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/Section';
import { User, GraduationCap, Contact2, Lightbulb } from 'lucide-react';

export default function AboutSection() {
    return (
        <Section id="about" data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
                <div className="md:col-span-1 flex flex-col items-center ">
                    <Avatar className="w-32 h-32 rounded-full">
                        <AvatarImage src="/assets/pfp.jpg" alt="SA" />

                        <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-2 mt-4">
                        <Button variant="secondary" asChild><a href="#">Resume</a></Button>
                        <Button variant="secondary" asChild>
                            <a href="https://www.linkedin.com/in/sahil-alugani-6a8995265/">LinkedIn</a>
                        </Button>
                        <Button variant="secondary" asChild><a href="https://github.com/sahil-alugani">GitHub</a></Button>
                    </div>
                </div>

                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <ul className="space-y-2">
                        <li className="flex"><User className="mr-2 text-primary" />Motivated CS student with strong problem-solving skills.</li>
                        <li className="flex"><GraduationCap className="mr-2 text-primary" />Passionate about development and innovation.</li>
                        <li className="flex"><Contact2 className="mr-2 text-primary" />+91‑90328‑94903 · sahilmadan0805@gmail.com</li>
                        <li className="flex"><Lightbulb className="mr-2 text-primary" />Hyderabad, Telangana</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Career Objective</h3>
                    <p>
                        To apply my technical knowledge and leadership experience in dynamic roles, while constantly learning
                        and innovating in software and AI.
                    </p>
                </div>
            </div>
        </Section>
    );
}
