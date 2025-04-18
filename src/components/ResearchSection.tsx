'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BookOpen, Sparkles } from 'lucide-react';
import { researchPublicationsList } from '@/components/data/portfolioData';

export default function ResearchSection() {
    return (
        <Section id="research" data-aos="fade-left">
            <Card className="bg-transparent backdrop-blur-lg shadow-none border-none">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <Sparkles className="text-lime-500 h-5 w-5 animate-pulse" />
                        Research Publications
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        A selection of your published academic work.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {researchPublicationsList.map((pub) => (
                        <div
                            key={pub.id}
                            className="group transition-transform duration-300 hover:scale-[1.02] bg-white/5 backdrop-blur-md rounded-lg p-5 hover:shadow-[0_0_15px_#00dd00]/30"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <BookOpen className="text-lime-500 group-hover:rotate-6 transition-transform duration-300" />
                                <h3 className="text-white font-semibold text-lg leading-snug">{pub.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300 italic mb-1">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground">{pub.journal}</p>
                            <p className="text-xs text-gray-500 mt-1">{pub.details}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Section>
    );
}
