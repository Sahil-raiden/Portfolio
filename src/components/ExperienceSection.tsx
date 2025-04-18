'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import { workExperiences } from '@/components/data/portfolioData';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
    return (
        <Section id="experience" className="container mx-auto px-3 py-12 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Main content container */}
            <div className="relative z-10 max-w-[1200px] mx-auto">
                {/* Section header */}
                <div className="mb-10 max-w-2xl">
                    <h4 className="text-lime-500 font-medium text-xs tracking-wider mb-2">EXPERIENCE</h4>
                    <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">My Professional Journey</h2>
                    <p className="text-gray-400 text-sm lg:text-base">
                        A timeline of my professional growth and achievements
                    </p>
                </div>

                {/* Experience cards container */}
                <div className="relative">
                    {/* Scrollable container */}
                    <div className="overflow-x-auto pb-4 -mx-3 px-3">
                        {/* Cards wrapper */}
                        <div className="flex space-x-4 min-w-max">
                            {workExperiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="w-[270px] sm:w-[300px] lg:w-[340px] bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md rounded-lg p-5 flex-shrink-0 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/5 text-white"
                                >
                                    {/* Card header */}
                                    <div className="flex items-start gap-3 mb-5">
                                        <Avatar className="w-12 h-12 rounded-lg bg-lime-500/10 flex-shrink-0">
                                            <AvatarImage src={exp.logoUrl} alt={exp.company} className="rounded-md" />
                                            <AvatarFallback className="rounded-md bg-lime-500/20 text-lime-500">
                                                {exp.company.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-base font-bold tracking-tight mb-1.5 break-words">{exp.title}</h3>
                                            <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                                                <span className="text-lime-500 text-xs">{exp.company}</span>
                                                <span className="text-gray-500 text-xs">•</span>
                                                <Badge variant="secondary" className="bg-lime-500/10 text-lime-500 hover:bg-lime-500/20 text-[11px] whitespace-nowrap">
                                                    {exp.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <ul className="space-y-2.5">
                                        {exp.description.map((d, i) => (
                                            <li key={i} className="flex gap-2 text-gray-300 text-xs leading-relaxed">
                                                <span className="text-lime-500 mt-1 flex-shrink-0">•</span>
                                                <span className="break-words">{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll fade indicators */}
                    <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                </div>
            </div>
        </Section>
    );
}
