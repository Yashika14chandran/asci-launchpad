import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import founderPortrait from "@/assets/founder-portrait.jpg";
import ethicalHacking from "@/assets/ethical-hacking.jpg";
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Award,
  Lightbulb,
  GraduationCap,
  Globe,
  Shield,
  Quote,
} from "lucide-react";

const missionPoints = [
  "Provide high-quality, hands-on cybersecurity training for students and working professionals.",
  "Upskill professionals with practical tools, techniques, and cyber intelligence expertise.",
  "Bridge the gap between theory and practice through real-world simulations and projects.",
  "Foster a community of lifelong learners committed to ethical cybersecurity practices.",
  "Enable career growth through certifications, mentorship, and industry-aligned courses.",
];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Discover ASCI
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The World Around <span className="text-gradient">ASCI</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tag="About Us"
                title="About ASCI Academy"
                centered={false}
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ASCI Academy is a premier online cybersecurity institute dedicated
                to empowering students and professionals to secure, protect, and
                defend digital environments. Through our structured ASCI Skill
                Pathways, we offer progressive learning from foundational courses
                to advanced programs, including specialized micro-courses and
                professional certification tracks.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With expert instructors, flexible online delivery, and a
                career-focused curriculum, ASCI Academy equips learners with the
                knowledge and confidence to excel in the evolving world of
                cybersecurity. Join us today and take your first step toward
                becoming a proficient and industry-ready cybersecurity expert.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/skills" className="gap-2">
                  Explore Our Courses
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={ethicalHacking}
                alt="Ethical Hacking Training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Trained Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card variant="gradient" className="overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To ignite curiosity, empower minds, and cultivate a generation
                  of skilled cyber defenders and innovative thinkers who can
                  navigate, protect, and lead in a secure digital world. We aim
                  to foster a culture of continuous learning, ethical practice,
                  and technological excellence, shaping leaders ready to tackle
                  the challenges of tomorrow's cybersecurity landscape.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card variant="gradient" className="overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Leadership"
            title="Behind ASCI Academy"
            subtitle="Meet the visionary driving our mission to create the next generation of cyber defenders."
          />

          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative">
                    <img
                      src={founderPortrait}
                      alt="Yashika Chandran - Founder & CEO"
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                        Yashika Chandran
                      </h3>
                      <p className="text-primary font-medium">
                        Founder & CEO, ASCI Academy
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Yashika Chandran is a certified cybersecurity professional
                      and tech innovator dedicated to shaping the next generation
                      of digital defenders. Specializing in ethical hacking, VAPT,
                      and application security, she blends technical expertise
                      with a passion for teaching, inspiring students and
                      professionals to explore, learn, and excel in the cyber
                      world.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Driven by innovation and a mission to bridge the
                      cybersecurity skills gap, she motivates learners to turn
                      knowledge into action, build mastery, and emerge as
                      confident guardians of the digital landscape.
                    </p>

                    <div className="relative bg-card/50 rounded-xl p-6 border border-border/50">
                      <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/30" />
                      <p className="text-foreground italic text-lg pl-6">
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

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Start your cybersecurity journey with ASCI Academy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
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
