import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCypress,
  SiJest,
} from "react-icons/si";
import { FaServer, FaBrain, FaApple } from "react-icons/fa";

const data = [
  // Core Web Technologies
  {
    id: 1,
    icon: <SiHtml5 />,
    title: "HTML5 & Web Standards ♻︎",
    desc: "Semantic markup. Accessibility compliance. SEO optimization. Cross-browser compatibility. Modern web APIs.",
  },
  {
    id: 2,
    icon: <SiCss3 />,
    title: "CSS3 & Advanced Styling ♻︎",
    desc: "Flexbox/Grid layouts. CSS animations. Responsive design. CSS-in-JS. Design system implementation.",
  },
  {
    id: 3,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS Framework ♻︎",
    desc: "Utility-first workflow. Responsive utilities. Component extraction. Performance optimization. Custom configurations.",
  },

  // JavaScript Ecosystem
  {
    id: 4,
    icon: <SiJavascript />,
    title: "JavaScript (ES6+) ♻︎",
    desc: "Modern syntax features. Async programming. Functional patterns. Performance optimization. Browser APIs.",
  },
  {
    id: 5,
    icon: <SiTypescript />,
    title: "TypeScript Development ♻︎",
    desc: "Type safety. Interface design. Generics. Advanced types. React/Node integration.",
  },

  // Frontend Frameworks & State
  {
    id: 6,
    icon: <SiReact />,
    title: "React.js Ecosystem ♻︎",
    desc: "Component architecture. Hooks system. Context API. State management (Redux). Performance optimization.",
  },
  {
    id: 7,
    icon: <SiNextdotjs />,
    title: "Next.js Framework ♻︎",
    desc: "App Router architecture. SSR/SSG. API routes. Middleware. Performance optimization.",
  },

  // Backend Development
  {
    id: 8,
    icon: <SiNodedotjs />,
    title: "Node.js Backend Development ♻︎",
    desc: "Event-driven architecture. REST API development (Express.js). Authentication. Middleware. Error handling.",
  },

  // Databases
  {
    id: 9,
    icon: <SiMongodb />,
    title: "MongoDB Database ♻︎",
    desc: "NoSQL design. Aggregation. Indexing. Transactions. Atlas deployment.",
  },
  {
    id: 10,
    icon: <SiPostgresql />,
    title: "PostgreSQL Database ♻︎",
    desc: "Relational modeling. Complex queries. Performance. ACID compliance. ORM tools.",
  },
  {
    id: 11,
    icon: <SiGraphql />,
    title: "GraphQL API Development ♻︎",
    desc: "Schema design. Resolvers. Apollo ecosystem. Performance. Real-time features.",
  },

  // Testing
  {
    id: 12,
    icon: <SiJest />,
    title: "Unit & Integration Testing ♻︎",
    desc: "Jest testing framework. React Testing Library. Mock functions. Snapshot testing. Coverage reports.",
  },
  {
    id: 13,
    icon: <SiCypress />,
    title: "End-to-End Testing ♻︎",
    desc: "Cypress framework. Component testing. E2E workflows. CI/CD integration. Test automation.",
  },

  // DevOps & Deployment
  {
    id: 14,
    icon: <SiDocker />,
    title: "Docker Containerization ♻︎",
    desc: "Container management. Image optimization. Docker Compose. Multi-stage builds. Deployment strategies.",
  },
  {
    id: 15,
    icon: <FaServer />,
    title: "Cloud Deployment & CI/CD ♻︎",
    desc: "AWS/Vercel deployment. GitHub Actions. Load balancing. Monitoring. Performance optimization.",
  },
  {
    id: 16,
    icon: <SiGit />,
    title: "Git & Collaboration Tools ♻︎",
    desc: "Git workflow strategies. Branch management. Code reviews. Team collaboration. GitHub ecosystem.",
  },

  // Mobile & AI
  {
    id: 17,
    icon: <FaApple />,
    title: "iOS Development ♻︎",
    desc: "Swift/SwiftUI. UIKit. App architecture. Core Data. App Store deployment. Push notifications.",
  },
  {
    id: 18,
    icon: <FaBrain />,
    title: "AI Agents & RAG Development ♻︎",
    desc: "Agentic AI systems. RAG pipelines.Tool integration, Multi-agent orchestration.",
  },
];

export default data;
