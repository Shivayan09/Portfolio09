import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-12 px-4 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-400" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-2xl">
            <span>Made with</span>
            <Heart className="w-6 h-6 fill-yellow-400" />
            <span>and lots of coffee</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a href="#home" className="hover:underline decoration-4 underline-offset-4">
              Home
            </a>
            <a href="#projects" className="hover:underline decoration-4 underline-offset-4">
              Projects
            </a>
            <a href="#skills" className="hover:underline decoration-4 underline-offset-4">
              Skills
            </a>
            <a href="#contact" className="hover:underline decoration-4 underline-offset-4">
              Contact
            </a>
          </div>

          <div className="pt-6 border-t-4 border-yellow-400">
            <p className="text-lg">
              © 2026 Shivayan's Portfolio. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-5 left-5 w-8 h-8 bg-yellow-400 rounded-full opacity-50" />
      <div className="absolute top-5 right-5 w-10 h-10 bg-yellow-400 rotate-45 opacity-30" />
    </footer>
  );
}
