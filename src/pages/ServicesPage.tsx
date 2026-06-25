import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield,
  Smartphone,
  Globe,
  Database,
  Wifi,
  Cpu,
  Factory,  
  Users,
  Building,
  Search,
  Crosshair,
  CheckCircle,
  ArrowRight,
  Terminal,
  Lock,
} from "lucide-react";

const services = [
  {
    title: "Vulnerability Assessment & Penetration Testing",
    icon: Shield,
    description: "Identify vulnerabilities before attackers exploit them.",
    features: ["Web Applications", "API Security", "Network Security", "Cloud Infrastructure"],
  },
  {
    title: "Red Team Assessment",
    icon: Crosshair,
    description: "Simulate real-world cyber attacks against your organization.",
    features: ["Adversary Simulation", "Attack Path Analysis", "Detection Testing", "Response Validation"],
  },
  {
    title: "Threat Modeling",
    icon: Search,
    description: "Identify threats and risks during design and development.",
    features: ["Risk Analysis", "Attack Surface Mapping", "Data Flow Review", "Mitigation Planning"],
  },
  {
    title: "Web Application Security Assessment",
    icon: Globe,
    description: "Comprehensive web application security testing.",
    features: ["OWASP Top 10", "Business Logic Testing", "Authentication Review", "Authorization Testing"],
  },
  {
    title: "Mobile Application Security Assessment",
    icon: Smartphone,
    description: "Security testing for Android and iOS applications.",
    features: ["Android Testing", "iOS Testing", "API Validation", "Data Storage Review"],
  },
  {
    title: "API Security Assessment",
    icon: Database,
    description: "Protect REST, GraphQL, and SOAP APIs.",
    features: ["OWASP API Top 10", "Token Testing", "Authorization Review", "Rate Limit Validation"],
  },
  {
    title: "Source Code Review",
    icon: Terminal,
    description: "Manual and automated secure code review.",
    features: ["SAST Analysis", "Secure Coding Review", "Secret Detection", "Remediation Guidance"],
  },
  {
    title: "IoT Security Assessment",
    icon: Cpu,
    description: "Evaluate connected devices and embedded systems.",
    features: ["Firmware Analysis", "Hardware Review", "Communication Testing", "Cloud Integration Review"],
  },
  {
    title: "SCADA / ICS Security Assessment",
    icon: Factory,
    description: "Industrial control system security testing.",
    features: ["PLC Assessment", "ICS Security Review", "Protocol Analysis", "Network Segmentation"],
  },
  {
    title: "Wireless Security Assessment",
    icon: Wifi,
    description: "Assess wireless networks and infrastructure.",
    features: ["WPA2/WPA3 Testing", "Rogue AP Detection", "Wireless Pentesting", "Configuration Review"],
  },
  {
    title: "Social Engineering Assessment",
    icon: Users,
    description: "Measure human security awareness and resilience.",
    features: ["Phishing Simulation", "Awareness Testing", "Physical Security Testing", "Reporting"],
  },
  {
    title: "Security Architecture Review",
    icon: Building,
    description: "Review security controls and architecture design.",
    features: ["Architecture Analysis", "Trust Boundaries", "Control Validation", "Security Roadmap"],
  },
];

const methodology = [
  "Scoping",
  "Information Gathering",
  "Security Testing",
  "Validation",
  "Reporting",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container-wide relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <Shield className="h-3 w-3" />
            Cyber Security Services
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Protect Your Business With
            <span className="text-gradient"> Expert Security Assessments</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity testing, consulting, and validation services
            designed to identify vulnerabilities and strengthen your security posture.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact">
  <Button variant="htb" size="lg">
    Request Assessment
  </Button>
</Link>

<Link to="/contact">
  <Button variant="outline" size="lg">
    Schedule Consultation
  </Button>
</Link>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border bg-card/30">
        <div className="container-wide grid md:grid-cols-4 gap-6 text-center">
          <div><h3 className="text-4xl font-bold text-primary">500+</h3><p>Assessments</p></div>
          <div><h3 className="text-4xl font-bold text-primary">100+</h3><p>Clients</p></div>
          <div><h3 className="text-4xl font-bold text-primary">50K+</h3><p>Issues Identified</p></div>
          <div><h3 className="text-4xl font-bold text-primary">24/7</h3><p>Support</p></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-standard security assessments tailored to your environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card key={index} variant="htb" className="group hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold">Assessment Methodology</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((step, index) => (
              <Card key={index} variant="htb">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="font-semibold">{step}</h3>
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
                <Lock className="h-3 w-3" />
                Get Started
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Secure Your Organization?
              </h2>

              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Speak with our cybersecurity experts and receive a customized
                security assessment proposal tailored to your business.
              </p>

              <Button variant="htb" size="lg">
                Request a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
