import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Terminal,
  HelpCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@ascizen.in",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 82209 24790",
    description: "Mon-Fri, 9am-6pm IST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Online Training Platform",
    description: "Learn from anywhere",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "We respond promptly",
  },
];

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer beginner to advanced cybersecurity courses including ethical hacking, SOC operations, cloud security, VAPT, and more. Our curriculum is structured into Cyber Explorer (Beginner), Cyber Defender (Intermediate), Cyber Sentinel (Advanced), and Micro Course tracks.",
  },
  {
    question: "Are the courses online?",
    answer: "Yes! All our courses are delivered online, allowing you to learn from anywhere at your own pace. We provide flexible scheduling to accommodate students and working professionals.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, you'll receive industry-recognized certifications upon completing each course or pathway. Our certificates include Cyber Explorer Level, Cyber Defender Level, Cyber Sentinel Level, and Cyber Skill Booster Badges.",
  },
  {
    question: "Is there career support?",
    answer: "Absolutely! We provide comprehensive career support including resume building, mock interviews, technical round preparation, mentorship sessions, and internship assistance to help you launch your cybersecurity career.",
  },
  {
    question: "What is the course duration?",
    answer: "Course duration varies depending on the track. Our comprehensive pathways typically range from 4-12 weeks, while micro courses can be completed in 1-2 weeks. All courses are self-paced.",
  },
  {
    question: "Do you offer free resources?",
    answer: "Yes! We offer free mock interviews, technical round practice sessions, and interview confidence programs. These help you prepare for real-world cybersecurity job interviews.",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with ASCI Academy to start your cybersecurity
              journey. We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Ready to begin your cybersecurity career? Reach out to us
                through any of the following channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                      <p className="text-primary font-mono text-sm">{item.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Interview CTA */}
              <Card variant="neon" className="mt-6">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Free Mock Interview
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Practice your interview skills with our free mock interview
                    sessions. Build confidence for technical rounds!
                  </p>
                  <Button variant="htb-outline" className="w-full" size="sm">
                    Book Your Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card variant="htb">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Send Us a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject <span className="text-primary">*</span>
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Course Inquiry"
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                        className="bg-muted/50 border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      variant="htb"
                      size="lg"
                      type="submit"
                      className="w-full gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-4">
              <HelpCircle className="h-3 w-3" />
              FAQ
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? Check out our FAQ or reach out directly!
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}