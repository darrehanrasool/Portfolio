import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { SiPeerlist } from "react-icons/si";
import { FaThreads, FaCloud, FaBlog } from "react-icons/fa6";
import { DiGitBranch } from "react-icons/di";
import { IoShareSocialOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    link: "https://github.com/darrehanrasool",
    icon: <AiFillGithub />,
    tooltip: "GitHub",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/darrehanrasool/",
    icon: <AiFillLinkedin />,
    tooltip: "LinkedIn",
  },
  {
    id: 3,
    link: "https://peerlist.io/darrehanrasool",
    icon: <SiPeerlist />,
    tooltip: "Peerlist",
  },
  {
    id: 4,
    link: "https://orcid.org/0009-0004-6426-5195",
    icon: <DiGitBranch />,
    tooltip: "ORCID",
  },
  {
    id: 5,
    link: "https://www.youtube.com/@darrehanrasool",
    icon: <AiFillYoutube />,
    tooltip: "YouTube",
  },

  {
    id: 6,
    link: "https://www.facebook.com/dar.rehan.rasool/",
    icon: <AiFillFacebook />,
    tooltip: "Facebook",
  },
  {
    id: 7,
    link: "https://www.instagram.com/darrehanrasool/",
    icon: <AiOutlineInstagram />,
    tooltip: "Instagram",
  },
  {
    id: 8,
    link: "https://bsky.app/profile/darrehanrasool.bsky.social",
    icon: <FaCloud />,
    tooltip: "Bluesky",
  },
  {
    id: 9,
    link: "https://mastodon.social/@darrehanrasool",
    icon: <IoShareSocialOutline />,
    tooltip: "Mastodon",
  },
  {
    id: 10,
    link: "https://x.com/darrehanrasool",
    icon: <AiOutlineTwitter />,
    tooltip: "Twitter",
  },
  {
    id: 11,
    link: "https://www.threads.com/@darrehanrasool",
    icon: <FaThreads />,
    tooltip: "Threads",
  },
  {
    id: 12,
    link: "https://yourblog.com",
    icon: <FaBlog />,
    tooltip: "Blog",
  },
];

export default data;
