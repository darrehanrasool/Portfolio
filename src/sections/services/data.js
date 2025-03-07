/* eslint-disable no-unused-vars */
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
    SiDocker, SiKubernetes, SiAmazonaws, SiGithub, SiGit, SiGraphql, SiRedis, SiTailwindcss } from 'react-icons/si';
import { FaServer, FaDatabase, FaCloud, FaCodeBranch } from 'react-icons/fa';

const data = [
  { id: 1, icon: <SiNextdotjs />, title: 'Modern  Frontend Development', 
    desc: "Crafting High-Performance, SEO -Friendly UIs with Next.js 15, React, and Tailwind CSS." },

  { id: 2, icon: <FaServer />, title: 'Backend & API Development', 
    desc: "Building Scalable REST & GraphQL APIs with Node.js, Express.js, PostgreSQL, and MongoDB." },

  { id: 3, icon: <SiDocker />, title: 'DevOps & CI/CD (Currently Learning)', 
    desc: "Implementing Docker, Kubernetes, and GitHub Actions for Seamless Deployments." },

  { id: 4, icon: <SiGithub />, title: 'Version Control & Collaboration', 
    desc: "Ensuring Efficient Team Collaboration using Git, GitHub, and automated CI/CD pipelines." },

  { id: 5, icon: <FaCloud />, title: 'Cloud & Infrastructure (Currently Learning)', 
    desc: "Deploying Scalable Applications on AWS, Vercel and Netlify for seamless Hosting." },

  { id: 6, icon: <SiGraphql />, title: 'API & Database Optimization', 
    desc: "Optimizing APIs with GraphQL, PostgreSQL for high - performance applications." },

  { id: 7, icon: <SiTailwindcss />, title: 'UI/UX & Responsive Design', 
    desc: "Creating Modern, responsive, and user - friendly interfaces using Tailwind CSS and Best Practices." },

  { id: 8, icon: <FaCodeBranch />, title: 'Healthcare Tech', 
    desc: "Actively Working on open-source Projects, Especially in Healthcare Tech, to Drive impactful solutions." }
];

export default data;