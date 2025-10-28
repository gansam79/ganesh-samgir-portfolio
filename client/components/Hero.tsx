import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
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

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
              Ganesh <span className="text-primary">Samgir</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-2xl md:text-3xl text-foreground/70 mb-6 font-light">
              Full Stack Software Developer
            </p>
          </motion.div>

          {/* Location & Contact */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Pune, India</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+91 9423523735</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></div>
            <a
              href="mailto:ganeshsamgir79@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ganeshsamgir79@gmail.com
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
            >
              <Download size={20} />
              Download Resume
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors group"
            >
              Contact Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-2 bg-primary/40 rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
