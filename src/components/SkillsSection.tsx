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
            <Card className="bg-transparent backdrop-blur-lg shadow-none border-none">
                <CardHeader>
                    <CardTitle className="text-white flex items-center">
                        <Lightbulb className="mr-2 h-5 w-5 text-lime-500" />
                        Technical Skills
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Technologies and tools I've worked with.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-12">
                    {skillsList.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-white text-lg font-semibold mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-5">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="relative w-24 h-24 clip-hexagon bg-white/10
                                            backdrop-blur-md flex items-center justify-center
                                            transition-transform duration-300 ease-in-out 
                                            animate-float hover:scale-105 hover:rotate-1 hover:shadow-[0_0_20px_#84cc16]"
                                    >
                                        <img
                                            src={`${skill.logoUrl}`}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10 object-contain"
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
