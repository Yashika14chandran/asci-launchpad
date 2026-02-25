import { Link } from "react-router-dom";
import { Terminal, Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github, Instagram } from "lucide-react";
import logo from 'public/logo.png';

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
    <footer className="bg-card border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
         
 {/* Logo Container */}
<Link to="/" className="flex items-center gap-4 mb-8 group">
  {/* w-20 h-20 = 80px square container */}
  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="/public/logo.png" 
      alt="ASCIZEN Logo" 
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
    />
  </div>

  <div className="flex flex-col">
    <span className="font-heading font-bold text-2xl tracking-wider text-foreground">
      ASCIZEN
    </span>
    {/* Optional: Add a small tagline here if your footer has one */}
  </div>
</Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of cyber defenders through
              expert-led training, real-world skills, and industry-recognized
              certifications.
            </p>
            <div className="flex gap-3">
              {[
               { icon: Linkedin, href: "https://www.linkedin.com/company/ascizen" },
  { icon: Instagram, href: "https://www.instagram.com/ascizen" }, // Added Instagram
  { icon: Twitter, href: "https://twitter.com/ascizen" },
  { icon: Youtube, href: "https://www.youtube.com/@ascizen" },
  { icon: Github, href: "https://github.com/ascizen" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  contact@ascizen.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 82209 24790</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Online Training Platform
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 ASCI Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-mono text-primary">$</span>
            <span className="text-muted-foreground">Secure</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">Protect</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">Defend</span>
          </div>
        </div>
      </div>
    </footer>
  );
}