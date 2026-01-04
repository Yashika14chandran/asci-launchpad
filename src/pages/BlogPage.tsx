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
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Cybersecurity Trends to Watch in 2025",
    excerpt:
      "Explore the latest cybersecurity trends shaping the industry and learn how to stay ahead of emerging threats.",
    author: "Yashika Chandran",
    date: "December 28, 2024",
    readTime: "5 min read",
    category: "Trends",
    featured: true,
  },
  {
    id: 2,
    title: "Getting Started with Ethical Hacking: A Beginner's Guide",
    excerpt:
      "Everything you need to know to begin your journey in ethical hacking and penetration testing.",
    author: "ASCI Team",
    date: "December 20, 2024",
    readTime: "8 min read",
    category: "Career",
  },
  {
    id: 3,
    title: "Understanding OWASP Top 10: Critical Web Application Vulnerabilities",
    excerpt:
      "A comprehensive breakdown of the most critical web application security risks and how to mitigate them.",
    author: "ASCI Team",
    date: "December 15, 2024",
    readTime: "10 min read",
    category: "Technical",
  },
  {
    id: 4,
    title: "Building a Career in SOC Operations: What You Need to Know",
    excerpt:
      "Discover the skills, certifications, and pathways to becoming a Security Operations Center analyst.",
    author: "Yashika Chandran",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Career",
  },
  {
    id: 5,
    title: "Cloud Security Best Practices for 2025",
    excerpt:
      "Essential strategies to secure your cloud infrastructure against evolving threats.",
    author: "ASCI Team",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Technical",
  },
  {
    id: 6,
    title: "The Rise of AI in Cybersecurity: Opportunities and Challenges",
    excerpt:
      "How artificial intelligence is transforming threat detection, response, and the future of cyber defense.",
    author: "Yashika Chandran",
    date: "November 30, 2024",
    readTime: "9 min read",
    category: "Trends",
  },
];

const categories = ["All", "Trends", "Career", "Technical", "Tools"];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              Blog
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cyber <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, updates, and expert perspectives on cybersecurity trends,
              tools, threats, and career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-card/50 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding">
          <div className="container-wide">
            <Card variant="htb" className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={heroCyber}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-mono uppercase">
                        <Bookmark className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
                        {featuredPost.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium text-sm">
                            {featuredPost.author}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>

                      <Button variant="ghost" size="sm" className="gap-1">
                        Read More
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider mb-4">
              Latest Posts
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Recent Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                variant="htb"
                className="group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Placeholder Image */}
                  <div className="h-40 bg-gradient-to-br from-muted to-card flex items-center justify-center relative overflow-hidden">
                    <Tag className="h-10 w-10 text-muted-foreground/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
                          <User className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
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