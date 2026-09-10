import { Satellite, Lightbulb, MapPinned, ClipboardList } from "lucide-react";

const highlights = [
  {
    icon: Satellite,
    title: "GIS & Remote Sensing",
    description:
      "Analyzing spatial patterns and satellite imagery to understand places, environments and change.",
  },
  {
    icon: MapPinned,
    title: "Spatial Analysis",
    description:
      "Turning complex geospatial datasets into meaningful patterns, relationships and actionable insights.",
  },
  {
    icon: ClipboardList,
    title: "Research & Planning",
    description: "Combining research, planning principles and collaboration to address real-world urban challenges.",
  },
  {
    icon: Lightbulb,
    title: "Geospatial Innovation",
    description:
      "Exploring Python, spatial data science, visualization and emerging geospatial technologies to create better solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Mapping the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one layer at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
              <p>
              I'm an Urban & Regional Planning student at Rajshahi University of Engineering & Technology (RUET) with a strong passion for GIS, Remote Sensing, spatial analysis
              and geospatial data science. I enjoy transforming complex spatial data into meaningful insights that can support smarter and more sustainable planning decisions.
              </p>
              <p>
              My work combines urban planning, GIS, satellite imagery, Python
              and spatial visualization to explore real-world challenges such as urban growth,
              environmental change, land-use dynamics, climate risk and sustainable development.
              </p>
              <p>
              Beyond academics, I actively engage in research, geospatial projects, leadership and collaborative initiatives.
              I am constantly exploring new analytical methods, strengthening my technical skills and turning ideas into visually compelling and
              evidence-based spatial solutions. Looking ahead, I aspire to pursue a fully funded Master’s degree in Geography & Environment, GIS, Remote Sensing, Geospatial Data Science,
              or a related field, where I can deepen my research expertise and contribute to innovative solutions for complex spatial and urban challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to transform spatial data into meaningful insights and creating solutions that help us understand places, solve urban challenges and plan better futures."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
