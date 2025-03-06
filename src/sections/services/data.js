/* eslint-disable no-unused-vars */
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
    SiDocker, SiKubernetes, SiAmazonaws, SiGithub, SiGit, SiGraphql, SiRedis, SiTailwindcss } from 'react-icons/si';
import { FaServer, FaDatabase, FaCloud, FaCodeBranch } from 'react-icons/fa';

const data = [
  { id: 1, icon: <SiNextdotjs />, title: 'Modern  Frontend Development', 
    desc: "Crafting high-performance, SEO -f riendly UIs with Next.js 15, React, and Tailwind CSS." },

  { id: 2, icon: <FaServer />, title: 'Backend & API Development', 
    desc: "Building scalable REST & GraphQL APIs with Node.js, Express.js, PostgreSQL, and MongoDB." },

  { id: 3, icon: <SiDocker />, title: 'DevOps & CI/CD (Currently Learning)', 
    desc: "Implementing Docker, Kubernetes, and GitHub Actions for seamless deployments." },

  { id: 4, icon: <SiGithub />, title: 'Version Control & Collaboration', 
    desc: "Ensuring efficient team collaboration using Git, GitHub, and automated CI/CD pipelines." },

  { id: 5, icon: <FaCloud />, title: 'Cloud & Infrastructure (Currently Learning)', 
    desc: "Deploying scalable applications on AWS, Vercel and Netlify for seamless hosting." },

  { id: 6, icon: <SiGraphql />, title: 'API & Database Optimization', 
    desc: "Optimizing APIs with GraphQL, PostgreSQL, and Redis for high - performance applications." },

  { id: 7, icon: <SiTailwindcss />, title: 'UI/UX & Responsive Design', 
    desc: "Creating modern, responsive, and user - friendly interfaces using Tailwind CSS and best practices." },

  { id: 8, icon: <FaCodeBranch />, title: 'Healthcare Tech', 
    desc: "Actively working on open-source projects, especially in healthcare tech, to drive impactful solutions." }
];

export default data;