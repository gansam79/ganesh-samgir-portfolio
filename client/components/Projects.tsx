import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "CMS (Content Management System)",
      description:
        "Built a comprehensive CMS for 150+ college websites using PHP, React, and Angular. Features include NAAC automation, admin dashboards, and SSR for SEO optimization.",
      tech: ["PHP", "React", "Angular", "MySQL", "Python", "Bootstrap"],
      highlights: [
        "Deployed for 150+ college websites",
        "NAAC automation integration",
        "Server-side rendering for SEO",
        "University admin dashboard",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Brainiac IP Solutions",
      description:
        "Patent and invoice management platform with task allocation and Excel integration for improved efficiency.",
      tech: ["PHP", "MySQL", "Bootstrap", "Excel Integration"],
      highlights: [
        "Patent management system",
        "Invoice generation & tracking",
        "Dynamic Excel integration",
        "30% faster processing",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Online Admission System",
      description:
        "Automated admission system with integrated payment gateways, dynamic fee mapping, and real-time notifications.",
      tech: ["PHP", "MySQL", "JavaScript", "Razorpay", "BillDesk"],
      highlights: [
        "Payment gateway integration",
        "Dynamic degree-fee mapping",
        "Email notifications",
        "Application tracking",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Feedback System",
      description:
        "React-based feedback platform for capturing responses from students, teachers, alumni, and employers.",
      tech: ["React", "PHP", "REST APIs", "Bootstrap"],
      highlights: [
        "Multiple feedback forms",
        "Admin dashboards",
        "Analytics visualization",
        "Multi-program support",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Examination System",
      description:
        "Online test platform allowing students to take structured exams with backend API integration.",
      tech: ["PHP", "MySQL", "REST APIs"],
      highlights: [
        "Structured exam format",
        "Scalable backend",
        "Real-time result processing",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Faculty Profile Management",
      description:
        "Web application for managing faculty profiles, leave requests, NAAC reports, and achievements.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      highlights: [
        "Profile management",
        "Leave tracking",
        "NAAC compliance",
        "Report generation",
      ],
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const classProjects = [
    {
      title: "Share Market App",
      description:
        "A real-time stock tracking and visualization web application with dynamic data updates, built using React for the frontend, Node.js for the backend, and MongoDB for data storage.",
      tech: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
    },
    {
      title: "Perfume App",
      description:
        "An e-commerce-style web application for showcasing and selecting perfumes, featuring product listings, search functionality, and modern UI design.",
      tech: ["React", "CSS", "JavaScript"],
    },
  ];


  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary rounded-full"
          ></motion.div>
        </motion.div>

        {/* Main Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Project Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-foreground/60 text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Class Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Personal <span className="text-primary">Projects</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight
                    size={20}
                    className="text-primary/0 group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  />
                </div>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
