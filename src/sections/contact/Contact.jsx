import { FiActivity, FiClock, FiPhone } from "react-icons/fi";
import { socialContacts, storeInfo } from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="location">
      <h2>
        <FiActivity /> Get In Touch
      </h2>
      <p>
        Send me a <span className="Rehansdesign">Message</span> via given Below
        !
      </p>

      <div className="contact-content">
        <div className="contact__container" data-aos="fade-up">
          {socialContacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
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
    </section>
  );
};

export default Contact;
