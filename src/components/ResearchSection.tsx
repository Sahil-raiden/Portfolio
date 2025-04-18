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
            <Card className="bg-transparent backdrop-blur-lg border-none shadow-none">
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
                    {researchPublicationsList.map((pub, idx) => (
                        <div
                            key={idx}
                            className="bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                        >
                            <div className="flex items-start gap-4">
                                <BookOpen className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{pub.authors}</p>
                                    <p className="text-xs text-gray-500">{pub.journal}</p>
                                    <p className="text-xs text-gray-500">{pub.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Section>
    );
}
