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
    title: "Voyage Planner",
    desc: "Interactive travel platform with real-time booking. Integrated Google Maps API for location services. Responsive design with mobile-first approach. Performance optimized with lazy loading.",
    demo: "https://travel-app.example.com",
    github: "https://github.com/yourusername/travel-app",
  },
  {
    id: 2,
    category: "frontend",
    image: Image2,
    title: "Task Horizon",
    desc: "Productivity dashboard with drag-and-drop interface. JWT authentication for secure access. Dark/light mode theming system. Real-time updates via WebSockets.",
    demo: "https://task-manager.example.com",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 3,
    category: "frontend",
    image: Image3,
    title: "Style Hub",
    desc: "E-commerce platform with product customization. Stripe integration for secure payments. Advanced filtering and search functionality. Accessibility compliant (WCAG 2.1).",
    demo: "https://fashion-store.example.com",
    github: "https://github.com/yourusername/fashion-store",
  },
  {
    id: 4,
    category: "frontend",
    image: Image4,
    title: "Health Track",
    desc: "Fitness tracking application with data visualization. OAuth 2.0 for third-party integrations. Offline-first PWA implementation. Cross-platform compatibility.",
    demo: "https://fitness-app.example.com",
    github: "https://github.com/yourusername/fitness-app",
  },

  // Backend Projects
  {
    id: 5,
    category: "backend",
    image: Image5,
    title: "API Gateway",
    desc: "Microservices orchestration with rate limiting. JWT authentication with role management. Request/response transformation layer. Comprehensive logging system.",
    demo: "https://api-gateway.example.com",
    github: "https://github.com/yourusername/api-gateway",
  },
  {
    id: 6,
    category: "backend",
    image: Image6,
    title: "RealTime Chat",
    desc: "WebSocket-based messaging platform. End-to-end encryption for privacy. Message persistence with MongoDB. Presence detection system.",
    demo: "https://chat-app.example.com",
    github: "https://github.com/yourusername/chat-app",
  },
  {
    id: 7,
    category: "backend",
    image: Image7,
    title: "Payment Processor",
    desc: "Stripe and PayPal integration hub. Webhook handling for payment events. Fraud detection mechanisms. Reconciliation system for accounting.",
    demo: "https://payments.example.com",
    github: "https://github.com/yourusername/payment-system",
  },
  {
    id: 8,
    category: "backend",
    image: Image8,
    title: "Data Warehouse",
    desc: "ETL pipeline for business analytics. Columnar storage optimization. Scheduled report generation. Role-based data access control.",
    demo: "https://analytics.example.com",
    github: "https://github.com/yourusername/data-warehouse",
  },

  // DevOps Projects
  {
    id: 9,
    category: "devops",
    image: Image9,
    title: "CI/CD Pipeline",
    desc: "GitHub Actions workflow automation. Multi-environment deployment strategy. Automated testing with quality gates. Infrastructure-as-code implementation.",
    demo: "https://pipeline.example.com",
    github: "https://github.com/yourusername/cicd-pipeline",
  },
  {
    id: 10,
    category: "devops",
    image: Image1,
    title: "Cloud Cluster",
    desc: "Kubernetes orchestration with auto-scaling. Service mesh for inter-pod communication. Persistent volume management. Centralized logging setup.",
    demo: "https://cluster.example.com",
    github: "https://github.com/yourusername/k8s-cluster",
  },
  {
    id: 11,
    category: "devops",
    image: Image2,
    title: "Monitoring Stack",
    desc: "Prometheus with custom exporters. Grafana dashboards for visualization. Alert manager configuration. Historical data retention policies.",
    demo: "https://monitoring.example.com",
    github: "https://github.com/yourusername/monitoring-stack",
  },
  {
    id: 12,
    category: "devops",
    image: Image3,
    title: "Security Framework",
    desc: "Vulnerability scanning pipeline. Secrets management system. Network policy enforcement. Compliance auditing tools.",
    demo: "https://security.example.com",
    github: "https://github.com/yourusername/security-framework",
  },
];

export default data;
