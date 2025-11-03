import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container container-max mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-700 leading-relaxed max-w-3xl"
        >
          {personal.bio}
        </motion.p>
      </div>
    </section>
  );
}


