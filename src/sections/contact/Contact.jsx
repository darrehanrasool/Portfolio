import { useEffect, useState } from "react";
import "./contact.css";
import { socialContacts } from "./data";

const messages = [
  "❝ Let's create digital magic together ❞",
  "❝ Your vision my skills Innovation ❞",
  "❝ Ready to collaborate  Let's connect ❞",
  "❝ Turning ideas into reality since day one ❞",
  "❝ Every project starts with a conversation ❞",
  "❝ Innovation is just a message away ❞",
  "❝ Let's build something extraordinary  ❞",
];

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("location");
      if (!contactSection) return;

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMessage]);

  return (
    <section id="location">
      <h2>Get In Touch</h2>
      <p>
        ➤ Send me a <span className="Rehansdesign">Message</span> via given
        options
      </p>

      <div className="contact-content">
        <div className="contact__container">
          {socialContacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon}
              <span className="social-tooltip">{contact.tooltip}</span>
            </a>
          ))}
        </div>

        <div className={`connection-message ${showMessage ? "visible" : ""}`}>
          {currentMessage}
        </div>
      </div>
    </section>
  );
};

export default Contact;
