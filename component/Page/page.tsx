"use client";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Performance",
    "Git & GitHub",
    "Figma",
    "MySQL",
    "PosgreSQL",
  ];

  return (
    <section id="about" className="min-h-[70vh] py-20 px-2 bg-[#020202]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p>
                Hello, my name is{" "}
                <span className="font-bold">
                  Abdullah Hafiyyan Naufal Rusyda!
                </span>{" "}
                <br />
                I’m currently exploring the world of frontend development in a
                chill but serious way. I started coding just out of
                curiosity—wondering how websites actually work—and somehow I
                ended up enjoying it more than I expected. Right now, I’m
                focusing on learning{" "}
                <span className="font-bold">
                  HTML, CSS, JavaScript, React, and Next.js.
                </span>
              </p>
              <p>
                I like creating simple, clean, and visually pleasant websites,
                even though the results aren’t always perfect. But that’s what
                makes the process fun. There are errors, confusion, and moments
                where nothing works… but also those satisfying “oh, so THAT’S
                how it works” moments that keep me motivated.
              </p>
              <p>
                Most of my projects are still small and basic, but they’re
                helping me grow step by step. For me, the goal isn’t
                perfection—it’s progress. As long as I keep trying and learning,
                I’m happy with the journey.
              </p>
              <p>
                Basically, I’m just someone who’s figuring out frontend
                development one step at a time. Still learning, still messy, but
                always eager to improve.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground hover:border-accent transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
