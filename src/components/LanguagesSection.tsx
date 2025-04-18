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
import { languagesList } from '@/components/data/portfolioData';

export default function LanguagesSection() {
    return (
        <Section id="languages" data-aos="fade-right">
            <Card className="bg-transparent backdrop-blur-lg border-none shadow-none">
                <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-lime-500" />
                        Languages Known
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Languages you are fluent in.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-3 mt-4">
                    {languagesList.map((lang, idx) => (
                        <div
                            key={idx}
                            className="bg-white/[0.08] hover:bg-white/[0.12] text-white rounded-full px-4 py-2 text-sm backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                        >
                            {lang}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Section>
    );
}
