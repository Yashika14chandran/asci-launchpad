import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroCyber from "@/assets/hero-cyber.jpg";
import socOperations from "@/assets/soc-operations.jpg";
import {
  Shield,
  Target,
  Users,
  Award,
  ArrowRight,
  Zap,
  Lock,
  Eye,
  Code,
  Terminal,
  Server,
  Cpu,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Hands-on Labs",
    description: "Practice in real attack environments with guided exercises",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from certified professionals with industry experience",
  },
  {
    icon: Server,
    title: "Real Scenarios",
    description: "Train on simulations that mirror actual cyber threats",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn credentials recognized by top employers globally",
  },
];

const tracks = [
  {
    icon: Eye,
    name: "Cyber Explorer",
    level: "Beginner",
    modules: "5 Modules",
    description: "Build a strong foundation in cybersecurity fundamentals",
    difficulty: "beginner",
  },
  {
    icon: Shield,
    name: "Cyber Defender",
    level: "Intermediate",
    modules: "5 Modules",
    description: "Practical skills to protect systems and analyze threats",
    difficulty: "intermediate",
  },
  {
    icon: Code,
    name: "Cyber Sentinel",
    level: "Advanced",
    modules: "4 Modules",
    description: "Master offensive and defensive security strategies",
    difficulty: "advanced",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "15+", label: "Expert Courses" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "Lab Access" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCyber}
            alt="Cybersecurity"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hero-glow opacity-60" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-overlay opacity-30" />

        {/* Content */}
        <div className="relative z-10 container-wide text-center px-4 py-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Advanced Security & Cyber Intelligence Academy</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100 leading-tight">
            Your cybersecurity
            <br />
            <span className="text-gradient">journey starts here.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Develop your skills with guided training and prove your expertise
            with industry certifications. Become a market-ready cybersecurity
            professional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button variant="htb" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Start for Free
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="htb-ghost" size="xl" asChild>
              <Link to="/skills">Explore Paths</Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="htb"
                className="group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
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

      {/* Interview Confidence Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-6">
                <Zap className="h-3 w-3" />
                Free Resource
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Interview & Communication Confidence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Overcome fear of English communication and live technical tasks
                with free mock interviews and technical rounds. Practice
                real-world scenarios, screen-sharing, and hands-on assessments in
                a safe, supportive environment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-world technical round simulations",
                  "Personalized feedback from experts",
                  "Screen-sharing practice sessions",
                  "Build confidence for any interview",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="htb-outline" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Book Your Free Mock Interview
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-border">
                <img
                  src={socOperations}
                  alt="SOC Operations Training"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xl font-bold text-primary">100%</p>
                    <p className="text-xs text-muted-foreground">Free Sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Tracks Section */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              Learning Paths
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              ASCI Skill Pathways
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Progressive learning tracks designed to take you from beginner to
              advanced cybersecurity professional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card
                key={index}
                variant="htb"
                className="group overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <track.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className={`difficulty-badge difficulty-${track.difficulty}`}>
                      {track.level}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {track.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {track.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs font-mono text-muted-foreground">
                      {track.modules}
                    </span>
                    <Link
                      to="/skills"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all duration-300"
                    >
                      View Path
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/skills" className="gap-2">
                Explore All Pathways
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="container-narrow relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-6">
            <Terminal className="h-3 w-3" />
            Start Today
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to become a
            <br />
            <span className="text-gradient">cybersecurity professional?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join ASCI Academy and start your journey toward a secure and
            successful cyber career.
          </p>
          <Button variant="glow" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}