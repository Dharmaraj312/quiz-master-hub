import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16 text-center">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Challenge Yourself?
            </h2>
            
            {/* Subtext */}
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Join hundreds of students who are already improving their knowledge with our quiz platform.
            </p>
            
            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 h-12 text-base font-semibold shadow-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
