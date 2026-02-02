import { ShieldCheck, User, Settings, BarChart3, BookOpen, TrendingUp } from "lucide-react";

const RolesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">User Roles</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Designed for Everyone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're an administrator managing quizzes or a student taking them, we've got you covered.
          </p>
        </div>

        {/* Roles Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Admin Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 card-hover">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">Administrator</h3>
              <p className="text-muted-foreground mb-6">
                Full control over the quiz platform with powerful management tools.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <Settings className="w-5 h-5 text-primary" />
                  <span>Create & manage quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Add & edit questions</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>View detailed analytics & results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent p-8 card-hover">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-accent-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">Student</h3>
              <p className="text-muted-foreground mb-6">
                Access quizzes, track progress, and improve your knowledge.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span>Attempt various quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>Track your scores</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <span>View performance history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
