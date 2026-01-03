import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Home", path: "/" },
    { name: "Discover ASCI", path: "/discover" },
    { name: "Why Choose Us", path: "/why" },
  ],
  programs: [
    { name: "Skill Pathways", path: "/skills" },
    { name: "Certifications", path: "/vault" },
    { name: "Blog", path: "/blog" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/contact" },
    { name: "Privacy Policy", path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-wider text-foreground">
                  ASCI
                </span>
                <span className="text-xs text-primary tracking-widest">
                  ACADEMY
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of cyber defenders through
              expert-led training, real-world skills, and industry-recognized
              certifications.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  info@asciacademy.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">+91 82209 24790</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Online Training Platform
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 ASCI Academy. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            <span className="text-primary">Secure.</span>{" "}
            <span className="text-accent">Protect.</span>{" "}
            <span className="text-foreground">Defend.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
