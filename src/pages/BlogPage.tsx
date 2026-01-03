import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cyber <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, updates, and expert perspectives on cybersecurity trends,
              tools, threats, and career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
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
            <Card variant="gradient" className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase mb-4">
                        Featured
                      </span>
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-card/50 flex items-center justify-center">
                        <Tag className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Clock className="h-4 w-4" />
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
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
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
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <SectionHeading
            tag="Latest Posts"
            title="Recent Articles"
            subtitle="Stay updated with the latest in cybersecurity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                variant="glow"
                className="group overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <Tag className="h-12 w-12 text-muted-foreground/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <Card variant="gradient" className="overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get the latest cybersecurity insights, career tips, and course
                updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" size="lg">
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
