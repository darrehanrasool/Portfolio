import { useEffect, useState, useRef } from "react";
import { FiClock, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiPeerlist, SiLeetcode } from "react-icons/si";
import "./contact.css";

const messages = [
  "❝ Let's create digital magic together ☃︎ ❞",
  " ❝ Your vision my skills Innovation ☃︎ ❞",
  "❝ Ready to collaborate  Let's connect  ☃︎ ❞",
  "❝ Turning ideas into reality since day one ☃︎ ❞",
  "❝ Every great project starts with a conversation ☃︎ ❞",
  "❝ Innovation is just a message away ☃︎ ❞",
  "❝ Let's build something extraordinary together ☃︎ ❞",
];

const socialContacts = [
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
];

const storeInfo = {
  name: "Remote - Hybrid Flexible (Mon-Sun)",
  mapUrl: "https://maps.app.goo.gl/2AvfZsfezE3c8sDr9",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10896.163646874971!2d74.85312176302446!3d34.00496375161303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18eaf28346667%3A0x88ae735ed1e67798!2sCheck%20Pora%20Kalan%20190019!5e0!3m2!1sen!2sin!4v1751954807569!5m2!1sen!2sin",
  availability: "Available for freelance projects and full-time opportunities",
  timezone: "IST (UTC+5:30)",
};

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const mapRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("location");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0;

        if (isVisible && !showMessage) {
          setShowMessage(true);
          let index = 0;
          const interval = setInterval(() => {
            index = (index + 1) % messages.length;
            setCurrentMessage(messages[index]);
          }, 3000);

          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMessage]);

  useEffect(() => {
    // Create particles for map effect
    const createParticles = () => {
      if (mapRef.current) {
        const particles = [];
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";

          // Random properties
          const size = Math.random() * 5 + 2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.top = `${posY}%`;
          particle.style.opacity = Math.random() * 0.5 + 0.1;
          particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

          mapRef.current.appendChild(particle);
          particles.push(particle);
        }

        particlesRef.current = particles;
      }
    };

    createParticles();

    return () => {
      // Clean up particles
      particlesRef.current.forEach((particle) => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <section id="location">
      <h2>Get In Touch ☃︎</h2>
      <p>
        ❝ Send me a <span className="Rehansdesign">Message</span> via given
        options ❞
      </p>

      <div className="contact-content">
        <div className="contact__container" data-aos="fade-up">
          {socialContacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                contact.link.includes("mailto")
                  ? "Email"
                  : contact.link.includes("peerlist")
                  ? "Peerlist"
                  : contact.link.includes("whatsapp")
                  ? "WhatsApp"
                  : contact.link.includes("linkedin")
                  ? "LinkedIn"
                  : contact.link.includes("github")
              }
            >
              {contact.icon}
              <span className="social-tooltip">{contact.tooltip}</span>
            </a>
          ))}
        </div>

        <div className="store-info" data-aos="fade-up">
          <div className="store-details">
            <h3 className="store-title">
              <span className="Rehansdesign">{storeInfo.name}</span>
            </h3>
          </div>
          <div className="store-map" ref={mapRef}>
            <div className="map-edge"></div>
            <div className="map-overlay"></div>
            <div className="map-marker"></div>
            <iframe
              src={storeInfo.embedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${storeInfo.name} Location`}
            ></iframe>
          </div>
        </div>
      </div>

      <div className={`connection-message ${showMessage ? "visible" : ""}`}>
        {currentMessage}
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(20px, -20px) rotate(180deg);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
