'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onClick: () => void;
}

export default function HeroSection({ onClick }: HeroSectionProps) {

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Welcome to my
        <br />
        Data Science Portfolio
      </motion.h1>
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 focus:outline-none cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={48} className="text-white" />
        </motion.div>
      </motion.button>
    </section>
  );
}