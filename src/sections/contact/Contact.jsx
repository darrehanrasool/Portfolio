import { useEffect, useState } from "react";
import { FiActivity, FiClock, FiPhone } from "react-icons/fi";
import { socialContacts, storeInfo } from "./data";
import "./contact.css";

const messages = [
  "Let's create something amazing together",
  "Your ideas my skills will be  Magic",
  "Ready to collaborate? Let's connect",
  "Innovation starts with a conversation",
  "Let's turn your vision into reality",
];

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("location");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0;

        if (isVisible && !showMessage) {
          setShowMessage(true);
          // Cycle through messages
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

  return (
    <section id="location">
      <h2>
        <FiActivity /> Get In Touch ➿
      </h2>
      <p>
        Send me a <span className="Rehansdesign">Message 🗯️ </span> via given
        Below!
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
                  : "LinkedIn"
              }
            >
              {contact.icon}
            </a>
          ))}
        </div>

        <div className="store-info" data-aos="fade-up">
          <div className="store-details">
            <h3 className="store-title">
              <span className="Rehansdesign">{storeInfo.name}</span>
            </h3>
            <div className="store-meta">
              <p>
                <FiClock /> {storeInfo.hours}
              </p>
              <p>
                <FiPhone />{" "}
                <a href={`tel:${storeInfo.phone}`}>{storeInfo.phone}</a>
              </p>
            </div>
          </div>

          <div className="store-map">
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
    </section>
  );
};

export default Contact;
