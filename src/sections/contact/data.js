import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

export const socialContacts = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:darrehanrasool@gmail.com",
    tooltip: "Email Me",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    link: "https://wa.me/+919149544978",
    tooltip: "Chat on WhatsApp",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/darrehanrasool/",
    tooltip: "Connect on LinkedIn",
  },
  {
    id: 4,
    icon: <FaGithub />,
    link: "https://github.com/yourusername",
    tooltip: "Check my GitHub",
  },
];
