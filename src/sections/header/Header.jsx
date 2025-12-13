import { useEffect } from "react";
import HeaderImage from "../../assets/Rehan/Header1.png";
import { LuWorkflow } from "react-icons/lu";
import { IoChatbox } from "react-icons/io5";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Dar Rehan Rasool</h3>
        <p data-aos="fade-up text">
          ❝ A passionate <span className="Rehansdesign">Full-Stack Developer</span> specializing in the MERN stack. 
          Building high-performance web applications with React, Node.js, and scalable architectures. 
          Transforming business requirements into efficient, maintainable, and user-centric solutions. 
          Let's create something impactful together ❞
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#location" className="btn primary">
            <IoChatbox></IoChatbox> Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            <LuWorkflow></LuWorkflow> My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip={item.tooltip}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;