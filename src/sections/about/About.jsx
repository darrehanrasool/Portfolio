/* eslint-disable jsx-a11y/img-redundant-alt */
import AboutImage from "../../assets/Rehan1.jpg";
import CV from "../../assets/cv.pdf";
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
          <h2>
            <TbUserHeart></TbUserHeart> About Me
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
            Crafting innovative digital solutions has always been my passion,
            <span className="Rehansdesign">
              {" "}
              <LuWorkflow></LuWorkflow> 2+ years{" "}
            </span>{" "}
            in web development, I specialize in building high - performance,
            scalable web applications that drive digital transformation.
          </p>

          <p>
            Hi, I'm <span className="Rehansdesign">Rehan</span> from Srinagar,
            Kashmir! A passionate Software Developer skilled in modern web
            technologies, with expertise in Full-Stack Development and digital
            business solutions. I thrive on building dynamic applications,
            optimizing performance and Beyond web development, I’m interested in
            AI-driven medical projects and web-based healthcare solutions. My
            focus is on leveraging technology for impactful research and
            improving patient care through secure and efficient digital
            solutions.
          </p>

          <a href={CV} download className="btn primary">
            Download Resume  <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
