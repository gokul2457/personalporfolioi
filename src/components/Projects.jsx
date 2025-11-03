import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data.js';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container container-max mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Projects
        </motion.h2>

        {projects.length === 0 ? (
          <p className="text-slate-600">Projects coming soon. Stay tuned!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="card overflow-hidden hover-lift flex flex-col"
              >
                {p.image && (
                  <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-4 space-y-2 grow">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.description}</p>
                  {Array.isArray(p.tags) && p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4 pt-0 flex gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                        <FiGithub /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


