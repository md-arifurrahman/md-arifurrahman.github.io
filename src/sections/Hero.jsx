import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  SiResearchgate,
  SiGooglescholar,
} from "react-icons/si";


const skills = [
  "ArcGIS Pro",
  "QGIS",
  "Google Earth Engine",
  "Remote Sensing",
  "GIS",
  "Spatial Analysis",
  "Geospatial Data Science",
  "Python",
  "GeoPandas",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Spatial Statistics",
  "Urban Planning",
  "Environmental Analysis",
];

export const Hero = () => {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCVDownload = async () => {
    try {
      const response = await fetch("/Arifur_Rahman_CV.pdf");

      if (!response.ok) {
        throw new Error("CV could not be loaded");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Arifur_Rahman_CV.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CV download failed:", error);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg1.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                GIS • Remote Sensing • Geospatial Data Science
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Md. <span className="glow-text">Arifur </span>
               
                <span className="font-serif italic font-normal text-white">
                   Rahman.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in animation-delay-200">
              An Urban & Regional Planning student specializing in <span className="text-primary glow-text">GIS, 
              Remote Sensing and Geospatial Data Science.</span> 
              

              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg" onClick={scrollToContact}>
  Contact Me <ArrowRight className="w-5 h-5" />
</Button>
             <AnimatedBorderButton onClick={handleCVDownload}>
  <Download className="w-5 h-5" />
  Download CV
</AnimatedBorderButton>
            </div>

            {/* Social Links */}
<div className="w-full animate-fade-in animation-delay-400">

<p className="text-sm text-muted-foreground mb-3">
  Follow me:
</p>

<div className="
  grid
  grid-cols-2
  gap-2
  w-full
  sm:flex
  sm:flex-wrap
  sm:gap-3
">
  {[
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-arifur-rahman-9a0305424/",
    },
    {
      icon: SiResearchgate,
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Md-Arifur-Rahman-Mulla",
    },
    {
      icon: SiGooglescholar,
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=khE9UGYAAAAJ&gmla=AKCpqFxr7j-vdKKznjv-6Fu_cN-Dw28ZmVFrBnRLy9VCfOmgInEVeCC1heAs1lcsqv9N6O8R1GP6z8srvZqbNxbdvshIemUztV-Uyftoz0cbYqrqmrs",
    },
    
    {
    
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/md-arifurrahman",
    },
    
  ].map((social, idx) => {
    const Icon = social.icon;

    return (
      <a
        key={idx}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          min-w-0
          w-full
          sm:w-auto
          flex
          items-center
          justify-center
          gap-2
          px-2
          sm:px-4
          py-2
          rounded-full
          glass
          text-[11px]
          sm:text-sm
          text-muted-foreground
          hover:text-primary
          hover:bg-primary/10
          transition-all
          duration-300
        "
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap">
          {social.label}
        </span>
      </a>
    );
  })}
</div>
</div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/arif-pic.png"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
