"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-[#2196F3] cursor-pointer text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Send Email
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors">
            Schedule Call
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="rusydahafiyyan@gmail.com"
            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/HAFIYYAAN"
            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hafiyyan-rusyda-010613276/"
            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/Hafiyya27350526"
            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
