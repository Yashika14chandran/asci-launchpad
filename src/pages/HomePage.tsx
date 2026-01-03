import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import heroCyber from "@/assets/hero-cyber.jpg";
import socOperations from "@/assets/soc-operations.jpg";
import {
  Shield,
  Target,
  Users,
  Award,
  BookOpen,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Eye,
  Code,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Structured Skill Pathways",
    description: "Progressive learning from beginner to advanced levels",
  },
  {
    icon: Users,
    title: "Expert-Led Training",
    description: "Certified cybersecurity professionals with hands-on experience",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description: "Real-world tools, simulations, and scenarios employers value",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Globally recognized credentials for your career",
  },
];

const tracks = [
  {
    icon: Eye,
    name: "Cyber Explorer",
    level: "Beginner",
    description: "Build a strong foundation in cybersecurity fundamentals",
  },
  {
    icon: Lock,
    name: "Cyber Defender",
    level: "Intermediate",
    description: "Practical skills to protect systems and analyze threats",
  },
  {
    icon: Code,
    name: "Cyber Sentinel",
    level: "Advanced",
    description: "Master offensive and defensive security strategies",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCyber}
            alt="Cybersecurity Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 hero-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container-wide text-center px-4">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8">
              <Zap className="h-4 w-4" />
              <span>Advanced Security & Cyber Intelligence Academy</span>
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100">
            <span className="text-gradient">Secure.</span>{" "}
            <span className="text-foreground">Protect.</span>{" "}
            <span className="text-accent">Defend.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-200 leading-relaxed">
            Empowering the next generation of cyber defenders through expert-led
            training, real-world skills, and industry-recognized certifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/skills">Explore Pathways</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Interview Confidence Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Free Mock Interviews
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Interview & Communication Confidence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Overcome fear of English communication and live technical tasks
                with free mock interviews and technical rounds. Practice
                real-world scenarios, screen-sharing, and hands-on assessments in
                a safe, supportive environment, and step into your cybersecurity
                career with confidence.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Book Your Free Mock Interview
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={socOperations}
                alt="SOC Operations Training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Why ASCI"
            title="What Makes Us Different"
            subtitle="Choose ASCI Academy for a future built on skill, confidence, and real-world cybersecurity excellence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="glow"
                className="group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Tracks Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <SectionHeading
            tag="Learning Paths"
            title="ASCI Skill Pathways"
            subtitle="Progressive learning tracks designed to take you from beginner to advanced cybersecurity professional."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <Card
                key={index}
                variant="gradient"
                className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <track.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-accent font-medium uppercase tracking-wider">
                        {track.level}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {track.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {track.description}
                  </p>
                  <Link
                    to="/skills"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                  >
                    View Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/skills" className="gap-2">
                Explore All Pathways
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Become a Cybersecurity Professional?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join ASCI Academy and start your journey toward a secure and
            successful cyber career.
          </p>
          <Button variant="glow" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
