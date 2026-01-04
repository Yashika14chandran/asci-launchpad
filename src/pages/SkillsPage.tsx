import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleReviews from "@/components/shared/GoogleReviews";
import ethicalHacking from "@/assets/ethical-hacking.jpg";
import socOperations from "@/assets/soc-operations.jpg";
import {
  ArrowRight,
  Eye,
  Shield,
  Code,
  Zap,
  BookOpen,
  Terminal,
  Clock,
  Users,
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
  difficulty: "beginner" | "intermediate" | "advanced";
  image?: string;
}

function TrackCard({ icon: Icon, level, name, description, courses, difficulty, image }: TrackCardProps) {
  return (
    <Card variant="htb" className="overflow-hidden">
      {/* Image Header */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className={`difficulty-badge difficulty-${difficulty}`}>
              {level}
            </span>
          </div>
        </div>
      )}
      
      <CardHeader className={image ? "pt-4" : "pb-4"}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            {!image && (
              <span className={`difficulty-badge difficulty-${difficulty} mb-2`}>
                {level}
              </span>
            )}
            <CardTitle className="text-xl">{name}</CardTitle>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{courses.length} Modules</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Self-paced</span>
          </div>
        </div>
        
        <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Courses Included:</h4>
        <ul className="space-y-2 mb-6">
          {courses.map((course, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        
        <div className="container-wide relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              <Terminal className="h-3 w-3" />
              Learning Paths
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ASCI <span className="text-gradient">Skill Pathways</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progressive learning tracks designed to take you from curious beginner to
              industry-ready cybersecurity professional.
            </p>
          </div>
        </div>
      </section>

      {/* Path Overview */}
      <section className="py-10 bg-card/50 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Beginner", color: "primary", count: "5 Courses" },
              { label: "Intermediate", color: "accent", count: "5 Courses" },
              { label: "Advanced", color: "destructive", count: "4 Courses" },
              { label: "Micro Courses", color: "accent", count: "9 Modules" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className={`difficulty-badge difficulty-${item.label.toLowerCase()}`}>
                  {item.label}
                </span>
                <span className="text-muted-foreground text-sm font-mono">{item.count}</span>
              </div>
            ))}
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
            difficulty="beginner"
            image={ethicalHacking}
          />
        </div>
      </section>

      {/* Intermediate Track */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <TrackCard
            icon={Shield}
            level="Intermediate"
            name="Cyber Defender Track"
            description="The Cyber Defender Track equips learners with practical skills to protect systems, secure applications, and analyze real-world threats, turning knowledge into actionable defense capabilities."
            courses={intermediateCourses}
            difficulty="intermediate"
            image={socOperations}
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
            difficulty="advanced"
          />
        </div>
      </section>

      {/* Micro Courses */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-4">
              <Zap className="h-3 w-3" />
              Quick Skills
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cyber Skill Boosters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fast, high-impact modules on essential tools, security concepts, and threat awareness.
            </p>
          </div>

          <Card variant="htb" className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="difficulty-badge difficulty-intermediate mb-2">
                    Micro Courses
                  </span>
                  <CardTitle className="text-xl">Skill Booster Modules</CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                The Cyber Skill Boosters Micro Courses offer fast, high-impact modules
                on essential tools, security concepts, and threat awareness.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {microCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-all duration-300 group"
                  >
                    <Zap className="h-4 w-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Choose your pathway and begin your cybersecurity journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="htb" size="xl" asChild>
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