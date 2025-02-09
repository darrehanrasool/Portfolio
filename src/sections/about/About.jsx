/* eslint-disable jsx-a11y/img-redundant-alt */
import AboutImage from "../../assets/Rehan1.jpg";
import CV from "../../assets/cv.pdf";
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
          <h2>About Me</h2>
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
            Crafting innovative digital experiences has always been my passion.
            With 2+ years in web development, I specialize in building
            high-performance, user-centric websites and scalable solutions.
          </p>
          <p>
            Hi, I’m Rehan from Srinagar, Kashmir — a software developer with
            expertise in modern web technologies. Beyond development, I have a
            strong passion for AI research, particularly in healthcare, where I
            aim to leverage machine learning for impactful solutions. Let’s
            collaborate—share your project details, and let’s build something
            great together!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
