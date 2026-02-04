"use client"

import { motion } from 'framer-motion';
import { Palette, Code2, Database, Sparkles, Zap, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'bg-yellow-400',
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'bg-white',
    },
    {
      icon: Palette,
      title: 'Languages',
      skills: ['C lang', 'C++', 'Java', 'Python', 'Javascript'],
      color: 'bg-yellow-400',
    },
    {
      icon: Globe,
      title: 'Other',
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'Agile', 'Postman', 'Matlab', 'Arduino'],
      color: 'bg-white',
    },
  ];

  return (
    <section id='skills' className="py-20 px-4 bg-white relative">
      {/* Decorative stars */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles className="w-12 h-12 text-yellow-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <Zap className="w-12 h-12 text-yellow-400" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl mb-4 inline-block transform -rotate-1">
            My Skills
          </h2>
          <div className="w-32 h-2 bg-black mx-auto transform rotate-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${category.color} rounded-3xl p-8 cartoon-border cartoon-hover transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color === 'bg-white' ? 'bg-yellow-400' : 'bg-white'} p-4 rounded-2xl border-4 border-black`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${
                      category.color === 'bg-white' ? 'bg-yellow-400' : 'bg-white'
                    } px-4 py-2 rounded-full text-lg border-4 border-black cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '15+', label: 'Projects' },
            { number: '50%', label: 'Fun' },
            { number: '∞', label: 'Coffee' },
            { number: '24/7', label: 'Creative' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="bg-yellow-400 rounded-3xl p-6 cartoon-border text-center transform hover:rotate-3"
            >
              <div className="text-5xl mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
