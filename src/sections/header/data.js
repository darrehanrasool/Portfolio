import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { SiPeerlist } from "react-icons/si";
import { FaBlog, FaProductHunt } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const data = [
  {
    id: 1,
    link: "https://github.com/Darrehan",
    icon: <AiFillGithub />,
    tooltip: "GitHub",
  },
  {
    id: 2,
    link: "https://peerlist.io/darrehan",
    icon: <SiPeerlist />,
    tooltip: "Peerlist",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/darrehanrasool/",
    icon: <AiFillLinkedin />,
    tooltip: "LinkedIn",
  },
  {
    id: 4,
    link: "https://x.com/CseRehan",
    icon: <AiOutlineTwitter />,
    tooltip: "Twitter",
  },
  {
    id: 5,
    link: "https://www.instagram.com/dar.rehan_/",
    icon: <AiOutlineInstagram />,
    tooltip: "Instagram",
  },
  {
    id: 6,
    link: "https://www.facebook.com/dar.rehan.rasool/",
    icon: <AiFillFacebook />,
    tooltip: "Facebook",
  },
  {
    id: 7,
    link: "https://www.youtube.com/@RehansQuest",
    icon: <AiFillYoutube />,
    tooltip: "YouTube",
  },
  { id: 8, link: "https://yourblog.com", icon: <FaBlog />, tooltip: "Blog" },
  {
    id: 9,
    link: "https://www.producthunt.com/@darrehan",
    icon: <FaProductHunt />,
    tooltip: "Product Hunt",
  },
  {
    id: 10,
    link: "https://www.threads.net/@dar.rehan_",
    icon: <FaThreads />,
    tooltip: "Threads",
  },
];

export default data;
