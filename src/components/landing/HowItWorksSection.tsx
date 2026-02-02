import { UserCheck, FolderOpen, ClipboardCheck, Award } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Register or Login",
    description: "Create your account in seconds or login to access your personalized dashboard.",
  },
  {
    icon: FolderOpen,
    step: "02",
    title: "Choose a Quiz Category",
    description: "Browse through various subjects and select a quiz that matches your interests.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Answer Questions",
    description: "Take your time to read each question carefully and select the best answer.",
  },
  {
    icon: Award,
    step: "04",
    title: "Get Instant Score",
    description: "Receive your results immediately with detailed feedback on your performance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-quiz-light-blue">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple Steps to Get Started
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with your learning journey in just four easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center">
                {/* Step Number with Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-card border-2 border-border flex items-center justify-center shadow-lg card-hover">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
