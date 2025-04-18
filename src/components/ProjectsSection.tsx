'use client';

import { Section } from '@/components/Section';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { projects } from '@/components/data/portfolioData';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function ProjectsSection() {
    return (
        <Section id="projects" data-aos="fade-left">
            <Card className="bg-transparent backdrop-blur-lg border-none shadow-none">
                <CardHeader>
                    <CardTitle className="text-white">Projects</CardTitle>
                    <CardDescription className="text-gray-400">A showcase of your development work.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Tilt
                                key={project.id}
                                glareEnable={true}
                                glareMaxOpacity={0.2}
                                scale={1.05}
                                transitionSpeed={400}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                className="bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md rounded-lg p-4 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                            >
                                <div className="relative w-full h-40 mb-2 rounded-md overflow-hidden">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                                <p className="text-sm text-gray-400">
                                    {project.description}
                                </p>
                            </Tilt>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Section>
    );
}
