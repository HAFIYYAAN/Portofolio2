"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mutaba'ah",
      description:
        "Mutaba'ah is a record of daily deeds or activities used to monitor consistency, improve self-quality, and maintain discipline in carrying out routines.",
      tags: ["React", "Next.js", "typescript"],
      image: "/project.png",
      url: "https://mutaba-ah0.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer rounded-xl overflow-hidden bg-neutural-100 border-[#262626] border border-border hover:border-[#06B6D4] transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  width={500}
                  height={500}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutural-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#737373] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-[#06B6D4] rounded-full border-[#262626] border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
