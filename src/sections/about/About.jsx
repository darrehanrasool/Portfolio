import AboutImage from "../../assets/Rehan/About1.jpg";
import CV from "../../assets/certifications/resume.pdf";
import { HiDownload } from "react-icons/hi";
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
            I'm Dar Rehan Rasool , an{" "}
            <span className="Rehansdesign">IBM AI & Data</span> specialist with
            MERN expertise from Srinagar With 1+ years experience in{" "}
            <span className="Rehansdesign">full-stack development</span>, I
            build intelligent systems where clean code meets AI solutions
          </p>

          <p>
            My focus spans from React interfaces to AI model deployment, with
            special attention to{" "}
            <span className="Rehansdesign"> machine learning integration </span>{" "}
            where data insights matter most I bridge IBM technologies with MERN
            development to create systems that works intelligently
          </p>

          <a href={CV} download className="btn primary">
            Download Resume ⌘ <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;