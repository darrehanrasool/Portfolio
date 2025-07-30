import { useState, useEffect } from "react";
import AboutImage from "../../assets/Rehan/About6.png";
import "./quote.css";

const Quotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    {
      id: 1,
      text: "The darkness that surrounds us cannot hurt us. It is the darkness in your own heart you should fear.",
      author: "Silence of the Lambs",
    },
    {
      id: 2,
      text: "We are all in the gutter, but some of us are looking at the stars.",
      author: "Oscar Wilde",
    },
    {
      id: 3,
      text: "The wound is the place where the Light enters you.",
      author: "Rumi",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToQuote = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="quotes">
      <div className="container">
        <h2 className="section-header">Quest</h2>

        <div className="quotes__container">
          <div className="portrait-container">
            <img src={AboutImage} alt="Portrait" className="portrait-image" />
          </div>

          <div className="quote-content">
            <div className="quote-carousel">
              {quotes.map((quote, index) => (
                <div
                  key={quote.id}
                  className={`quote-card ${
                    index === activeIndex
                      ? "active"
                      : index ===
                        (activeIndex - 1 + quotes.length) % quotes.length
                      ? "prev"
                      : ""
                  }`}
                >
                  <p className="quote-text">{quote.text}</p>
                  <p className="quote-author">— {quote.author}</p>
                </div>
              ))}
            </div>

            <div className="carousel-nav">
              {quotes.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => goToQuote(index)}
                />
              ))}
            </div>

            <div className="action-buttons">
              <a href="/resume.pdf" download className="action-btn">
                Download Resume
              </a>
              <a
                href="https://blog.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
              >
                Read My Blog
              </a>
              <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
              >
                My Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
