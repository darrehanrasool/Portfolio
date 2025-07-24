import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGithub,
  SiGit,
  SiGraphql,
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
} from "react-icons/si";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaCodeBranch,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: "JavaScript Development ✔️",
    desc: "Building dynamic web applications using modern ES6+ features. Implementing asynchronous programming with promises/async-await. Creating interactive UI components with vanilla JS.",
  },
  {
    id: 2,
    icon: <SiReact />,
    title: "React Development ✔️",
    desc: "Developing component-based UIs with React hooks. Managing state with Context API and Redux. Implementing responsive designs with React Router.",
  },
  {
    id: 3,
    icon: <SiNodedotjs />,
    title: "Node.js Backend ✔️",
    desc: "Building RESTful APIs with Express.js middleware. Implementing authentication with JWT/OAuth. Creating scalable server architectures.",
  },
  {
    id: 4,
    icon: <SiNextdotjs />,
    title: "Next.js Development ✔️",
    desc: "Developing hybrid SSG/SSR applications. Implementing API routes and dynamic routing. Optimizing performance with ISR.",
  },
  {
    id: 5,
    icon: <SiGit />,
    title: "Git Version Control ✔️",
    desc: "Managing code repositories with Git commands. Implementing branching strategies like Git Flow. Resolving merge conflicts efficiently.",
  },
  {
    id: 6,
    icon: <SiGithub />,
    title: "GitHub Actions ✔️",
    desc: "Setting up CI/CD pipelines for automation. Implementing testing and deployment workflows. Managing secrets and environments.",
  },
  {
    id: 7,
    icon: <SiDocker />,
    title: "Docker Containers ✔️",
    desc: "Containerizing applications with Docker. Managing multi-service architectures. Optimizing Dockerfiles for production.",
  },
  {
    id: 8,
    icon: <SiDocker />,
    title: "Docker for Data Science ✔️",
    desc: "Creating reproducible ML environments. Packaging models as containers. Managing dependencies in containers.",
  },
  {
    id: 9,
    icon: <SiPython />,
    title: "Python Programming ✔️",
    desc: "Developing scripts and automation tools. Implementing OOP concepts in Python. Working with file I/O operations.",
  },
  {
    id: 10,
    icon: <FaChartLine />,
    title: "Data Science ✔️",
    desc: "Analyzing data with Pandas/NumPy. Visualizing insights with Matplotlib/Seaborn. Cleaning and preprocessing datasets.",
  },
  {
    id: 11,
    icon: <SiTensorflow />,
    title: "Machine Learning ✔️",
    desc: "Building models with Scikit-learn. Implementing neural networks with TF/Keras. Evaluating model performance metrics.",
  },
  {
    id: 12,
    icon: <FaRobot />,
    title: "AI Development ✔️",
    desc: "Working with NLP and computer vision. Implementing deep learning architectures. Deploying AI models to production.",
  },
  {
    id: 13,
    icon: <SiMongodb />,
    title: "MongoDB Development ✔️",
    desc: "Designing NoSQL database schemas. Implementing aggregation pipelines. Managing indexes for performance.",
  },
  {
    id: 14,
    icon: <SiPostgresql />,
    title: "PostgreSQL Development ✔️",
    desc: "Writing complex SQL queries. Implementing stored procedures. Managing database security.",
  },
  {
    id: 15,
    icon: <SiExpress />,
    title: "API Development ✔️",
    desc: "Building RESTful/GraphQL APIs. Implementing middleware functions. Documenting with Swagger/Postman.",
  },
  {
    id: 16,
    icon: <FaCodeBranch />,
    title: "MERN Stack ✔️",
    desc: "Full-stack development with MERN. Integrating frontend and backend. Implementing JWT authentication.",
  },
];

export default data;
