import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGraphql,
  SiTypescript,
  SiBootstrap,
  SiCypress,
  SiJest,
} from "react-icons/si";
import { FaServer, FaBrain, FaApple } from "react-icons/fa";

const data = [
  // Core Web Technologies
  {
    id: 1,
    icon: <SiBootstrap />,
    title: "HTML5, CSS3 & Bootstrap ♻︎",
    desc: "Semantic HTML5 markup. Responsive design using Bootstrap grid system. Flexbox utilities. Accessibility standards. Cross-browser compatibility.",
  },

  // JavaScript Ecosystem
  {
    id: 2,
    icon: <SiJavascript />,
    title: "JavaScript (ES6+) ♻︎",
    desc: "Modern ES6+ syntax. Asynchronous programming. Functional patterns. Performance optimization. Browser APIs.",
  },
  {
    id: 3,
    icon: <SiTypescript />,
    title: "TypeScript Development ♻︎",
    desc: "Type safety. Interface design. Generics. Advanced types. Scalable React and Node.js integration.",
  },

  // Frontend Frameworks & State
  {
    id: 4,
    icon: <SiReact />,
    title: "React.js Ecosystem ♻︎",
    desc: "Component architecture. Hooks system. Context API. State management (Redux). Performance optimization.",
  },
  {
    id: 5,
    icon: <SiNextdotjs />,
    title: "Next.js Framework ♻︎",
    desc: "App Router architecture. Server-side rendering (SSR). Static site generation (SSG). API routes. Middleware.",
  },

  // Backend Development
  {
    id: 6,
    icon: <SiNodedotjs />,
    title: "Node.js Backend Development ♻︎",
    desc: "Event-driven architecture. RESTful API development (Express.js). Authentication. Middleware. Error handling.",
  },

  // Databases
  {
    id: 7,
    icon: <SiMongodb />,
    title: "MongoDB Database ♻︎",
    desc: "NoSQL schema design. Aggregation pipelines. Indexing strategies. Transactions. MongoDB Atlas deployment.",
  },
  {
    id: 8,
    icon: <SiPostgresql />,
    title: "PostgreSQL Database ♻︎",
    desc: "Relational modeling. Complex SQL queries. Performance tuning. ACID compliance. ORM tools.",
  },
  {
    id: 9,
    icon: <SiGraphql />,
    title: "GraphQL API Development ♻︎",
    desc: "Schema design. Resolver implementation. Apollo ecosystem. Performance optimization. Real-time features.",
  },

  // Testing
  {
    id: 10,
    icon: <SiJest />,
    title: "Unit & Integration Testing ♻︎",
    desc: "Jest framework. React Testing Library. Mocking strategies. Snapshot testing. Coverage reporting.",
  },
  {
    id: 11,
    icon: <SiCypress />,
    title: "End-to-End Testing ♻︎",
    desc: "Cypress E2E testing. Component testing. CI/CD integration. Test automation workflows.",
  },

  // DevOps & Deployment
  {
    id: 12,
    icon: <SiDocker />,
    title: "Docker Containerization ♻︎",
    desc: "Docker images and containers. Docker Compose. Multi-stage builds. Environment isolation.",
  },
  {
    id: 13,
    icon: <FaServer />,
    title: "Cloud Deployment & CI/CD ♻︎",
    desc: "AWS and Vercel deployment. GitHub Actions. CI/CD pipelines. Monitoring and scalability.",
  },
  {
    id: 14,
    icon: <SiGit />,
    title: "Git & Collaboration Tools ♻︎",
    desc: "Version control workflows. Branching strategies. Pull requests. Code reviews. Team collaboration.",
  },

  // Mobile & AI
  {
    id: 15,
    icon: <FaApple />,
    title: "iOS Development ♻︎",
    desc: "Swift and SwiftUI. UIKit framework. App architecture. Core Data. App Store deployment.",
  },
  {
    id: 16,
    icon: <FaBrain />,
    title: "AI Agents & RAG Development ♻︎",
    desc: "Agentic AI systems. Retrieval-Augmented Generation (RAG). Vector databases. Tool integration. Multi-agent orchestration.",
  },
];

export default data;
