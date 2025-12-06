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
          ❝ IBM <span className="Rehansdesign"> AI & Data</span> Specialist
          with MERN expertise weaving Magic using Machine Learning
          React Node.js and AI models Building High performance 
          systems Transforming businesses with Data insights Let's innovate
          Together ❞
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