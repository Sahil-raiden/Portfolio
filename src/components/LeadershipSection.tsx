'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Users } from 'lucide-react';
import { leadershipList } from '@/components/data/portfolioData';

export default function LeadershipSection() {
    return (
        <Section id="leadership" data-aos="fade-left">
            <Card className="bg-transparent backdrop-blur-lg shadow-none border-none">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <Users className="text-lime-500 h-5 w-5 animate-pulse" />
                        Leadership & Community
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Your campus roles and community involvement.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {leadershipList.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-md rounded-lg px-4 py-3 transition hover:scale-105 hover:shadow-[0_0_12px_#00dd00]/30"
                        >
                            <p className="text-sm text-white">{item}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Section>
    );
}
