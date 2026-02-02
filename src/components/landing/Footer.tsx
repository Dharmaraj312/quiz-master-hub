import { GraduationCap, Github, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">QuizMaster</span>
            </div>
            <p className="text-background/60 text-sm text-center md:text-left">
              Online Quiz Application – Mini Project
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#features" className="text-background/60 hover:text-background transition-colors text-sm">
              Features
            </a>
            <a href="#how-it-works" className="text-background/60 hover:text-background transition-colors text-sm">
              How It Works
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Documentation"
            >
              <BookOpen className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="text-center text-background/40 text-sm">
            © {new Date().getFullYear()} QuizMaster. Built with Python Flask for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
