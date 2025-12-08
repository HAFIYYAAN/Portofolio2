"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border bg-card/50 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Portfolio</h3>
            <p className="text-sm text-neutral-500">
              Crafting beautiful digital experiences with modern technologies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/HAFIYYAAN"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hafiyyan-rusyda-010613276/"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Hafiyya27350526"
                  className="text-neutral-500 hover:text-cyan-500 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-neutral-500 mb-2">
              rusydahafiyyan@gmail.com
            </p>
            <Link
              href="https://wa.me/6285183391627"
              className="text-sm text-neutral-500 hover:underline hover:text-cyan-500 transition-colors"
            >
              +62 851-8339-1627
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-neutral-500 hover:text-cyan-500 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-cyan-500 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
