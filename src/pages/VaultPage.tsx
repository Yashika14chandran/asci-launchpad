import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ArrowRight,
  Award,
  Eye,
  Shield,
  Code,
  Zap,
  Medal,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
    icon: Eye,
    level: "Beginner",
    name: "Cyber Explorer",
    badge: "Cyber Explorer Level",
    description:
      "For learners starting their cybersecurity journey. Covers fundamentals, basics of networks, ethical hacking introduction, and digital forensics essentials.",
    color: "primary",
  },
  {
    icon: Shield,
    level: "Intermediate",
    name: "Cyber Defender",
    badge: "Cyber Defender Level",
    description:
      "For students ready to dive deeper into practical skills like Web VAPT, network defense, cloud security, and OSINT.",
    color: "accent",
  },
  {
    icon: Code,
    level: "Advanced",
    name: "Cyber Sentinel",
    badge: "Cyber Sentinel Level",
    description:
      "For professionals mastering red teaming, mobile security, exploit development, and high-level offensive security.",
    color: "primary",
  },
  {
    icon: Zap,
    level: "Micro-Course",
    name: "Skill Booster",
    badge: "Cyber Skill Booster Badge",
    description:
      "Short, skill-focused certifications covering tools like Nmap, Burp Suite, Wireshark, Linux commands, API security, and more.",
    color: "accent",
  },
];

export default function VaultPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Certifications
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The <span className="text-gradient">Cyber Vault</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn industry-recognized certifications that validate your cybersecurity
              expertise and accelerate your career.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                variant="gradient"
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${
                          cert.color === "primary"
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <cert.icon
                          className={`h-8 w-8 ${
                            cert.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                      <div>
                        <span
                          className={`text-xs ${
                            cert.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          } font-medium uppercase tracking-wider`}
                        >
                          {cert.level} Certifications
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {cert.name}
                        </h3>
                      </div>
                    </div>
                    <Medal
                      className={`h-8 w-8 ${
                        cert.color === "primary"
                          ? "text-primary/50"
                          : "text-accent/50"
                      }`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certificate Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                      cert.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <BadgeCheck className="h-5 w-5" />
                    <span className="font-medium text-sm">
                      Certificate: {cert.badge}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <SectionHeading
            tag="Benefits"
            title="Why Get Certified?"
            subtitle="ASCI certifications are designed to validate your skills and boost your career prospects."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Our certifications are recognized by employers and demonstrate your expertise in cybersecurity.",
              },
              {
                icon: Shield,
                title: "Practical Skills",
                description:
                  "Certifications are based on hands-on assessments that prove real-world capabilities.",
              },
              {
                icon: Zap,
                title: "Career Advancement",
                description:
                  "Stand out in job applications and accelerate your path to leadership roles.",
              },
            ].map((benefit, index) => (
              <Card key={index} variant="glow" className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Your Certification Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Explore our skill pathways and earn certifications that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/skills" className="gap-2">
                View Skill Pathways
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
