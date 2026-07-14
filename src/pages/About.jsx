import { ShieldCheck } from "lucide-react";

function About({ t }) {
  return (
    <section className="section about">
      <div>
        <p className="eyebrow">{t.aboutEyebrow}</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </div>

      <div className="about-card">
        <ShieldCheck size={42} />

        <h3>{t.whyTitle}</h3>

        <ul>
          {t.whyList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;