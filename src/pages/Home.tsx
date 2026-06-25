import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroCyber from "@/assets/hero-cyber.jpg";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  Terminal,
  Bookmark,
  Shield,
  Target,
  GraduationCap,
  Building,
  Trophy,
  ServerCrash,
  BadgeAlert,
  FileCheck,
  Landmark,
  ShieldAlert,
  Fingerprint,
  Radio,
  Cloud,
  Building2,
  Factory,
  HeartPulse,
  ShoppingBag,
} from "lucide-react";


export default function ServicesPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="section-padding relative overflow-hidden min-h-[90vh] flex items-center">

  <div className="absolute inset-0 bg-hero-glow opacity-30" />
  <div className="absolute inset-0 grid-overlay opacity-20" />

  <div className="container-wide relative z-10">

    <div className="max-w-5xl mx-auto text-center">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
        <Shield className="h-4 w-4" />
        Cybersecurity Services • VAPT • Industry Training
      </div>

      <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Secure Your Business.
        <br />
        Build Your
        <span className="text-gradient"> Cybersecurity Career.</span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
        Protect applications, APIs, mobile apps, cloud infrastructure,
        and critical business assets while gaining practical skills
        required for modern cybersecurity roles.
      </p>

      {/* Trust Indicators */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {[
          "OWASP Based Testing",
          "Manual Validation",
          "Industry Experts",
          "Placement Support",
        ].map((item) => (
          <div
            key={item}
            className="px-4 py-2 rounded-full bg-card border border-border text-sm"
          >
            {item}
          </div>
        ))}

      </div>

      {/* CTA Cards */}

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        <Link to="/contact">
          <Card
            variant="htb"
            className="group cursor-pointer h-full hover:border-primary transition-all duration-300"
          >
            <CardContent className="p-8 text-left">

              <Shield className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Request Security Assessment
              </h3>

              <p className="text-muted-foreground mb-6">
                Identify vulnerabilities across web applications,
                mobile applications, APIs, cloud infrastructure,
                and enterprise environments.
              </p>

              <div className="flex items-center text-primary font-medium">
                Request Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>

            </CardContent>
          </Card>
        </Link>

        <Link to="/contact">
          <Card
            variant="htb"
            className="group cursor-pointer h-full hover:border-primary transition-all duration-300"
          >
            <CardContent className="p-8 text-left">

              <GraduationCap className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Explore Training Programs
              </h3>

              <p className="text-muted-foreground mb-6">
                Learn Linux, Networking, Web Security,
                Penetration Testing, and industry tools
                through practical hands-on labs.
              </p>

              <div className="flex items-center text-primary font-medium">
                Explore Training
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>

            </CardContent>
          </Card>
        </Link>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

        {[
          {
            value: "500+",
            label: "Assessments"
          },
          {
            value: "100+",
            label: "Organizations"
          },
          {
            value: "1000+",
            label: "Students"
          },
          {
            value: "50K+",
            label: "Findings"
          }
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card/50 border border-border rounded-xl p-5"
          >
            <div className="text-3xl font-bold text-primary">
              {stat.value}
            </div>

            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}

      </div>

    </div>

  </div>

</section>



<section className="section-padding relative overflow-hidden">
  <div className="absolute inset-0 bg-hero-glow opacity-10" />

  <div className="container-wide">

    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
        Threat Landscape
      </div>

      <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
        Why Cybersecurity Is
        <span className="text-gradient"> Business Critical</span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Modern organizations operate in an increasingly hostile digital
        environment where a single security weakness can lead to
        financial loss, operational disruption, regulatory penalties,
        and reputational damage.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Data Breaches */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
            <ShieldAlert className="h-7 w-7 text-red-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Data Breaches
          </h3>

          <p className="text-muted-foreground">
            Exposure of customer information, intellectual property,
            financial records, and sensitive business assets.
          </p>

        </CardContent>
      </Card>

      {/* Financial Impact */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
            <Landmark className="h-7 w-7 text-orange-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Financial Loss
          </h3>

          <p className="text-muted-foreground">
            Security incidents can result in ransom payments,
            legal expenses, downtime costs, and revenue loss.
          </p>

        </CardContent>
      </Card>

      {/* Compliance */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
            <FileCheck className="h-7 w-7 text-yellow-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Compliance Risks
          </h3>

          <p className="text-muted-foreground">
            Failure to meet regulatory and industry requirements
            can lead to audits, penalties, and legal action.
          </p>

        </CardContent>
      </Card>

      {/* Reputation */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
            <BadgeAlert className="h-7 w-7 text-purple-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Reputation Damage
          </h3>

          <p className="text-muted-foreground">
            Public security incidents can reduce customer trust
            and negatively affect brand reputation.
          </p>

        </CardContent>
      </Card>

      {/* Business Disruption */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
            <ServerCrash className="h-7 w-7 text-cyan-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Business Disruption
          </h3>

          <p className="text-muted-foreground">
            Ransomware and infrastructure attacks can halt
            operations and impact service delivery.
          </p>

        </CardContent>
      </Card>

      {/* Unauthorized Access */}
      <Card variant="htb" className="group overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />

        <CardContent className="p-8">

          <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
            <Fingerprint className="h-7 w-7 text-green-400" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Unauthorized Access
          </h3>

          <p className="text-muted-foreground">
            Attackers exploit vulnerabilities, weak credentials,
            and misconfigurations to gain access.
          </p>

        </CardContent>
      </Card>

    </div>
  </div>
</section>

<section className="section-padding bg-card/30 border-y border-border">
  <div className="container-wide">

    <div className="text-center mb-12">
      <h2 className="font-heading text-4xl font-bold mb-4">
        Two Ways We Create Impact
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        We help organizations improve security while helping individuals
        build successful cybersecurity careers.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <Card variant="htb">
        <CardContent className="p-8">

          <Shield className="h-10 w-10 text-primary mb-4" />

          <h3 className="text-3xl font-bold mb-4">
            Cybersecurity Services
          </h3>

          <ul className="space-y-3">
            <li>Vulnerability Assessment & Penetration Testing</li>
            <li>Application Security Assessment</li>
            <li>Mobile Application Assessment</li>
            <li>Source Code Review</li>
            <li>Red Team Assessment</li>
            <li>Security Architecture Review</li>
          </ul>

        </CardContent>
      </Card>

      <Card variant="htb">
        <CardContent className="p-8">

          <GraduationCap className="h-10 w-10 text-primary mb-4" />

          <h3 className="text-3xl font-bold mb-4">
            Industry-Oriented Training
          </h3>

          <ul className="space-y-3">
            <li>Linux </li>
            <li>Networking</li>
            <li>Application Security</li>
            <li>Penetration Testing</li>
            <li>SOC</li>
            <li>Audit & Compliance</li>
          </ul>

        </CardContent>
      </Card>

    </div>
  </div>
</section>

<section className="py-16 border-y border-border bg-card/20">
  <div className="container-wide">

    <div className="text-center mb-10">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
        Assessment Process
      </div>

      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
        Assessment Methodology
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        A structured approach combining automated analysis,
        expert validation, and actionable remediation guidance.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {[
        {
          step: "01",
          title: "Discover",
          desc: "Identify assets and attack surface"
        },
        {
          step: "02",
          title: "Assess",
          desc: "Detect vulnerabilities and risks"
        },
        {
          step: "03",
          title: "Validate",
          desc: "Perform manual security testing"
        },
        {
          step: "04",
          title: "Report",
          desc: "Deliver findings and remediation"
        }
      ].map((item) => (
        <Card
          key={item.step}
          variant="htb"
          className="group relative overflow-hidden hover:border-primary transition-all duration-300"
        >
          <CardContent className="p-5">

            <div className="flex items-center justify-between mb-4">

              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                {item.step}
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {item.desc}
            </p>

          </CardContent>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Card>
      ))}

    </div>

    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
        OWASP Based
      </span>

      <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
        PTES Methodology
      </span>

      <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
        Manual Validation
      </span>

      <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
        Executive Reporting
      </span>

    </div>

  </div>
</section>

<section className="py-16 border-y border-border bg-card/20">
  <div className="container-wide">

    <div className="text-center mb-10">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
        Career Roadmap
      </div>

      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
        Your Cybersecurity Learning Journey
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        A structured pathway designed to take you from cybersecurity fundamentals
        to real-world industry readiness.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {[
        {
          step: "01",
          title: "Foundation",
          skills: "Linux • Networking"
        },
        {
          step: "02",
          title: "Security",
          skills: "OWASP • VAPT"
        },
        {
          step: "03",
          title: "Hands-On",
          skills: "Labs • Projects"
        },
        {
          step: "04",
          title: "Career Ready",
          skills: "Interviews • Placement"
        }
      ].map((item) => (
        <Card
          key={item.step}
          variant="htb"
          className="group relative overflow-hidden hover:border-primary transition-all duration-300"
        >
          <CardContent className="p-5">

            <div className="text-primary text-sm font-mono mb-3">
              {item.step}
            </div>

            <h3 className="font-bold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {item.skills}
            </p>

          </CardContent>

          <div className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Card>
      ))}

    </div>

    <div className="text-center mt-8">
      <Link to="/contact">
        <Button variant="htb">
          Start Your Journey
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>

  </div>
</section>

<section className="py-16 bg-card/20 border-y border-border">
  <div className="container-wide">

    {/* Header */}
    <div className="text-center mb-10">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
        Industry Expertise
      </div>

      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
        Industries We Support
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Delivering cybersecurity assessments, security reviews, and
        training solutions across diverse industries.
      </p>
    </div>

    {/* Industries Grid */}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {[
        {
          icon: Building2,
          title: "Enterprise"
        },
        {
          icon: Landmark,
          title: "Banking & Finance"
        },
        {
          icon: HeartPulse,
          title: "Healthcare"
        },
        {
          icon: ShoppingBag,
          title: "E-Commerce"
        },
        {
          icon: GraduationCap,
          title: "Education"
        },
        {
          icon: Factory,
          title: "Manufacturing"
        },
        {
          icon: Cloud,
          title: "Technology"
        },
        {
          icon: Radio,
          title: "Telecom"
        },
      ].map((industry) => (
        <Card
          key={industry.title}
          variant="htb"
          className="group hover:border-primary transition-all duration-300"
        >
          <CardContent className="p-5">

            <industry.icon className="h-8 w-8 text-primary mb-4" />

            <h3 className="font-semibold text-sm md:text-base">
              {industry.title}
            </h3>

          </CardContent>
        </Card>
      ))}

    </div>

  </div>
</section>

<section className="section-padding">
  <div className="container-wide">

    <div className="text-center mb-12">
      <h2 className="font-heading text-4xl font-bold mb-4">
        What Our Clients & Students Say
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          quote:
            "The assessment identified critical security issues before production deployment.",
          role: "CTO",
          company: "Technology Company",
        },
        {
          quote:
            "The training was highly practical and helped me secure my first cybersecurity role.",
          role: "Cybersecurity Analyst",
          company: "Training Graduate",
        },
        {
          quote:
            "Clear reporting, professional communication, and actionable recommendations.",
          role: "IT Manager",
          company: "Enterprise Client",
        },
      ].map((item) => (
        <Card key={item.role} variant="htb">
          <CardContent className="p-6">

            <p className="text-muted-foreground mb-6">
              "{item.quote}"
            </p>

            <div>
              <h4 className="font-semibold">
                {item.role}
              </h4>

              <p className="text-sm text-muted-foreground">
                {item.company}
              </p>
            </div>

          </CardContent>
        </Card>
      ))}

    </div>
  </div>
</section>

<section className="section-padding bg-card/30 border-y border-border">
  <div className="container-wide">

    <div className="text-center mb-12">
      <h2 className="font-heading text-4xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {[
        {
          q: "How long does a VAPT assessment take?",
          a: "The duration depends on scope, complexity, and number of assets."
        },
        {
          q: "Do you provide retesting?",
          a: "Yes, we validate remediated findings through retesting."
        },
        {
          q: "Is the training beginner friendly?",
          a: "Yes. The training starts with fundamentals and progresses gradually."
        },
        {
          q: "Do you provide certificates?",
          a: "Yes, certificates are issued upon successful completion."
        },
        {
          q: "Do you provide placement support?",
          a: "Yes, interview preparation and career guidance are included."
        },
        {
          q: "Can assessments be customized?",
          a: "Yes, engagements are tailored based on business requirements."
        },
      ].map((item) => (
        <Card key={item.q} variant="htb">
          <CardContent className="p-6">

            <h3 className="font-semibold mb-3">
              {item.q}
            </h3>

            <p className="text-muted-foreground text-sm">
              {item.a}
            </p>

          </CardContent>
        </Card>
      ))}

    </div>
  </div>
</section>

<section className="section-padding">
  <div className="container-narrow">

    <Card variant="htb" className="overflow-hidden relative">

      <div className="absolute inset-0 bg-hero-glow opacity-30" />

      <CardContent className="p-10 md:p-14 text-center relative z-10">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
          Get Started
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Ready To Strengthen Your Security
          <br />
          Or Launch Your Cybersecurity Career?
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Whether you need a professional security assessment or practical
          cybersecurity training, our team is ready to help you achieve
          your goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Button variant="htb" size="lg">
            Request Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg">
            Explore Training
          </Button>

        </div>

      </CardContent>

    </Card>

  </div>
</section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <Card variant="htb" className="overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-glow opacity-30" />
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
                Newsletter
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get the latest cybersecurity insights, career tips, and course
                updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
                <Button variant="htb" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}