import AboutImage from "../../assets/Rehan/About2.png";
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
              🔜 " In the silence of focused creation, complex systems become
              clear "
            </span>{" "}
            I'm Dar Rehan Rasool , a{" "}
            <span className="Rehansdesign">
              <LuWorkflow /> MERN
            </span>{" "}
            developer from Srinagar with a B-Tech in Computer Science. With 2+
            years experience in{" "}
            <span className="Rehansdesign">
              <LuWorkflow /> JavaScript
            </span>
            ,I build scalable apps where clean code meets practical solutions.
          </p>

          <p>
            My focus spans from React interfaces to Node.js backends, with
            special attention to{" "}
            <span className="Rehansdesign"> ⚕️ healthcare technology </span>{" "}
            where reliability matters most. I bridge academic theory with
            real-world development to create systems that works efficiently.
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
