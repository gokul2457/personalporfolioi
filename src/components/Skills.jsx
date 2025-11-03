import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data.js';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
} from 'react-icons/si';

const iconMap = {
  React: SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Tailwind: SiTailwindcss,
  'Node.js': SiNodedotjs,
  GitHub: SiGithub,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container container-max mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((s) => {
            const Icon = iconMap[s] || SiGithub;
            return (
              <motion.div
                key={s}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card p-4 flex items-center gap-3 hover-lift"
              >
                <Icon className="text-indigo-600" size={22} />
                <span className="text-slate-800 font-medium">{s}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


