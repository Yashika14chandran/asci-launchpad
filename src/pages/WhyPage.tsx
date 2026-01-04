import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
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
  Terminal,
  TrendingUp,
  Zap,
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

const stats = [
  { value: "500+", label: "Students Trained", icon: Users },
  { value: "15+", label: "Expert Courses", icon: BookOpen },
  { value: "95%", label: "Satisfaction Rate", icon: TrendingUp },
  { value: "80%", label: "Placement Success", icon: Zap },
];

export default function WhyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              <Terminal className="h-3 w-3" />
              Why Choose Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">ASCI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choosing ASCI Academy means choosing a future built on skill,
              confidence, and real-world cybersecurity excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-mono text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-4">
              Our Advantage
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine expert instruction with hands-on practice to prepare you for real-world cybersecurity challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                variant="htb"
                className="group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
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
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              Career Support
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career & Internship Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just teach — we help you launch your cybersecurity career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {careerSupport.map((item, index) => (
              <Card key={index} variant="htb" className="group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join hundreds of successful cybersecurity professionals who started
            with ASCI Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="htb" size="xl" asChild>
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