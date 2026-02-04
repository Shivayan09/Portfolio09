"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export default function Projects() {
    const projects = [
        {
            title: 'Dashify',
            description: 'A multi-tasking student dashboard assisting students in their studies and time management',
            image: 'https://images.unsplash.com/photo-1720118727706-3cd1da365366?...',
            tags: ['React', 'Javascript', 'Firebase', 'Express', 'MongoDB'],
            rotation: 'rotate-1',
            demoUrl: 'https://dashify-frontend-rk1l.onrender.com/',
            codeUrl: 'https://github.com/Shivayan09/Dashifyy',
        },
        {
            title: 'Codemeter',
            description: 'A unified platform to check your coding stats accross multiple coding platforms',
            image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?...',
            tags: ['React', 'Tailwind', 'APIs'],
            rotation: '-rotate-2',
            demoUrl: 'https://codemeter-5be63.web.app/',
            codeUrl: 'https://github.com/Shivayan09/CodeMeter',
        },
        {
            title: 'Astralab',
            description: 'A custom ATS-friendly resumer generation website, also generates portfolios',
            image: 'https://images.unsplash.com/photo-1716383930167-4cd5b4a81f0b?...',
            tags: ['React', 'Javascript', 'Express', "MongoDB"],
            rotation: 'rotate-2',
            demoUrl: 'https://astra-lab-zeta.vercel.app/',
            codeUrl: 'https://github.com/Shivayan09/AstraLab',
        },
    ];


    return (
        <section id='projects' className="py-20 px-4 bg-yellow-400 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full opacity-50" />
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-black opacity-10 rotate-45" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl md:text-7xl mb-4 inline-block transform rotate-1">
                        My Projects
                    </h2>
                    <div className="w-32 h-2 bg-black mx-auto transform -rotate-1" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-3xl overflow-hidden cartoon-border cartoon-hover transform ${project.rotation}`}
                        >
                            <div className="relative h-48 bg-black overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-3xl">{project.title}</h3>
                                <p className="text-lg leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-yellow-400 px-3 py-1 rounded-full text-sm border-2 border-black"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-black text-yellow-400 px-4 py-2 rounded-full border-2 border-black hover:bg-yellow-400 hover:text-black transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>

                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full border-2 border-black hover:bg-black hover:text-yellow-400 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
