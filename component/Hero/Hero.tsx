"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-50 items-center">
          {/* Left side content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-cyan-500 text-sm font-semibold tracking-wide mb-2">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-none">
                FullStack Developer
              </h1>
            </div>

            <p className="text-lg text-[#737373] max-w-md leading-relaxed">
              I design and build beautiful digital experiences with modern
              technologies. Passionate about clean code and seamless user
              interfaces.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-[#2196F3] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                View My Work
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right side - Animated gradient box */}
          <div className="hidden md:block relative h-120 w-95">
            <div className="absolute  inset-0 bg-linear-to-br from-[#2196F3] to-[#3B82F6] rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 bg-zinc-950 border border-zinc-900 rounded-2xl backdrop-blur-sm">
              <Image
                src="/foto1.jpg"
                alt="/"
                width={390}
                height={0}
                className="rounded-2xl"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
