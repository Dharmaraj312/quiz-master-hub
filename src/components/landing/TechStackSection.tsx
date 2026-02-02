import { Code2, Database, Layout, Server } from "lucide-react";

const technologies = [
  {
    category: "Backend",
    icon: Server,
    techs: ["Python", "Flask"],
    color: "from-green-500 to-emerald-600",
  },
  {
    category: "Frontend",
    icon: Layout,
    techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    category: "Database",
    icon: Database,
    techs: ["SQLite"],
    color: "from-purple-500 to-violet-600",
  },
];

const TechStackSection = () => {
  return (
    <section className="section-padding bg-quiz-light-blue">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A robust and reliable tech stack ensuring performance, security, and scalability.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 text-center card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 shadow-lg`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Category */}
              <h3 className="text-lg font-semibold text-foreground mb-4">{tech.category}</h3>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {tech.techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Code Element Decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
            <Code2 className="w-5 h-5 text-primary" />
            <code className="text-sm text-muted-foreground font-mono">
              pip install flask && python app.py
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
