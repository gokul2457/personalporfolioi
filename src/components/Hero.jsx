import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data.js';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="section-padding relative">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full hero-glow pointer-events-none" />
      <div className="container container-max mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 order-2 md:order-2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-800/90">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              {personal.title}
            </span>
          </p>
          <p className="text-slate-600 max-w-prose">{personal.bio}</p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end order-1 md:order-1"
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-md border border-slate-200 bg-white hover-lift ring-2 ring-indigo-100">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = profileImage; }}
            />
            <span className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


