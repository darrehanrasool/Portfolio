import { AiOutlineInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { SiPeerlist } from 'react-icons/si';
import { FaBlog } from 'react-icons/fa';

const data = [
    { id: 1, link: 'https://github.com/Darrehan', icon: <AiFillGithub /> },
    { id: 2, link: 'https://www.linkedin.com/in/darrehanrasool/', icon: <AiFillLinkedin /> },
    { id: 3, link: 'https://www.youtube.com/@RehansCodePeaks', icon: <AiFillYoutube /> },
    { id: 4, link: 'https://x.com/CseRehan', icon: <AiOutlineTwitter /> },
    { id: 5, link: 'https://www.instagram.com/dar.rehan_/', icon: <AiOutlineInstagram /> },
    { id: 6, link: 'https://peerlist.io/darrehan', icon: <SiPeerlist /> },
    { id: 7, link: 'https://yourblog.com', icon: <FaBlog /> }  // Replace with actual blog link
];

export default data;