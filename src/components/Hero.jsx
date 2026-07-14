import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroVideo from "../assets/heroVideo.mov";
import hero1 from "../assets/hero.jpeg";
import hero2 from "../assets/hero2.png";

function Hero({ t }) {
  const slides = [
    { type: "video", src: heroVideo },
    { type: "image", src: hero1 },
    { type: "image", src: hero2 },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides[current].type === "video") return;

    const timer = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="hero">
    <div className="hero-content">
      <span className="eyebrow">{t.eyebrowHero}</span>
      <h1>{t.tagline}</h1>
      <p className="hero-text">{t.heroText}</p>

      <div className="hero-actions">
        <a className="button primary" href="/gallery">
          {t.viewWork}
        </a>
      </div>
    </div>

    {slides[current].type === "video" ? (
      <div className="hero-video-wrapper">
        <video className="hero-video-blur" autoPlay muted loop playsInline>
          <source src={slides[current].src} type="video/quicktime" />
        </video>

        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          onEnded={nextSlide}
        >
          <source src={slides[current].src} type="video/quicktime" />
        </video>
      </div>
    ) : (
      <div
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.68), rgba(0,0,0,.68)), url(${slides[current].src})`,
        }}
      />
    )}

    <button className="hero-arrow left" onClick={prevSlide}>
      <ChevronLeft size={36} />
    </button>

    <button className="hero-arrow right" onClick={nextSlide}>
      <ChevronRight size={36} />
    </button>
  </section>
);
}

export default Hero;