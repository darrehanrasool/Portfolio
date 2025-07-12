import { useEffect } from "react";
import HeaderImage from "../../assets/Rehan/rehan7.jpeg";
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
          🔜 Full Stack <span className="Rehansdesign"> MERN</span> Developer
          with a knack for weaving Digital Magic using the Dynamic trio of React
          Node.js and Express . Building High performance,Scalable websites 〰️
          Bringing Businesses into the Digital world Let's innovate Together 🔙
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
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
