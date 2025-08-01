import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiTypescript,
} from "react-icons/si";
import { FaServer, FaDatabase, FaMobile } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: "JavaScript ES6+ ♻︎ ",
    desc: "Modern syntax features. Async/await patterns. Module system imports. Prototype chain concepts. Strict mode usage.",
  },
  {
    id: 2,
    icon: <SiReact />,
    title: "React Framework ♻︎",
    desc: "Component lifecycle. Hooks system usage. Virtual DOM diffing. Context API patterns. JSX transpilation.",
  },
  {
    id: 3,
    icon: <SiNodedotjs />,
    title: "Node.js Runtime ♻︎",
    desc: "Event loop phases. CommonJS modules. Stream processing. Cluster management. Error handling.",
  },
  {
    id: 4,
    icon: <SiExpress />,
    title: "Express Server ♻︎",
    desc: "Middleware chaining. Route parameters. Template engines. Error middleware. REST conventions.",
  },
  {
    id: 5,
    icon: <SiMongodb />,
    title: "MongoDB NoSQL ♻︎",
    desc: "Document modeling. Aggregation pipeline. Index optimization. Replica sets. Atlas cloud.",
  },
  {
    id: 6,
    icon: <SiNextdotjs />,
    title: "Next.js Framework ♻︎",
    desc: "File-based routing. API endpoints. SSG/SSR modes. Image component. Middleware.",
  },
  {
    id: 7,
    icon: <SiPostgresql />,
    title: "PostgreSQL SQL ♻︎",
    desc: "Table relations. JSONB support. Stored procs. Transactions. Performance tuning.",
  },
  {
    id: 8,
    icon: <SiRedux />,
    title: "Redux Toolkit ♻︎",
    desc: "Store creation. Slice patterns. Thunk middleware. Selector memoization. DevTools.",
  },
  {
    id: 9,
    icon: <SiTypescript />,
    title: "TypeScript ♻︎",
    desc: "Type annotations. Interfaces. Generics. Utility types. Config options.",
  },
  {
    id: 10,
    icon: <SiGraphql />,
    title: "GraphQL API ♻︎",
    desc: "Schema definition. Resolvers. Queries. Mutations. Subscriptions.",
  },
  {
    id: 11,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS ♻︎",
    desc: "Utility classes. Responsive design. Dark mode. Custom config. JIT mode.",
  },
  {
    id: 12,
    icon: <SiDocker />,
    title: "Docker Engine ♻︎",
    desc: "Containerization. Image layers. Volumes. Networking. Compose.",
  },
  {
    id: 13,
    icon: <SiGit />,
    title: "Git VCS ♻︎",
    desc: "Branching model. Merge strategies. Rebasing. Hooks. Worktrees.",
  },
  {
    id: 14,
    icon: <SiGithub />,
    title: "GitHub Platform ♻︎",
    desc: "Pull requests. Actions CI/CD. Projects. Packages. Pages.",
  },
  {
    id: 15,
    icon: <FaDatabase />,
    title: "ORM/ODM ♻︎",
    desc: "Mongoose models. Sequelize setup. Relations. Migrations. Seeders.",
  },
  {
    id: 16,
    icon: <FaServer />,
    title: "Deployment ♻︎",
    desc: "Vercel hosting. AWS EC2. Nginx config. PM2 process. SSL certs.",
  },
];

export default data;
