// src/components/CertificationsSection.tsx
'use client';

import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Verified } from 'lucide-react';
import { certificationsList } from '@/components/data/portfolioData';
import Tilt from 'react-parallax-tilt';

export default function CertificationsSection() {
    return (
        <Section id="certifications" data-aos="fade-left">
            <Card className="bg-transparent backdrop-blur-lg shadow-none border-none">
                <CardHeader>
                    <CardTitle className="text-white">
                        <Verified className="mr-2 inline-block h-5 w-5 text-lime-500" />
                        Certifications
                    </CardTitle>
                    <CardDescription>Your certifications.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {certificationsList.map((c) => (
                            <Tilt
                                key={c.id}
                                glareEnable={true}
                                glareMaxOpacity={0.2}
                                scale={1.05}
                                transitionSpeed={400}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
                            >
                                <img
                                    src={c.imageUrl}
                                    alt={c.title}
                                    className="rounded-md mb-2 w-full h-40 object-cover"
                                />
                                <h3 className="font-semibold text-lg text-white">{c.title}</h3>
                                <p className="text-sm text-muted-foreground">{c.description}</p>
                            </Tilt>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Section>
    );
}
