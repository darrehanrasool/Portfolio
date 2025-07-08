import React from "react";
import { FiActivity } from "react-icons/fi";
import Card from "../../components/Card.jsx";
import certificationsData from "./data.js";

export default function Certification() {
  return (
    <section id="certification">
      <h2>
        <FiActivity /> Certifications
      </h2>
      <p>
        <span className="Rehansdesign">My Certifications</span> showcase
        expertise across multiple domains of technology.
      </p>
      <div className="container services__container" data-aos="fade-up">
        {certificationsData.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <p>
                <strong>Duration:</strong> {item.months} months ({item.hours}{" "}
                hours)
              </p>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
