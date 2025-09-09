import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

// Sample blog data
const sampleBlogs = [
  {
    id: 1,
    title: "Building Scalable Backend Services at Amazon",
    description:
      "A deep dive into the challenges and solutions for building reliable, scalable backend services that handle millions of requests daily.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    author: "Eshwar Nag Pilli",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Backend Development",
    content: `
# Building Scalable Backend Services at Amazon

As a Software Development Engineer II at Amazon, I've had the privilege of working on systems that handle millions of requests daily. In this blog post, I'll share some insights about building scalable backend services that can withstand the demands of a global e-commerce platform.

## The Challenge

When you're dealing with Amazon-scale traffic, traditional approaches to backend development simply don't work. We need systems that can:

- Handle millions of concurrent users
- Maintain sub-100ms response times
- Scale automatically based on demand
- Provide 99.99% uptime
- Handle data consistency across distributed systems

## Key Principles

### 1. Microservices Architecture

Breaking down monolithic applications into smaller, focused services has been crucial. Each service has a single responsibility and can be developed, deployed, and scaled independently.

### 2. Event-Driven Design

Using event-driven architecture allows us to decouple services and build more resilient systems. When one service fails, others can continue operating.

### 3. Database Optimization

We use a combination of relational and NoSQL databases, each optimized for specific use cases. Caching strategies and read replicas help distribute the load.

### 4. Monitoring and Observability

Comprehensive monitoring is essential. We track everything from response times to error rates, allowing us to identify and resolve issues before they impact customers.

## Lessons Learned

The most important lesson I've learned is that scalability isn't just about technology—it's about people and processes. Building a culture of continuous improvement and learning from failures is just as important as choosing the right technology stack.

## Conclusion

Building scalable backend services is an ongoing journey. The technologies and patterns that work today might not work tomorrow as we continue to grow and evolve. The key is to stay curious, keep learning, and always be prepared to adapt.

*What challenges have you faced in building scalable systems? I'd love to hear your experiences in the comments below.*
    `,
  },
  {
    id: 2,
    title: "The Art of Distributed Systems Design",
    description:
      "Exploring the fundamental concepts and patterns that make distributed systems reliable, consistent, and performant in real-world scenarios.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
    author: "Eshwar Nag Pilli",
    date: "December 10, 2024",
    readTime: "12 min read",
    category: "System Design",
    content: `
# The Art of Distributed Systems Design

Distributed systems are the backbone of modern applications. From social media platforms to e-commerce websites, understanding how to design and implement distributed systems is crucial for any software engineer.

## What Makes a Good Distributed System?

A well-designed distributed system should be:

- **Reliable**: Continues to function even when individual components fail
- **Scalable**: Can handle increased load by adding more resources
- **Consistent**: Maintains data integrity across all nodes
- **Available**: Remains accessible to users most of the time

## Common Patterns and Solutions

### 1. Load Balancing

Distributing incoming requests across multiple servers ensures no single server becomes overwhelmed.

### 2. Caching

Implementing intelligent caching strategies can dramatically improve performance and reduce database load.

### 3. Database Sharding

Splitting data across multiple databases allows for horizontal scaling and improved performance.

### 4. Circuit Breakers

Preventing cascading failures by implementing circuit breaker patterns that isolate failing services.

## Real-World Applications

In my experience at Amazon, these patterns are not just theoretical concepts—they're essential tools for building systems that can handle the scale and complexity of modern applications.

The key is to start simple and gradually introduce complexity as your system grows. Premature optimization can lead to unnecessary complexity, while ignoring scalability concerns can lead to system failures under load.

*Building distributed systems is both an art and a science. What patterns have you found most effective in your projects?*
    `,
  },
  {
    id: 3,
    title: "Startup Lessons: From Idea to MVP",
    description:
      "Sharing insights from building side projects and the journey from initial concept to minimum viable product in the startup world.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
    author: "Eshwar Nag Pilli",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Startups",
    content: `
# Startup Lessons: From Idea to MVP

As someone who's startup-curious and enjoys building side projects, I've learned valuable lessons about taking an idea from concept to minimum viable product (MVP). Here's what I've discovered along the way.

## The 0.1% Philosophy

My personal goal is simple: make something that improves life by even 0.1%, then keep compounding. This philosophy has guided my approach to building products and features.

## Key Lessons

### 1. Start Small, Think Big

The best MVPs solve one specific problem really well. Don't try to build everything at once—focus on the core value proposition.

### 2. User Feedback is Gold

Early user feedback is invaluable. Build something quickly, get it in front of users, and iterate based on their needs.

### 3. Technical Debt is Inevitable

When building an MVP, some technical debt is acceptable. The key is to recognize it and plan for refactoring as you grow.

### 4. Simple Designs Win

Complexity is the enemy of adoption. Simple, intuitive designs often outperform feature-rich but complicated solutions.

## The Validation Process

Before building anything, I ask myself:

- Does this solve a real problem?
- Would I use this myself?
- Is there a simpler way to solve this?
- What's the smallest version that provides value?

## Building in Public

I've found that sharing the journey—the successes and failures—helps build a community around your product and provides valuable feedback.

## Conclusion

Building an MVP is about learning, not perfection. Each iteration teaches you something new about your users and your market. The goal isn't to build the perfect product—it's to build something that provides value and can evolve based on real user needs.

*What's the most important lesson you've learned while building products? I'd love to hear your experiences.*
    `,
  },
];

export default function Blogs() {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4, mt: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Blog
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Thoughts on software engineering, distributed systems, and building
          products that matter
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ px: { xs: 1, sm: 2 } }}
      >
        {sampleBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                },
              }}
              onClick={() => handleBlogClick(blog)}
            >
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                  label={blog.category}
                  size="small"
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(102, 126, 234, 0.1)",
                    color: "#667eea",
                    fontWeight: 500,
                  }}
                />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    fontWeight: 600,
                    mb: 2,
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: "auto",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AccessTimeIcon
                      sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {blog.readTime}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
