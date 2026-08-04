import Image1 from "../../assets/Projects/projectmedical.png";
import Image2 from "../../assets/Projects/projectgit.png";
import Image3 from "../../assets/Projects/projectalmond.png";
import Image4 from "../../assets/Projects/projectherbalist.png";

const data = [
  // ================= FRONTEND =================
  {
    id: 1,
    category: "Frontend",
    image: Image1,
    title: "Medical Store Landing Page",
    desc: "Responsive medical store landing page built using HTML5, CSS3, and JavaScript with clean structure, modern UI design, smooth interactions, and mobile-first development principles.",
    demo: "https://medical-pied-eight.vercel.app/",
    github: "https://github.com/darrehanrasool/Medical",
  },
  {
    id: 2,
    category: "Frontend",
    image: Image2,
    title: "Git Learning Repository",
    desc: "Git learning repository built with practical version control workflows, branch management strategies, collaborative development practices, and structured examples for real-world software projects.",
    demo: "https://git-drab.vercel.app/",
    github: "https://github.com/darrehanrasool/Git",
  },
  // ================= BACKEND =================
  {
    id: 3,
    category: "Backend",
    image: Image4,
    title: "Herbalist AI Model",
    desc: "Deep learning-based medicinal plant classification system built using Python with integrated preprocessing, model training pipelines, and structured deployment concepts for research applications.",
    demo: "https://herbalist.onrender.com/",
    github: "https://github.com/darrehanrasool/Herbalist",
  },

  // ================= MERN (DUMMY FOR NOW) =================
  {
    id: 4,
    category: "MERN",
    image: Image3,
    title: "MERN Stack Learning Project",
    desc: "Full-stack MERN learning project covering authentication, REST APIs, database integration, modular backend structure, and responsive frontend implementation for modern web applications.",
    demo: "#",
    github: "#",
  },
];
export default data;
