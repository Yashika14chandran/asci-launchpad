import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Target,
  BookOpen,
  Award,
  Briefcase,
  MessageSquare,
  FileText,
  Laptop,
  GraduationCap,
} from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Structured Skill Pathways",
    description: "Smooth, progressive learning from beginner to advanced.",
  },
  {
    icon: Users,
    title: "Expert-Led Training",
    description: "Taught by certified cybersecurity professionals with hands-on experience.",
  },
  {
    icon: Target,
    title: "Practical, Real-World Learning",
    description: "Tools, simulations, and scenarios employers value.",
  },
  {
    icon: Laptop,
    title: "Flexible Online Learning",
    description: "Designed for students, working professionals, and career changers.",
  },
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description: "Global standards, updated tools, and modern defenses.",
  },
  {
    icon: MessageSquare,
    title: "Interview Confidence Programs",
    description: "Free mock interviews and technical rounds.",
  },
  {
    icon: Award,
    title: "Certification & Career Support",
    description: "Portfolio building, internship assistance, and job support.",
  },
];

const careerSupport = [
  {
    icon: Briefcase,
    title: "Industry Internships",
    description: "Exposure to VAPT, auditing, SOC operations, and cybersecurity projects.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance & Mentorship",
    description: "Personalized sessions to build confidence and clarity.",
  },
  {
    icon: FileText,
    title: "Resume & Interview Preparation",
    description: "Cybersecurity-focused resume building and interview coaching.",
  },
  {
    icon: Laptop,
    title: "Real-Time Project Experience",
    description: "Practical assignments to build a strong industry portfolio.",
  },
];

export default function WhyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">ASCI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choosing ASCI Academy means choosing a future built on skill,
              confidence, and real-world cybersecurity excellence. We go beyond
              traditional learning to deliver an immersive, career-focused
              experience designed for today's digital world.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Our Advantage"
            title="What Makes Us Different"
            subtitle="We combine expert instruction with hands-on practice to prepare you for real-world cybersecurity challenges."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                variant="glow"
                className="group hover:scale-[1.02] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career & Internship Support */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <SectionHeading
            tag="Career Support"
            title="Career & Internship Support"
            subtitle="We don't just teach — we help you launch your cybersecurity career."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {careerSupport.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Students Trained" },
              { value: "15+", label: "Expert Courses" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "80%", label: "Placement Success" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join hundreds of successful cybersecurity professionals who started
            with ASCI Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/skills">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
