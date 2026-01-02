import Image1 from "../../assets/Projects/project3.jpg";
import Image2 from "../../assets/Projects/project6.jpg";
import Image3 from "../../assets/Projects/project3.jpg";
import Image4 from "../../assets/Projects/project4.jpg";
import Image5 from "../../assets/Projects/project8.jpg";
import Image6 from "../../assets/Projects/project6.jpg";
import Image7 from "../../assets/Projects/project6.jpg";
import Image8 from "../../assets/Projects/project7.jpg";
import Image9 from "../../assets/Projects/project8.jpg";

const data = [
  // MERN Stack Projects
  {
    id: 1,
    category: "MERN",
    image: Image1,
    title: "E-Commerce Platform",
    desc: "Full-stack MERN application with user authentication, product management, shopping cart, payment integration, order tracking, and admin dashboard.",
    demo: "https://mern-ecommerce.example.com",
    github: "https://github.com/yourusername/mern-ecommerce",
  },
  {
    id: 2,
    category: "MERN",
    image: Image2,
    title: "Social Media App",
    desc: "Complete social platform built with MongoDB, Express, React, Node.js featuring posts, comments, likes, real-time notifications, and user profiles.",
    demo: "https://mern-social.example.com",
    github: "https://github.com/yourusername/mern-social-app",
  },
  {
    id: 3,
    category: "MERN",
    image: Image3,
    title: "Task Management System",
    desc: "Project management tool with team collaboration, task assignments, progress tracking, file uploads, deadlines, and real-time updates using MERN stack.",
    demo: "https://mern-tasks.example.com",
    github: "https://github.com/yourusername/mern-task-manager",
  },
  {
    id: 4,
    category: "MERN",
    image: Image4,
    title: "Learning Management ",
    desc: "Educational platform with course creation, video streaming, enrollment system, progress tracking, quizzes, certificates.",
    demo: "https://mern-lms.example.com",
    github: "https://github.com/yourusername/mern-lms",
  },
  {
    id: 5,
    category: "MERN",
    image: Image5,
    title: "Real Estate Portal",
    desc: "Property listing platform with search filters, virtual tours, booking system, user dashboard, agent profiles, and integrated messaging features.",
    demo: "https://mern-realestate.example.com",
    github: "https://github.com/yourusername/mern-realestate",
  },
  {
    id: 6,
    category: "MERN",
    image: Image6,
    title: "Food Delivery App",
    desc: "Restaurant ordering system with menu management, cart functionality, real-time tracking, payment gateway, ratings.",
    demo: "https://mern-fooddelivery.example.com",
    github: "https://github.com/yourusername/mern-food-delivery",
  },

  // iOS Projects
  {
    id: 7,
    category: "IOS",
    image: Image7,
    title: "Fitness Tracker App",
    desc: "Native iOS app built with SwiftUI featuring workout tracking, health data integration, progress charts, goal setting.",
    demo: "https://apps.apple.com/fitness-tracker",
    github: "https://github.com/yourusername/ios-fitness-tracker",
  },
  {
    id: 8,
    category: "IOS",
    image: Image8,
    title: "Recipe Finder",
    desc: "iOS application with recipe search, meal planning, shopping lists, nutrition tracking, Core Data storage, and beautiful UI with animations.",
    demo: "https://apps.apple.com/recipe-finder",
    github: "https://github.com/yourusername/ios-recipe-app",
  },
  {
    id: 9,
    category: "IOS",
    image: Image9,
    title: "Budget Planner",
    desc: "Personal finance iOS app with expense tracking, budget categories, financial insights, data visualization, iCloud sync, and secure data storage.",
    demo: "https://apps.apple.com/budget-planner",
    github: "https://github.com/yourusername/ios-budget-app",
  },
  {
    id: 10,
    category: "IOS",
    image: Image1,
    title: "Weather Dashboard",
    desc: "Weather app with location services, real-time forecasts, interactive maps, weather alerts, widget support, and elegant dark mode interface.",
    demo: "https://apps.apple.com/weather-dashboard",
    github: "https://github.com/yourusername/ios-weather-app",
  },
  {
    id: 11,
    category: "IOS",
    image: Image2,
    title: "Travel Companion",
    desc: "Travel planning app with itinerary builder, offline maps, booking integration, expense tracker, photo journal, and trip sharing features.",
    demo: "https://apps.apple.com/travel-companion",
    github: "https://github.com/yourusername/ios-travel-app",
  },
  {
    id: 12,
    category: "IOS",
    image: Image3,
    title: "Study Timer Pro",
    desc: "Productivity app with Pomodoro timer, task scheduling, focus sessions, statistics tracking, achievements system.",
    demo: "https://apps.apple.com/study-timer",
    github: "https://github.com/yourusername/ios-study-timer",
  },

  // AI Projects
  {
    id: 13,
    category: "AI",
    image: Image4,
    title: "AI Chatbot Assistant",
    desc: "Intelligent chatbot using RAG architecture, LangChain integration, vector embeddings, context-aware responses, and multi-turn conversations.",
    demo: "https://ai-chatbot.example.com",
    github: "https://github.com/yourusername/ai-chatbot",
  },
  {
    id: 14,
    category: "AI",
    image: Image5,
    title: "Document Q&A Agent",
    desc: "AI agent for document analysis with RAG pipeline, PDF processing, semantic search, citation generation, and natural language querying capabilities.",
    demo: "https://ai-document-qa.example.com",
    github: "https://github.com/yourusername/ai-document-agent",
  },
  {
    id: 15,
    category: "AI",
    image: Image6,
    title: "Code Assistant AI",
    desc: "Agentic AI system for code generation, debugging assistance, code review, refactoring suggestions, multi-language support, and IDE integration.",
    demo: "https://ai-code-assistant.example.com",
    github: "https://github.com/yourusername/ai-code-assistant",
  },
  {
    id: 16,
    category: "AI",
    image: Image7,
    title: "Multi-Agent Research Tool",
    desc: "Advanced AI system with multiple specialized agents, web scraping, data synthesis, report generation, vector search.",
    demo: "https://ai-research-tool.example.com",
    github: "https://github.com/yourusername/ai-research-agents",
  },
  {
    id: 17,
    category: "AI",
    image: Image8,
    title: "Customer Support Bot",
    desc: "AI-powered support system with ticket routing, sentiment analysis, automated responses, knowledge base integration.",
    demo: "https://ai-support-bot.example.com",
    github: "https://github.com/yourusername/ai-support-bot",
  },
  {
    id: 18,
    category: "AI",
    image: Image9,
    title: "Content Generator AI",
    desc: "Creative AI tool for blog posts, social media content, marketing copy, SEO optimization, tone adjustment, and multi-format output generation.",
    demo: "https://ai-content-generator.example.com",
    github: "https://github.com/yourusername/ai-content-generator",
  },
];

export default data;
