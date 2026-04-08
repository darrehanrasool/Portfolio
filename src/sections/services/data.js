import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiBootstrap,
  SiCypress,
  SiJest,
  SiPostman,
  SiJira,
  SiDocker,
} from "react-icons/si";

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

  // Backend
  {
    id: 3,
    icon: <SiNodedotjs />,
    title: "Node.js Backend Development ♻︎",
    desc: "Event-driven architecture. RESTful API development (Express.js). Authentication. Middleware. Error handling.",
  },

  // Frontend Frameworks
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

  // Testing
  {
    id: 6,
    icon: <SiJest />,
    title: "Unit & Integration Testing ♻︎",
    desc: "Jest framework. React Testing Library. Mocking strategies. Snapshot testing. Coverage reporting.",
  },
  {
    id: 7,
    icon: <SiCypress />,
    title: "End-to-End Testing ♻︎",
    desc: "Cypress E2E testing. Component testing. CI/CD integration. Test automation workflows.",
  },
  {
    id: 8,
    icon: <SiPostman />,
    title: "API Testing with Postman ♻︎",
    desc: "API request testing. Collection management. Automated API testing. Environment variables. Collaboration tools.",
  },

  // Database & Version Control
  {
    id: 9,
    icon: <SiPostgresql />,
    title: "PostgreSQL Database ♻︎",
    desc: "Relational modeling. Complex SQL queries. Performance tuning. ACID compliance. ORM tools.",
  },
  {
    id: 10,
    icon: <SiGit />,
    title: "Git & Collaboration Tools ♻︎",
    desc: "Version control workflows. Branching strategies. Pull requests. Code reviews. Team collaboration.",
  },

  // New Additions
  {
    id: 11,
    icon: <SiJira />,
    title: "Jira Project Management ♻︎",
    desc: "Agile workflow management. Sprint planning. Issue tracking. Backlog prioritization. Team collaboration.",
  },
  {
    id: 12,
    icon: <SiDocker />,
    title: "Docker & Containerization ♻︎",
    desc: "Containerized applications. Docker images & containers. Environment consistency. Deployment optimization.",
  },
];

export default data;
