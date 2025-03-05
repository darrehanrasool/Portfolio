/* eslint-disable no-unused-vars */
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
    SiDocker, SiKubernetes, SiAmazonaws, SiPython, SiTensorflow, SiGithub, SiGit } from 'react-icons/si';
import { FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const data = [
{ id: 1, icon: <SiNextdotjs />, title: 'Modern Frontend Development', 
 desc: "Building dynamic, high-performance UIs with React, Next.js 15 and Tailwind CSS." },

{ id: 2, icon: <FaServer />, title: 'Backend & API Development', 
 desc: "Developing scalable APIs with Node.js, Express.js, GraphQL, PostgreSQL, and MongoDB." },

{ id: 3, icon: <SiDocker />, title: 'DevOps & CI/CD (Currently Learning)', 
 desc: "Exploring Docker, Kubernetes, GitHub Actions and AWS for automated workflows." },

{ id: 4, icon: <SiPython />, title: 'AI & Data Science (Currently Learning)', 
 desc: "Learning Machine Learning with Python, Pandas, Scikit-learn, and TensorFlow." },

{ id: 5, icon: <SiGithub />, title: 'Version Control & Collaboration', 
 desc: "Mastering Git, GitHub, and GitHub Actions for seamless collaboration and CI/CD pipelines." },

{ id: 6, icon: <FaCloud />, title: 'Cloud & Scalable Architectures (Currently Learning)', 
 desc: "Understanding AWS, DigitalOcean, and GCP for deploying scalable applications." }
];

export default data;