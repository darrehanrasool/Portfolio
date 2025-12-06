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
  // Frontend Projects
  {
    id: 1,
    category: "frontend",
    image: Image1,
    title: "Frontend E-Commerce",
    desc: "Full-featured online shopping platform with React frontend. Product catalog with advanced filtering. Shopping cart with real-time updates. User authentication and profile management.",
    demo: "https://ecommerce-mern.example.com",
    github: "https://github.com/yourusername/mern-ecommerce",
  },
  {
    id: 2,
    category: "frontend",
    image: Image2,
    title: "Frontend LMS",
    desc: "Educational platform with course management. Student progress tracking and analytics. Interactive video lessons and quizzes. Instructor dashboard for content management.",
    demo: "https://lms-mern.example.com",
    github: "https://github.com/yourusername/mern-lms",
  },
  {
    id: 3,
    category: "frontend",
    image: Image3,
    title: "Frontend Blog ",
    desc: "Modern blogging platform with rich text editor. Social features including comments and likes. SEO optimization for content discovery. Responsive design for all devices.",
    demo: "https://blog-mern.example.com",
    github: "https://github.com/yourusername/mern-blog",
  },

  // Backend Projects
  {
    id: 4,
    category: "backend",
    image: Image4,
    title: "E-Commerce Backend API",
    desc: "RESTful API for e-commerce platform. Payment gateway integration (Stripe/PayPal). Order processing and inventory management. JWT authentication with role-based access.",
    demo: "https://api-ecommerce.example.com",
    github: "https://github.com/yourusername/ecommerce-backend",
  },
  {
    id: 5,
    category: "backend",
    image: Image5,
    title: "LMS Backend API",
    desc: "Scalable backend for learning management system. Course enrollment and progress tracking. Video streaming and file management. Real-time notifications system.",
    demo: "https://api-lms.example.com",
    github: "https://github.com/yourusername/lms-backend",
  },
  {
    id: 6,
    category: "backend",
    image: Image6,
    title: "Blog Backend API",
    desc: "Content management API for blogging platform. Rich text editor with image handling. Comment system with moderation tools. Analytics and user engagement tracking.",
    demo: "https://api-blog.example.com",
    github: "https://github.com/yourusername/blog-backend",
  },

  // Research Projects
  {
    id: 7,
    category: "research",
    image: Image7,
    title: "Herbalist",
    desc: "AI-powered medicinal plant identification and analysis. Image recognition using deep learning models. Traditional medicine knowledge database. Research paper published in IEEE conference.",
    demo: "https://herbalist-research.example.com",
    github: "https://github.com/darrehanrasool/Herbalist",
  },
  {
    id: 8,
    category: "research",
    image: Image8,
    title: "Mediscan",
    desc: "ML system for early disease detection using patient data. Integration with Electronic Health Records. Predictive analytics for treatment outcomes. Real-time monitoring dashboard for healthcare providers.",
    demo: "https://healthcare-ml.example.com",
    github: "https://github.com/yourusername/healthcare-diagnostic-ml",
  },
  {
    id: 9,
    category: "research",
    image: Image9,
    title: "Agriscan",
    desc: "IoT sensor network with ML analytics for precision farming. Crop disease prediction using computer vision. Automated irrigation control system. Yield prediction and resource optimization models.",
    demo: "https://smart-agriculture.example.com",
    github: "https://github.com/yourusername/smart-agriculture-ml",
  },
];

export default data;