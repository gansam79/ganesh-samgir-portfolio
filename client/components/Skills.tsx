import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["PHP", "JavaScript", "HTML", "CSS", "Python", "SQL", "JSON"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "🛠️",
      skills: ["React", "AngularJS", "Laravel", "CodeIgniter", "Bootstrap"],
    },
    {
      title: "Tools & Platforms",
      icon: "⚙️",
      skills: ["GitLab", "FileZilla", "Postman", "XAMPP", "VS Code", "Sublime Text"],
    },
    {
      title: "Hosting & DevOps",
      icon: "☁️",
      skills: ["cPanel", "Hostinger", "DigitalOcean"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
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
            Skills & <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary rounded-full"
          ></motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium hover:cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Animated border on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-primary to-primary/0 mt-6 origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-secondary/10 border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-primary font-semibold mb-2">Full-Stack Development</p>
              <p className="text-foreground/70 text-sm">
                End-to-end web application development with focus on scalability and performance.
              </p>
            </div>
            <div>
              <p className="text-primary font-semibold mb-2">Database Design</p>
              <p className="text-foreground/70 text-sm">
                Optimized MySQL queries, efficient schema design, and performance tuning.
              </p>
            </div>
            <div>
              <p className="text-primary font-semibold mb-2">Agile & Collaboration</p>
              <p className="text-foreground/70 text-sm">
                Experience with sprint planning, stand-ups, and cross-team collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
