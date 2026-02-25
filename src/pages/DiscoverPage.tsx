import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founderPortrait from "@/assets/founder-portrait.jpg";
import GallerySection from "@/components/sections/GallerySection"
import ethicalHacking from "@/assets/ethical-hacking.jpg";
import {
  ArrowRight,
  Target,
  Eye,
  GraduationCap,
  Quote,
  Terminal,
  Users,
  Globe,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const missionPoints = [
  "Provide high-quality, hands-on cybersecurity training for students and working professionals.",
  "Upskill professionals with practical tools, techniques, and cyber intelligence expertise.",
  "Bridge the gap between theory and practice through real-world simulations and projects.",
  "Foster a community of lifelong learners committed to ethical cybersecurity practices.",
  "Enable career growth through certifications, mentorship, and industry-aligned courses.",
];

const timeline = [
  { year: "2023", title: "Academy Founded", description: "ASCI Academy launched with a vision to transform cybersecurity education" },
  { year: "2024", title: "500+ Students", description: "Reached milestone of training over 500 cybersecurity professionals" },
  { year: "2025", title: "Global Expansion", description: "Expanding reach to serve students across multiple countries" },
];

export default function DiscoverPage() {
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
              Discover ASCI
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The World Around <span className="text-gradient">ASCI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering the next generation of cyber defenders through expert-led training and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-6">
                About Us
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                About ASCI Academy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ASCI Academy is a premier online cybersecurity institute dedicated
                to empowering students and professionals to secure, protect, and
                defend digital environments. Through our structured ASCI Skill
                Pathways, we offer progressive learning from foundational courses
                to advanced programs, including specialized micro-courses and
                professional certification tracks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With expert instructors, flexible online delivery, and a
                career-focused curriculum, ASCI Academy equips learners with the
                knowledge and confidence to excel in the evolving world of
                cybersecurity.
              </p>
              <Button variant="htb" size="lg" asChild>
                <Link to="/skills" className="gap-2">
                  Explore Our Courses
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src={ethicalHacking}
                  alt="Ethical Hacking Training"
                  className="w-full aspect-video object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Trained Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <Card variant="htb" className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To ignite curiosity, empower minds, and cultivate a generation
                  of skilled cyber defenders and innovative thinkers who can
                  navigate, protect, and lead in a secure digital world. We aim
                  to foster a culture of continuous learning, ethical practice,
                  and technological excellence.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card variant="htb" className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-mono font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              <Sparkles className="h-3 w-3" />
              Our Journey
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Building the Future
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`} />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 ml-12 md:ml-0">
                  <Card variant="htb">
                    <CardContent className="p-6">
                      <span className="font-mono text-primary text-sm font-bold">{item.year}</span>
                      <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              Leadership
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Behind ASCI Academy
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card variant="htb" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8">
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                        Yashika Chandran
                      </h3>
                      <p className="text-primary font-mono text-sm">
                        Founder & CEO, ASCI Academy
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Yashika Chandran is a certified cybersecurity professional
                      and tech innovator dedicated to shaping the next generation
                      of digital defenders. Specializing in ethical hacking, VAPT,
                      and application security, she blends technical expertise
                      with a passion for teaching.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Driven by innovation and a mission to bridge the
                      cybersecurity skills gap, she motivates learners to turn
                      knowledge into action and emerge as confident guardians
                      of the digital landscape.
                    </p>

                    <div className="relative bg-muted/50 rounded-lg p-4 border border-border">
                      <Quote className="absolute top-3 left-3 h-4 w-4 text-primary/50" />
                      <p className="text-foreground italic text-sm pl-6">
                        "Transforming curiosity into skill, and learners into
                        digital defenders."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* CTA */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Start your cybersecurity journey with ASCI Academy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="htb" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/why">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}