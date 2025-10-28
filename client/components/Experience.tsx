import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Target, TrendingUp } from "lucide-react";

export default function Experience() {
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

  const experiences = [
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "WhiteCode Technology – Pune",
      period: "Sept 2022 – Present",
      description:
        "Developed and maintained scalable web applications for 150+ clients using modern frameworks and best practices.",
      achievements: [
        "Built scalable web applications for 150+ clients using CodeIgniter and Laravel",
        "Integrated payment gateways like Razorpay and BillDesk, processing 1,000+ transactions annually",
        "Reduced system downtime by implementing efficient MySQL database queries, improving performance by 40%",
        "Enhanced cross-team collaboration by participating in daily stand-ups and sprint planning under Agile methodologies",
        "Developed patent management and invoice systems, reducing processing times by 30%",
      ],
    },
  ];

  const stats = [
    {
      icon: Briefcase,
      label: "Clients Served",
      value: "150+",
    },
    {
      icon: Target,
      label: "Transactions Processed",
      value: "1000+",
    },
    {
      icon: TrendingUp,
      label: "Performance Improvement",
      value: "40%",
    },
  ];

  return (
    <section
      id="experience"
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
            Professional <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary rounded-full"
          ></motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block p-3 bg-primary/10 rounded-lg mb-4"
                >
                  <Icon size={24} className="text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-foreground/60 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center group-hover:from-primary/50 group-hover:to-primary/20 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap mt-4 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + idx * 0.05,
                            }}
                            className="text-foreground/70 text-sm flex items-start gap-3"
                          >
                            <span className="text-primary font-bold mt-1">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
