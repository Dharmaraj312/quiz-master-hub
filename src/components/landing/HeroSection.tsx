import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quiz-light-blue" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-narrow relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Python Flask Mini Project</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
          Test Your Knowledge
          <br />
          <span className="gradient-text">Anytime, Anywhere</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          An Online Quiz Application built using Python Flask. Take quizzes, track your progress, and improve your knowledge with instant feedback.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="gradient-primary text-primary-foreground px-8 h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Start Quiz
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 h-12 text-base font-semibold border-2">
            <PlayCircle className="mr-2 w-5 h-5" />
            Admin Login
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Quizzes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground">1000+</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
