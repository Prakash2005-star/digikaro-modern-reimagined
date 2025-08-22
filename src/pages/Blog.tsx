import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "THE FUTURE OF SOCIAL MEDIA MARKETING: AI-POWERED STRATEGIES",
    excerpt: "Discover how artificial intelligence is revolutionizing social media marketing and learn the strategies that will give your brand a competitive edge in 2024 and beyond.",
    author: "ALEX RODRIGUEZ",
    date: "MARCH 15, 2024",
    readTime: "8 MIN READ",
    category: "DIGITAL MARKETING",
    image: "featured-post"
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 CONTENT CREATION TIPS THAT WILL MAKE YOUR BRAND GO VIRAL",
      excerpt: "Learn the secrets behind viral content and discover proven strategies to create engaging posts that capture attention and drive massive engagement.",
      author: "SARAH CHEN",
      date: "MARCH 12, 2024",
      readTime: "6 MIN READ",
      category: "CONTENT STRATEGY"
    },
    {
      id: 3,
      title: "BRAND STORYTELLING: HOW TO CREATE EMOTIONAL CONNECTIONS",
      excerpt: "Master the art of brand storytelling and learn how to create authentic narratives that resonate with your audience and build lasting relationships.",
      author: "MICHAEL JOHNSON",
      date: "MARCH 10, 2024",
      readTime: "7 MIN READ",
      category: "BRAND STRATEGY"
    },
    {
      id: 4,
      title: "SOCIAL MEDIA ANALYTICS: MEASURING SUCCESS BEYOND VANITY METRICS",
      excerpt: "Dive deep into the metrics that truly matter and learn how to measure ROI, engagement quality, and business impact from your social media efforts.",
      author: "EMMA DAVIS",
      date: "MARCH 8, 2024",
      readTime: "9 MIN READ",
      category: "ANALYTICS"
    },
    {
      id: 5,
      title: "THE RISE OF SHORT-FORM VIDEO: MAXIMIZING IMPACT IN SECONDS",
      excerpt: "Explore the explosive growth of short-form video content and discover techniques to create compelling videos that stop the scroll and drive action.",
      author: "ALEX RODRIGUEZ",
      date: "MARCH 5, 2024",
      readTime: "5 MIN READ",
      category: "VIDEO MARKETING"
    },
    {
      id: 6,
      title: "BUILDING AUTHENTIC COMMUNITIES: FROM FOLLOWERS TO BRAND ADVOCATES",
      excerpt: "Transform your social media followers into a thriving community of brand advocates with proven community-building strategies and engagement techniques.",
      author: "SARAH CHEN",
      date: "MARCH 3, 2024",
      readTime: "8 MIN READ",
      category: "COMMUNITY BUILDING"
    },
    {
      id: 7,
      title: "INFLUENCER MARKETING IN 2024: MICRO VS MACRO INFLUENCERS",
      excerpt: "Navigate the evolving influencer landscape and learn how to choose between micro and macro influencers for maximum impact and ROI.",
      author: "MICHAEL JOHNSON",
      date: "MARCH 1, 2024",
      readTime: "6 MIN READ",
      category: "INFLUENCER MARKETING"
    },
  ];

  const categories = ["ALL POSTS", "DIGITAL MARKETING", "CONTENT STRATEGY", "BRAND STRATEGY", "ANALYTICS", "VIDEO MARKETING", "COMMUNITY BUILDING", "INFLUENCER MARKETING"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in">
            OUR BLOG
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Stay ahead of the curve with insights, strategies, and trends from the world of digital marketing. 
            Our expert team shares actionable tips to help your brand succeed.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  category === "ALL POSTS"
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "glass-card border-white/20 text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gradient mb-4">FEATURED ARTICLE</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 max-w-4xl mx-auto animate-slide-up">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Featured Image */}
                <div className="bg-gradient-card h-64 lg:h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">AI</span>
                    </div>
                    <p className="text-muted-foreground">FEATURED ARTICLE</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="inline-flex items-center space-x-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold">
                      <Tag className="w-3 h-3" />
                      <span>{featuredPost.category}</span>
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gradient mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gradient">{featuredPost.author}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-6 py-2 rounded-full group">
                      READ MORE
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gradient-hero mb-4">LATEST ARTICLES</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover actionable insights and expert strategies to grow your brand in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 group animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold">
                      <Tag className="w-3 h-3" />
                      <span>{post.category}</span>
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Post Image Placeholder */}
                  <div className="bg-gradient-card h-48 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">{post.id}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">ARTICLE IMAGE</p>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gradient mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gradient">{post.author}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-4 py-2 rounded-full group"
                      variant="outline"
                    >
                      READ
                      <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16 animate-fade-in">
            <Button 
              size="lg"
              className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-8 py-4 rounded-full"
              variant="outline"
            >
              LOAD MORE ARTICLES
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="glass-card border-white/10 p-12 max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-gradient mb-4">
                NEVER MISS AN UPDATE
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 glass-card border-white/20 bg-transparent px-6 py-4 rounded-full focus:border-primary focus:outline-none"
                />
                <Button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full">
                  SUBSCRIBE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;