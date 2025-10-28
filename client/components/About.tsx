import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const timeline = [
    {
      year: "2022 - Present",
      title: "Full Stack Developer",
      company: "WhiteCode Technology, Pune",
      description:
        "Built scalable web applications for 150+ clients using CodeIgniter and Laravel. Integrated payment gateways, optimized databases, and led agile team collaborations.",
      achievements: [
        "Developed web apps for 150+ clients",
        "Integrated Razorpay & BillDesk (1000+ transactions annually)",
        "Improved DB performance by 40%",
        "Reduced processing times by 30%",
      ],
    },
    {
      year: "2022",
      title: "Bachelor of Engineering",
      company: "CGPA: 8.55",
      description:
        "Completed B.E. with strong academics and practical experience in full-stack development and software engineering principles.",
    },
    {
      year: "2023",
      title: "Data Science & Data Analyst",
      company: "ExcelR",
      description:
        "Advanced training in data science, analytics, and business intelligence tools.",
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary rounded-full"
          ></motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-4">
            I'm a passionate full-stack software developer based in Pune, India,
            specializing in building scalable, high-performance web applications. With
            over 3 years of professional experience, I've worked with a diverse range
            of technologies to create innovative solutions for clients across various
            industries.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-foreground/80">
            My journey in technology has been driven by a commitment to continuous
            learning and delivering exceptional results. From backend architecture to
            frontend optimization, I bring a comprehensive approach to every project.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Professional Journey
          </h3>

          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="ml-16 md:ml-0"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 -translate-x-2.5 md:static md:flex md:justify-center md:w-1/2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                    ></motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                    >
                      <p className="text-sm font-semibold text-primary mb-2">
                        {item.year}
                      </p>
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foreground/60 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-foreground/70 mb-4">{item.description}</p>
                      {item.achievements && (
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-foreground/60 text-sm flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
