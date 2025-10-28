import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ganesh <span className="text-primary">Samgir</span>
            </h3>
            <p className="text-foreground/60">Full Stack Software Developer</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-foreground/60 mb-8">
            <a
              href="mailto:ganeshsamgir79@gmail.com"
              className="hover:text-primary transition-colors"
            >
              ganeshsamgir79@gmail.com
            </a>
            <span className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></span>
            <a
              href="tel:+919423523735"
              className="hover:text-primary transition-colors"
            >
              +91 9423523735
            </a>
            <span className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></span>
            <span>Pune, India</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            © {currentYear} Ganesh Samgir | Built with React + Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
