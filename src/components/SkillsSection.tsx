'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { skillsList } from '@/components/data/portfolioData';

export default function SkillsSection() {
    return (
        <Section id="skills" data-aos="fade-right">
            <Card className="bg-transparent backdrop-blur-lg border-none shadow-none">
                <CardHeader>
                    <CardTitle className="text-white flex items-center">
                        <Lightbulb className="mr-2 h-5 w-5 text-lime-500" />
                        Technical Skills
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Technologies and tools I've worked with.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-10">
                    {skillsList.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-white text-lg font-semibold mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="relative w-20 h-20 clip-hexagon bg-white/[0.08] hover:bg-white/[0.12]
                                            backdrop-blur-md flex items-center justify-center
                                            transition-all duration-300 ease-in-out 
                                            animate-float hover:scale-105 hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                                        title={skill.name}
                                    >
                                        <img
                                            src={`${skill.logoUrl}`}
                                            alt={skill.name}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Section>
    );
}
