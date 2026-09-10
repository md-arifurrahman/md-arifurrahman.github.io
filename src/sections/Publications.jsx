import { ArrowUpRight, FileText } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const publications = [
  {
    title: "ISEE 2026",
    description:
      "Forecasting Construction-Induced Thermal Anomalies and Land Conversion in Ishwardi Using Agent-Based Modelling and Multitemporal Machine Learning Classification",
    image: "/Publications/ML.webp",
    tags: ["International Conference Paper"],
    link: "https://www.researchgate.net/publication/412829287_FORECASTING_CONSTRUCTION-INDUCED_THERMAL_ANOMALIES_AND_LAND_CONVERSION_IN_ISHWARDI_USING_AGENT-BASED_MODELLING_AND_MULTITEMPORAL_MACHINE_LEARNING_CLASSIFICATION",
    pdf: "#",
  },
  {
    title: "Rsearch Square",
    description:
      "Assessing agrarian moisture sensitivity in the Barind Tract through a principal component analysis-weighted geospatial framework",
    image: "/Publications/RSQ.webp",
    tags: ["Preprint"],
    link: "https://www.researchgate.net/publication/413799708_Assessing_agrarian_moisture_sensitivity_in_the_Barind_Tract_through_a_principal_component_analysis-weighted_geospatial_framework",
    pdf: "#",
  },
 
];

export const Publications = () => {
  return (
    <section
      id="publications"
      className="py-32 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Research & Publications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Research that
            <span className="font-serif italic font-normal text-white">
              {" "}
              makes an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my published and presented research exploring GIS,
            remote sensing, geospatial data science, urban planning and
            environmental challenges.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((publication, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-card via-card/50
                    to-transparent
                    opacity-60
                  "
                />

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Publication Link */}
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="View publication"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  {/* PDF Link */}
                  <a
                    href={publication.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="View PDF"
                  >
                    <FileText className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {publication.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      w-5 h-5
                      flex-shrink-0
                      text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {publication.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="
                        px-4 py-1.5
                        rounded-full
                        bg-surface
                        text-xs
                        font-medium
                        border
                        border-border/50
                        text-muted-foreground
                        hover:border-primary/50
                        hover:text-primary
                        transition-all
                        duration-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Publications
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};