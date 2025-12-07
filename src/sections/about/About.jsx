import AboutImage from "../../assets/Rehan/About1.jpg";
import CV from "../../assets/certifications/resume.pdf";
import { HiDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";
import { useState } from "react";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleEducationClick = () => {
    setIsAnimating(true);
    
    // Create particle animation
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 0.5 + 0.5
      });
    }
    setParticles(newParticles);
    
    // Redirect after animation
    setTimeout(() => {
      window.open("https://your-education-spa-website.com", "_blank");
      setIsAnimating(false);
      setParticles([]);
    }, 800);
  };

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
              ❝ In the silence of focused creation , complex systems become clear ❞
            </span>{" "}
            I'm Dar Rehan Rasool, a{" "}
            <span className="Rehansdesign">Full-Stack Developer </span> with
            MERN expertise from Srinagar. With 1+ years experience in{" "}
            <span className="Rehansdesign">end-to-end web development</span>, I
            build scalable applications where robust architecture meets seamless user experiences.
          </p>

          <p>
            My expertise spans from React-powered frontends to Node.js backends, with special attention to{" "}
            <span className="Rehansdesign"> scalable system architecture </span>{" "}
            where performance matters most. I leverage modern JavaScript ecosystems to create applications that are both powerful and maintainable.
          </p>

          <div className="about__buttons">
            <a href={CV} download className="btn primary">
              Download Resume ⌘ <HiDownload />
            </a>
            
            {/* Animated Education Button */}
            <button 
              className={`btn education-btn ${isAnimating ? 'animating' : ''}`}
              onClick={handleEducationClick}
              disabled={isAnimating}
              aria-label="View Education Portfolio"
            >
              <div className="education-btn__content">
                <FaGraduationCap className="education-icon" />
                <span>View Education</span>
                <div className="sparkle"></div>
              </div>
              
              {/* Particle Animation Container */}
              <div className="particles-container">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      animationDuration: `${particle.duration}s`,
                      animationDelay: `${Math.random() * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;