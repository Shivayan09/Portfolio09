"use client"

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    const { name, email, message } = formData;
    const whatsAppNumber = '919435553309'
    const text = `New message from your portfolio website:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`
    const url = `https://wa.me/${whatsAppNumber}?text=${text}`
    window.open(url, '_blank')
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Shivayan09' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivayan-chakravarty-806702294/' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/Shivayan009' },
    { icon: Mail, label: 'Email', url: 'mailto:shivayanchak@gmail.com' },
  ];

  return (
    <section id='contact' className="py-20 px-4 bg-yellow-400 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-5 w-16 h-16 bg-black rounded-full opacity-20" />
      <div className="absolute bottom-10 right-5 w-20 h-20 bg-white rounded-full opacity-30" />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-black rotate-45 opacity-10"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl mb-4 inline-block transform rotate-1">
            Let's Chat!
          </h2>
          <div className="w-32 h-2 bg-black mx-auto transform -rotate-1" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl mt-6"
          >
            Got a cool project? Let's make magic happen! ✨
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 cartoon-border transform -rotate-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-xl">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-4 border-black bg-yellow-50 focus:bg-white transition-colors outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-xl">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-4 border-black bg-yellow-50 focus:bg-white transition-colors outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-xl">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-4 border-black bg-yellow-50 focus:bg-white transition-colors outline-none resize-none"
                  placeholder="Tell me about your awesome project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-yellow-400 px-6 py-4 rounded-full cartoon-border cartoon-hover cartoon-active flex items-center justify-center gap-2 text-xl"
              >
                <Send className="w-6 h-6" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 cartoon-border transform rotate-1">
              <h3 className="text-3xl mb-6">Find me on socials! 🎉</h3>
              <div className="space-y-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target='_blank'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-yellow-400 rounded-2xl border-4 border-black"
                  >
                    <div className="bg-white p-3 rounded-full">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black text-yellow-400 rounded-3xl p-8 cartoon-border transform -rotate-1"
            >
              <h3 className="text-2xl mb-4">Quick Response!</h3>
              <p className="text-lg">
                I usually respond within 24 hours. Let's create something amazing together! 🚀
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
