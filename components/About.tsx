"use client"

import { motion } from 'framer-motion';
import { Coffee, Heart, Rocket, Star } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export default function About() {
  const facts = [
    { icon: Coffee, text: 'Fueled by coffee & creativity' },
    { icon: Heart, text: 'Passionate about software' },
    { icon: Rocket, text: 'Always learning new things' },
    { icon: Star, text: '3+ years of experience' },
  ];

  return (
    <section id='about' className="py-20 px-4 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-8 h-8 bg-yellow-400 rounded-full" />
      <div className="absolute bottom-10 right-5 w-12 h-12 bg-yellow-400 rotate-45" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl mb-4 inline-block transform -rotate-2">
            About Me
          </h2>
          <div className="w-32 h-2 bg-black mx-auto transform rotate-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-yellow-400 rounded-3xl p-8 cartoon-border cartoon-hover transform rotate-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716383930167-4cd5b4a81f0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDE3NjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-yellow-400 p-6 rounded-3xl cartoon-border transform -rotate-1">
              <p className="text-xl leading-relaxed">
                Hey there! I'm a creative developer who loves turning wild ideas into reality. 
                With a passion for playful design and clean code, I create experiences that are 
                both beautiful and functional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-2xl cartoon-border cartoon-hover flex items-center gap-3"
                >
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <fact.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
