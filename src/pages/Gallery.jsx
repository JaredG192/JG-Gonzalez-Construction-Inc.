import { useState } from "react";
import { gallery } from "../data/gallery";

function Gallery({ t, language }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section dark-section">
      <div className="section-heading">
        <p className="eyebrow">{t.galleryEyebrow}</p>
        <h2>{t.galleryTitle}</h2>
        <p>{t.galleryText}</p>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.title[language]}
            />

            <div className="gallery-caption">
              <span>{item.category[language]}</span>
              <h3>{item.title[language]}</h3>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img
            src={selected.image}
            alt={selected.title[language]}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;