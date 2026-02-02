import { 
  UserPlus, 
  ListChecks, 
  Zap, 
  Trophy, 
  LayoutDashboard,
  Shield
} from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "User Registration & Login",
    description: "Secure authentication system for students and teachers with personalized dashboards.",
  },
  {
    icon: ListChecks,
    title: "Multiple Choice Quizzes",
    description: "Well-structured MCQ format with clear options for an intuitive quiz experience.",
  },
  {
    icon: Zap,
    title: "Automatic Evaluation",
    description: "Instant grading powered by smart algorithms. No waiting for results.",
  },
  {
    icon: Trophy,
    title: "Instant Results",
    description: "Get your score immediately after completing the quiz with detailed feedback.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Comprehensive panel for managing quizzes, questions, and viewing analytics.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices to protect user data and ensure fair quizzes.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need to Learn
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our quiz platform comes packed with features designed to make learning engaging, efficient, and fun.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
