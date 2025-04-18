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
            <Card className="bg-transparent backdrop-blur-lg shadow-none border-none">
                <CardHeader>
                    <CardTitle className="text-white">Projects</CardTitle>
                    <CardDescription>A showcase of your development work.</CardDescription>
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
                                className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
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
                                <p className="text-sm text-muted-foreground">
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
