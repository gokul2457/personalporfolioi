import React from 'react';
import { motion } from 'framer-motion';
import { personal, socials } from '../data.js';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container container-max mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6 hover-lift"
          >
            <h3 className="font-semibold text-slate-900 mb-2">Get in touch</h3>
            <p className="text-slate-600 mb-4">I’m open to internship opportunities, collaborations, and interesting projects.</p>
            <a href={`mailto:${personal.email}`} className="btn-primary"><FiMail /> Email Me</a>
            <div className="mt-4 flex items-center gap-4 text-slate-700">
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FiGithub size={22} />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FiLinkedin size={22} />
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FiTwitter size={22} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6 hover-lift"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
              const body = encodeURIComponent(`${data.get('message')}` + '\n\nFrom: ' + data.get('email'));
              window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
            }}
          >
            <h3 className="font-semibold text-slate-900 mb-4">Send a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="btn-primary mt-4">Send</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}


