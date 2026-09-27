import { dpayScreens } from "../images/dpay";

// Blog posts, newest first. Shared by the blog list and the post page so posts
// can be opened directly by URL (/blog/:id), not only by clicking a card.
export const blogPosts = [
  {
    id: 4,
    title: "Doctor Payouts Without the Spreadsheets",
    description:
      "How DPay calculates every fee split, pays doctors on time, and shows hospitals exactly where the money goes.",
    image: dpayScreens.moneyFlow.src,
    author: "Eshwar Nag Pilli",
    date: "September 27, 2026",
    readTime: "3 min read",
    category: "Product",
    content: `
Every patient visit sets off a small chain of money: a consultant fee, maybe a referral doctor's cut, the hospital's share, TDS. Multiply that by hundreds of visits a month and doctor payouts turn into spreadsheets, disputes, and calls asking "has my payment gone through yet?"

I built DPay to take that work off hospitals' hands. It's a doctor billing and payout platform for single hospitals and multi-hospital groups. Here's what it does, day to day.

## Fees calculate themselves

When the front desk logs a visit, DPay works out the consultant's fee and every referral doctor's cut on the spot. Flat fee, percentage, or a custom arrangement: the right rule is applied every time, so nobody has to remember the exceptions.

## Every rupee is accounted for

Each visit gets a line-by-line breakdown of the hospital fee, doctor cuts, referral cuts, and TDS. Finance and doctors see the same numbers, worked out the same way, which ends most payout disputes before they start.

![${dpayScreens.feeComposition.caption}](${dpayScreens.feeComposition.src})

## Invoices and receipts go out on their own

An approved visit becomes an itemized, ready-to-send invoice automatically. No one drafts invoices by hand or formats them in Excel again.

Doctors get their payment receipt on WhatsApp as soon as a payout is processed. No printed statements, no missed emails, and far fewer calls to the billing desk.

## Payouts that can't go out twice

Payments go straight to a doctor's bank account from DPay, with safeguards that stop the same payout from being sent twice, even if someone clicks "Pay" more than once.

## Built for hospital groups

Each hospital's patients, doctors, and payments are kept separate, so staff at one facility can't see or change another's. Group admins still manage every hospital from one place.

Access follows the role, too. The front desk gets a simple screen for logging visits; admins see billing, payments, and analytics. Nobody sees more than they need.

## Live analytics, not month-end reports

Leadership gets a dashboard that stays current, showing:

- Patient visit trends over time
- Revenue, and how it splits between the hospital and its doctors
- Which specialities drive the most visits and revenue
- Daily and monthly revenue and payout patterns

No more waiting for accounts to pull together a report at the end of the month.

![${dpayScreens.trends.caption}](${dpayScreens.trends.src})

![${dpayScreens.volumeMix.caption}](${dpayScreens.volumeMix.src})

## An audit trail for every change

Who created a visit, who changed a fee, who approved a payment, and when: DPay records all of it automatically. When a doctor questions a payout, or an auditor asks six months later, the answer is a search away instead of a scramble through old files.

## Less retyping

For hospitals on a compatible hospital information system (HIS), DPay can pull in visit details automatically, so staff don't retype them. Less typing means fewer typos, fewer missed fields, and faster billing.

## Why it matters

None of this is technology for its own sake. It gives hospitals back the time and trust that manual billing eats up:

- **Speed:** visits are billed and doctors are paid without waiting on manual steps.
- **Accuracy:** every fee is calculated by the same rules, every time.
- **Trust:** doctors see transparent numbers, backed by a complete record.
- **Visibility:** leadership sees where revenue comes from and where it goes.

The goal is for billing to fade into the background, so your staff can spend their time on patients instead of paperwork.

*Want to see how DPay would work at your hospital? [Book a 30-minute walkthrough](https://cal.com/eshwarpilli/30min) or visit [dpayhealth.com](https://dpayhealth.com/).*
    `,
  },
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
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
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
