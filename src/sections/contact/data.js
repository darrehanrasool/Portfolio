import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiPeerlist, SiLeetcode } from "react-icons/si";

export const socialContacts = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:darrehanrasool@gmail.com",
    tooltip: "Email Me",
  },
  {
    id: 2,
    icon: <SiPeerlist />,
    link: "https://peerlist.io/darrehan",
    tooltip: "View My Peerlist",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: "https://wa.me/+919149544978",
    tooltip: "Chat on WhatsApp",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/darrehanrasool/",
    tooltip: "Connect on LinkedIn",
  },
];

export const storeInfo = {
  name: "dar rehan rasool",
  hours: "Remote - Onsite Flexible (Mon-Sun)",
  phone: "+91 9149544978",
  mapUrl: "https://maps.app.goo.gl/2AvfZsfezE3c8sDr9",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10896.163646874971!2d74.85312176302446!3d34.00496375161303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18eaf28346667%3A0x88ae735ed1e67798!2sCheck%20Pora%20Kalan%20190019!5e0!3m2!1sen!2sin!4v1751954807569!5m2!1sen!2sin",
  availability: "Available for freelance and full-time opportunities",
  timezone: "IST (UTC+5:30)",
};
