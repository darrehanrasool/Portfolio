import AboutImage from "../../assets/Rehan/rehan6.png";
import CV from "../../assets/certifications/resume.pdf";
import { HiDownload } from "react-icons/hi";
import { TbUserHeart } from "react-icons/tb";
import { LuWorkflow } from "react-icons/lu";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2 className="about-header">
            <TbUserHeart></TbUserHeart> About me ➿
          </h2>
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
              " In the silence of focused creation , complex systems become
              clear "
            </span>{" "}
            🔜 This philosophy guides my approach to software engineering. With
            <span className="Rehansdesign">
              {" "}
              <LuWorkflow></LuWorkflow> 2+ years{" "}
            </span>{" "}
            of methodical development I specialise in architecting performant
            systems where clean code meets mathematical precision particularly
            in JavaScript crafting innovative digital solutions has always been
            my passion I specialise in building high-performance scalable web
            applications that drive digital transformation 🔚
          </p>

          <p>
            🔜 I'm <span className="Rehansdesign">Dar Rehan Rasool</span>, a
            Srinagar based developer blending computer science fundamentals with
            Modern web architecture. My work focuses on building verifiably
            correct systems from optimised React components to Node.js
            microservices with particular attention to healthcare technology
            applications where reliability matters most because technology
            should heal as much as it transforms 🔚
          </p>

          <a href={CV} download className="btn primary">
            Download Resume ➿ <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
