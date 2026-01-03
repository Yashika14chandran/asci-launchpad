import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import GoogleReviews from "@/components/shared/GoogleReviews";
import {
  ArrowRight,
  Eye,
  Shield,
  Code,
  Zap,
  BookOpen,
} from "lucide-react";

const beginnerCourses = [
  "Core Cyber Defense Architecture",
  "Network Sentinel Strategies",
  "Cyber Hygiene & Threat Vector",
  "Ethical Exploitation Methodologies",
  "Digital Forensics & Artifact Analysis",
];

const intermediateCourses = [
  "Web Application Breach Simulations",
  "Network Security & Monitoring",
  "Cloud Security Posture Engineering",
  "Secure Code Hardening & Audit",
  "OSINT Reconnaissance & Threat Mapping",
];

const advancedCourses = [
  "Red Team Tactical Operations",
  "Mobile & IoT Attack Vectors",
  "Advanced Web Security & Exploit Development",
  "ISO 27001 Cyber Governance & Auditing",
];

const microCourses = [
  "Burp Suite Attack Simulation",
  "API Security Breach Analysis",
  "Social Engineering Exploit Tactics",
  "Email Threat Vector Detection",
  "Network Packet Forensics",
  "Nmap Threat Surface Mapping",
  "Linux Shell & Command Operations",
  "Authentication & Credential Security Engineering",
  "OSINT Threat Recon Toolkit",
];

interface TrackCardProps {
  icon: React.ElementType;
  level: string;
  name: string;
  description: string;
  courses: string[];
  accentColor: "primary" | "accent";
}

function TrackCard({ icon: Icon, level, name, description, courses, accentColor }: TrackCardProps) {
  return (
    <Card variant="gradient" className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl ${accentColor === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center`}>
            <Icon className={`h-7 w-7 ${accentColor === 'primary' ? 'text-primary' : 'text-accent'}`} />
          </div>
          <div>
            <span className={`text-xs ${accentColor === 'primary' ? 'text-primary' : 'text-accent'} font-medium uppercase tracking-wider`}>
              {level}
            </span>
            <CardTitle className="text-2xl">{name}</CardTitle>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <h4 className="font-heading font-semibold text-foreground mb-4">Courses Included:</h4>
        <ul className="space-y-2 mb-6">
          {courses.map((course, index) => (
            <li key={index} className="flex items-start gap-3">
              <BookOpen className={`h-4 w-4 mt-1 flex-shrink-0 ${accentColor === 'primary' ? 'text-primary' : 'text-accent'}`} />
              <span className="text-muted-foreground text-sm">{course}</span>
            </li>
          ))}
        </ul>
        <GoogleReviews />
      </CardContent>
    </Card>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Learning Paths
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ASCI <span className="text-gradient">Skill Pathways</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progressive learning tracks designed to take you from curious beginner to
              industry-ready cybersecurity professional.
            </p>
          </div>
        </div>
      </section>

      {/* Beginner Track */}
      <section className="section-padding">
        <div className="container-wide">
          <TrackCard
            icon={Eye}
            level="Beginner"
            name="Cyber Explorer Track"
            description="The Cyber Explorer Track ignites curiosity and builds a strong foundation in cybersecurity, networks, and ethical practices, empowering beginners to confidently step into the digital security world."
            courses={beginnerCourses}
            accentColor="primary"
          />
        </div>
      </section>

      {/* Intermediate Track */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <TrackCard
            icon={Shield}
            level="Intermediate"
            name="Cyber Defender Track"
            description="The Cyber Defender Track equips learners with practical skills to protect systems, secure applications, and analyze real-world threats, turning knowledge into actionable defense capabilities."
            courses={intermediateCourses}
            accentColor="accent"
          />
        </div>
      </section>

      {/* Advanced Track */}
      <section className="section-padding">
        <div className="container-wide">
          <TrackCard
            icon={Code}
            level="Advanced"
            name="Cyber Sentinel Track"
            description="The Cyber Sentinel Track develops expertise in offensive and defensive strategies, enabling professionals to tackle sophisticated cyber threats and emerge as skilled cyber sentinels."
            courses={advancedCourses}
            accentColor="primary"
          />
        </div>
      </section>

      {/* Micro Courses */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <SectionHeading
            tag="Quick Skills"
            title="Cyber Skill Boosters"
            subtitle="Fast, high-impact modules on essential tools, security concepts, and threat awareness."
          />

          <Card variant="gradient" className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    Micro Courses
                  </span>
                  <CardTitle className="text-2xl">Skill Booster Modules</CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground">
                The Cyber Skill Boosters Micro Courses offer fast, high-impact modules
                on essential tools, security concepts, and threat awareness, allowing
                learners to quickly upskill and stay ahead in the ever-evolving
                cybersecurity landscape.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {microCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{course}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <GoogleReviews />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Choose your pathway and begin your cybersecurity journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/vault">View Certifications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
