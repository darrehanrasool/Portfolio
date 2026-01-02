import AboutImage from "../../assets/Rehan/About1.jpg";
import CV from "../../assets/certifications/resume.pdf";
import CoverLetter from "../../assets/certifications/resume.pdf"; // Add your cover letter file
import { HiDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";
import { useState } from "react";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);

  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2 className="about-header"> ⚡︎ About me </h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            <span className="Rehansdesign">
              ❝ In the silence of focused creation , complex systems become
              clear ❞
            </span>{" "}
            I'm Dar Rehan Rasool, a{" "}
            <span className="Rehansdesign">Full-Stack Developer </span> with
            MERN expertise from Srinagar. With 1+ years experience in{" "}
            <span className="Rehansdesign">end-to-end web development</span>, I
            build scalable applications where robust architecture meets seamless
            user experiences.
          </p>

          <p>
            My expertise spans from React-powered frontends to Node.js backends,
            with special attention to{" "}
            <span className="Rehansdesign"> scalable system architecture </span>{" "}
            where performance matters most. I leverage modern JavaScript
            ecosystems to create applications that are both powerful and
            maintainable.
          </p>

          {/* Updated buttons section */}
          <div className="about__buttons">
            <a href={CV} download className="btn primary">
              Download Resume ⌘ <HiDownload />
            </a>
            <a href={CoverLetter} download className="btn primary">
              Download Letter ⌘ <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
