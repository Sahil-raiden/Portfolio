'use client';

import Image from 'next/image';
import { Section } from '@/components/Section';
import { graduationList } from '@/components/data/portfolioData';

export default function EducationSection() {
    return (
        <Section id="education" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Education.</h2>
            <div className="relative grid grid-cols-9 gap-y-16">
                {/* Continuous timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-lime-500/50 -translate-x-1/2 z-0" />

                {graduationList.map((edu, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="contents relative z-10">
                            {/* Left side */}
                            <div className={`col-span-4 ${isLeft ? 'flex justify-end' : ''}`}>
                                {isLeft && (
                                    <div className="bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md p-6 rounded-lg max-w-md text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]">
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <span className="text-sm text-gray-400 block">{edu.duration}</span>
                                        <p className="mt-1 text-lime-500 font-medium">{edu.institution}</p>
                                        <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
                                            {edu.highlights.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Center timeline logo node */}
                            <div className="col-span-1 flex justify-center relative">
                                <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center z-10">
                                    <Image
                                        src={edu.logoUrl}
                                        alt={edu.institution}
                                        width={28}
                                        height={28}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right side */}
                            <div className={`col-span-4 ${!isLeft ? 'flex justify-start' : ''}`}>
                                {!isLeft && (
                                    <div className="bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md p-6 rounded-lg max-w-md text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(132,204,22,0.5)]">
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <span className="text-sm text-gray-400 block">{edu.duration}</span>
                                        <p className="mt-1 text-lime-500 font-medium">{edu.institution}</p>
                                        <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
                                            {edu.highlights.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
