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
  { id: 1, link: "https://github.com/Darrehan", icon: <AiFillGithub /> },
  {
    id: 2,
    link: "https://www.linkedin.com/in/darrehanrasool/",
    icon: <AiFillLinkedin />,
  },
  { id: 3, link: "https://x.com/CseRehan", icon: <AiOutlineTwitter /> },
  {
    id: 4,
    link: "https://www.instagram.com/dar.rehan_/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 5,
    link: "https://www.facebook.com/yourprofile", // Replace with actual Facebook link
    icon: <AiFillFacebook />,
  },
  {
    id: 6,
    link: "https://www.youtube.com/@RehansQuest",
    icon: <AiFillYoutube />,
  },
  { id: 7, link: "https://peerlist.io/darrehan", icon: <SiPeerlist /> },
  { id: 8, link: "https://yourblog.com", icon: <FaBlog /> }, // Replace with actual blog link
  {
    id: 9,
    link: "https://www.producthunt.com/@darrehan",
    icon: <FaProductHunt />,
  },
  { id: 10, link: "https://www.threads.net/@dar.rehan_", icon: <FaThreads /> },
];

export default data;
