import { dpayScreens } from "../images/dpay";

// "Doctor Payouts Without the Spreadsheets" -> "doctor-payouts-without-the-spreadsheets"
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Blog posts, newest first. Shared by the blog list and the post page so posts
// can be opened directly by URL. Each post's URL is /blog/<slug of its title>;
// renaming a post changes its URL, but /blog/<id> links always redirect.
const posts = [
  {
    id: 5,
    title: "How Lime Is Using AI to Turn Scooters and E-Bikes Into an Intelligent Transportation Network",
    description:
      "AI is the decision layer connecting Lime's riders, vehicles, operations teams, and cities \u2014 from demand forecasting and fleet repositioning to on-vehicle computer vision.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lime%20scooters.jpg?width=1024",
    author: "Eshwar Nag Pilli",
    date: "October 10, 2026",
    readTime: "6 min read",
    category: "AI",
    content: `
When most people think about Lime, they think about an app, a QR code, and a scooter or e-bike waiting on the street. But that simple experience hides a much more complex system. Lime has to predict where riders will need vehicles, keep hundreds of thousands of devices charged and repaired, enforce different city rules, prevent payment fraud, manage parking, and still make each trip economically viable.

That is why AI is not a side feature at Lime. It is becoming the decision layer connecting riders, vehicles, operations teams, and cities.

### AI begins before a rider opens the app

A shared-mobility fleet only works if vehicles are available in the right place at the right time. Too many vehicles in one neighborhood waste capital and create clutter. Too few mean lost rides. Lime says it uses machine learning to predict rider demand and dynamically deploy its fleet. Its Supply App also uses ML to prioritize and assign operational tasks such as dispatch sequencing, charging, maintenance scheduling, fleet repositioning, and parts allocation.[1]

This is the invisible side of the product. A rider sees a nearby bike on a map; underneath, models and field operations are deciding which vehicles should be moved, charged, inspected, or repaired. Lime’s job postings describe a dedicated Supply machine-learning function whose deployment and rebalancing work influences millions of rides.

In Q2 2026, Lime reported an average operational fleet of 407,707 vehicles, up 22% year over year, and five million monthly active users.[5] At that scale, small forecasting or maintenance improvements can affect many trips.

### Lime Vision brings AI onto the vehicle

The most visible example is Lime Vision, an in-house computer-vision platform first announced in 2022. The original retrofit placed a waterproof unit on the scooter’s neck containing a camera, AI chip, and processor. Instead of sending video to a distant server and waiting, the model runs on the device and can classify the riding surface in under one second.[4]

That edge-computing design is important. Lime Vision can distinguish among a sidewalk, road, and bike lane while the scooter is moving. In markets where sidewalk riding is prohibited, the scooter can emit an audible warning and the app can send a real-time notification. The warning repeats until the rider leaves the sidewalk or ends the trip.[2]

Lime previously tested a different approach in San Jose in 2020. That system combined speed and accelerometer data with a statistical AI model. Lime said it could detect sidewalk riding with up to 95% accuracy, but riders received warnings after the trip.[11] Lime Vision moves the intervention into the ride itself.

Seattle is the clearest sign that this technology is moving from pilot to scale. Lime’s 2026 plan called for Vision on half of the city’s roughly 7,000 standing scooters by June 1 and on the full scooter fleet by year-end. Lime also plans to extend the system to e-bikes.[2] Early Nashville testing averaged 4.5 sidewalk alerts per trip, and Lime reported 16% less sidewalk riding on streets with bike lanes.[12]

### Computer vision also tackles parking

Parking is one of micromobility’s hardest city-level problems. A badly parked vehicle can block a sidewalk or accessibility route, so Lime asks riders to photograph the vehicle at the end of a trip.

Lime has described an in-house computer-vision model that scores those photos, supported by an operations feedback loop. It has also deployed third-party AI and augmented-reality tools that can give riders real-time parking feedback. In Washington, D.C., Lime’s $17 million “Keeping DC Moving” program includes this AI-assisted parking workflow, paired with manual review and escalating enforcement for repeat violations.[3]

Hardware is improving the same loop. Newer Gen 4 and LimeGlider vehicles can locate themselves to roughly 1.5 meters, compared with about 12 meters previously. Better positioning helps the system determine whether a vehicle is inside a designated parking bay instead of merely close to one.

### Pricing, fraud, and the business engine

Lime also uses machine learning where safety meets economics. Public job descriptions for its pricing team say production models make real-time pricing decisions under uncertainty. Riders may see this through dynamic “Prime Time” pricing. In March 2026, Lime also launched LimePrime, a subscription product that changes the economics for frequent riders.

Fraud is another production use case. Lime’s public filing says AI and ML help detect stolen payment credentials and unauthorized vehicle use.[1] This matters because every fraudulent unlock can create payment loss, vehicle damage, or a safety risk.

Together, demand forecasting, operational scheduling, pricing, and fraud detection form a closed loop: predict demand, position supply, price the ride, complete the trip, verify parking, and learn from the outcome.

### AI also appears inside the company

Lime’s engineering team has published work beyond vehicles. In 2024 it described an internal retrieval-augmented generation chatbot, built around a “Refine, Retrieve, Rebuttal” flow and deployed through Slack.[9] Earlier work used LightGBM and SHAP across roughly 100 features to classify trips as commute or leisure. These projects show AI being used both for employee productivity and for understanding rider behavior.

### The roadmap is expansion, not autonomy

The public roadmap points toward more deployment of proven systems rather than self-driving scooters. Lime Vision is expanding from pilots to city-scale scooter fleets and is planned for e-bikes. New vehicle hardware improves location accuracy. The seated LimeGlider is expanding in cities including Portland, Orlando, Dallas, and Los Angeles. Lime also acquired Neuron Mobility’s Canadian operations in July 2026, adding 12 cities and regions.[6][7]

The company now has the capital to push that expansion. Lime went public on July 1, 2026, at $25 per share, at roughly a $1.6 billion valuation, and later said it had repaid all outstanding long-term debt.[5][10] Q2 revenue reached $304 million, up 24% year over year, while adjusted EBITDA was $84 million, a 28% margin.[5]

There is also a climate objective behind the operating model. Lime is targeting net-zero emissions by 2030 under an SBTi-validated goal and says it has already cut carbon intensity 81.4% versus its 2019 baseline.[8] Smarter deployment, longer-lasting vehicles, more efficient charging, and better fleet utilization all support that direction.

The important takeaway is not that Lime uses AI. Many companies do. The important point is where Lime uses it: in decisions that repeat across every city, every vehicle, and every ride. That is what makes AI integral to the business rather than a marketing layer.

---

## Sources

1. [Lime S-1 filing (Neutron Holdings)](https://www.stocktitan.net/sec-filings/LIME/s-1-a-neutron-holdings-inc-amends-ipo-registration-statement-0472870f0588.html)
2. [GeekWire: Lime Vision Seattle rollout](https://www.geekwire.com/2026/sidewalk-scooter-riders-beware-ai-powered-lime-vision-will-soon-call-you-out/)
3. [Lime: Keeping DC Moving ($17M program)](https://www.li.me/blog/keeping-dc-moving-lime-invests-17-million-in-capitals-thriving-micromobility-program)
4. [Lime Vision 2022 announcement](https://www.pws.io/lime-built-its-own-camera-based-sidewalk-detection-technology/amp)
5. [Karmactive: Lime Q2 2026 earnings](https://karmactive.com/lime-posts-295m-profit-304m-revenue-174m-ipo-amid-rising-costs/)
6. [Zag Daily: Lime pilots new vehicle designs](https://zagdaily.com/tech/lime-pilots-two-new-vehicle-designs/)
7. [Barchart: Lime acquires Neuron Mobility Canada](https://www.barchart.com/story/news/3145768/lime-to-take-over-some-e-scooter-operations-in-canada-from-neuron-amid-acquisition)
8. [Lime: 81.4% carbon reduction on the road to net zero](https://www.li.me/blog/lime-achieves-an-81-4-carbon-reduction-on-the-road-to-net-zero)
9. [Lime Eng: Refine, Retrieve, Rebuttal (RAG flow)](https://medium.com/lime-eng/refine-retrieve-rebuttal-limes-rag-flow-90fd4d13c1a4)
10. [TechCrunch: Lime begins life as a public company](https://techcrunch.com/2026/07/01/lime-begins-life-as-a-public-company-after-years-of-uncertainty/)
11. [Digital Trends: Lime's 2020 sidewalk-detection pilot](https://www.digitaltrends.com/outdoors/limes-newest-scooter-aims-to-stop-you-from-riding-on-the-sidewalk/)
12. [CitizenPortal: Nashville WeGo pilot metrics](https://citizenportal.ai/articles/7240852/Tennessee/Lime-reports-large-ridership-gains-tests-beacons-and-camera-AI-in-WeGo-pilot)

*Cover photo: [Tiia Monto](https://commons.wikimedia.org/wiki/File:Lime_scooters.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).*
    `,
  },
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

export const blogPosts = posts.map((post) => ({
  ...post,
  slug: slugify(post.title),
}));
