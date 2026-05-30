import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, GitBranch, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeHeader from "./CodeHeader";

const projects = [
  {
    title: "Code to Win",
    subtitle: "Flagship Competitive Programming Analytics Platform",
    challenge: "Coding progress was fragmented across platforms, so there was no clear way to understand consistency, growth, or readiness.",
    solution: "Built a full-stack analytics product with automated ingestion, role-based access, and reporting that turns raw platform data into useful insight for users and recruiters alike.",
    status: "Live and used daily by 5,000 active users, with a clear path to scale through queued ingestion, caching, batching, and rate limiting.",
    enhancements: [
      "Move scraping to queues and batch writes for higher load",
      "Add caching and read-heavy analytics separation",
      "Expand recruiter reports and trend-based alerts",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Cron Jobs"],
    gradient: "from-secondary to-cyber-purple",
    githubUrl: "https://github.com/ramalokeshreddyp/code_to_win",
    liveUrl: "http://codetracker.adityauniversity.in:3000/",
  },
  {
    title: "BoardPulse",
    subtitle: "Real-Time Collaborative Workboard",
    challenge: "Traditional task boards become noisy and slow when multiple people update the same work at once.",
    solution: "Built a containerized Kanban system with Django Channels, Redis pub/sub, PostgreSQL, and Docker so every update syncs instantly and securely.",
    status: "Benchmarked at 9.14ms P95 WebSocket latency across 10 concurrent clients.",
    enhancements: [
      "Add multi-workspace support and notifications",
      "Extend collaboration to mobile-friendly views",
      "Add audit trails and team analytics",
    ],
    tech: ["Python", "Django", "Channels", "Redis", "PostgreSQL", "Docker"],
    gradient: "from-neon-green to-cyber-cyan",
    githubUrl: "https://github.com/ramalokeshreddyp/BoardPulse",
    liveUrl: null,
  },
  {
    title: "FatePick",
    subtitle: "Fair Randomization Tool",
    challenge: "Manual selection is repetitive, slow, and easy to bias when teams or assignments need to be created quickly.",
    solution: "Built a client-heavy tool with verified shuffle logic, bulk import, and export flows that keep selection fair and fast.",
    status: "Deployed on Vercel and ready for everyday classroom or workshop use.",
    enhancements: [
      "Add reusable templates for recurring workflows",
      "Support collaborative selection sessions",
      "Track selection history and export summaries",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "jsPDF", "SheetJS"],
    gradient: "from-cyber-purple to-cyber-pink",
    githubUrl: "https://github.com/ramalokeshreddyp/fatepick",
    liveUrl: "https://fatepick.vercel.app/",
  },
  {
    title: "AI Resume Screener",
    subtitle: "Smart Resume Analyzer",
    challenge: "Manual resume review is inconsistent and slow when you need a quick signal on fit, missing skills, and improvement areas.",
    solution: "Built an NLP-based analyzer that extracts skills, identifies gaps, and returns practical recommendations from uploaded resumes.",
    status: "Working prototype ready for iteration and stronger job-fit scoring.",
    enhancements: [
      "Add ATS-style scoring and ranking",
      "Improve PDF parsing and structured extraction",
      "Expand recommendations using job descriptions",
    ],
    tech: ["Python", "Flask", "PyPDF2", "NLP", "Jinja2"],
    gradient: "from-cyber-cyan to-cyber-blue",
    githubUrl: "https://github.com/ramalokeshreddyp/AI-Resume_Screener",
    liveUrl: null,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-80px",
    amount: 0.3 
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      } : {}}
      className="relative group"
    >
      {/* Terminal-style project card */}
      <div className={`rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,229,255,0.2)] transition-all duration-500 ${project.title === "Code to Win" ? "ring-1 ring-primary/30" : ""}`}>
        {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3 h-3" />
                live
            </span>
            <span className="flex items-center gap-1">
              <GitCommit className="w-3 h-3" />
                shipped
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8">
          {/* Title as code comment */}
          <div className="font-mono text-xs text-muted-foreground/60 mb-2">
            {"/**"}
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.title}
          </h3>
          <div className="font-mono text-sm text-primary mb-2">
            * {project.subtitle}
          </div>
          <div className="font-mono text-xs text-muted-foreground/60 mb-4">
            {"*/"}
          </div>

          {project.title === "Code to Win" && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Flagship project for recruiter review
            </div>
          )}

          <div className="text-muted-foreground text-base leading-relaxed mb-6">
            <div className="mb-4">{project.challenge}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-[hsl(222,47%,6%)] p-4">
                <div className="font-mono text-xs text-neon-green mb-2">// Challenge</div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[hsl(222,47%,6%)] p-4">
                <div className="font-mono text-xs text-cyber-cyan mb-2">// Solution</div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Tech Stack as imports */}
          <div className="font-mono text-xs sm:text-sm mb-6 space-y-1">
            <div className="text-muted-foreground/60">{"// Tech Stack"}</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.2 + (i * 0.05), duration: 0.3 }
                  } : {}}
                  className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-background font-medium text-xs`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl p-4 border border-white/5 bg-[hsl(222,47%,6%)]">
              <div className="font-mono text-xs text-primary mb-2">// Current Status</div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.status}</p>
            </div>
            <div className="rounded-xl p-4 border border-white/5 bg-[hsl(222,47%,6%)]">
              <div className="font-mono text-xs text-secondary mb-2">// Future Enhancements</div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                {project.enhancements.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-neon-green shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.title === "Code to Win" && (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-6">
              <div className="font-mono text-xs text-primary mb-2">// Why It Matters</div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This is the project that best shows product thinking, data pipelines, authentication, and operational scale.
                It already has a live user base, and the next growth phase is straightforward: cache analytics, queue ingestion,
                batch writes, and keep the experience fast as traffic grows.
              </p>
            </div>
          )}
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/40 hover:bg-primary/20 hover:text-primary flex items-center gap-2 font-mono"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span>git clone</span>
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/40 hover:bg-primary/20 hover:text-primary flex items-center gap-2 font-mono"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>npm run demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div ref={headerRef}>
          <CodeHeader
            fileName="Projects.tsx"
            title="Featured Projects"
            highlightedWord="Projects"
            subtitle="git log --oneline | head -5"
            isInView={headerInView}
          />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
