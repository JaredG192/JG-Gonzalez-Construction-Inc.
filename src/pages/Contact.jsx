import { Phone, MessageCircle, MapPin } from "lucide-react";
import { company } from "../data/company";
import contactPhoto from "../assets/hero.jpeg";

function Contact({ t, language }) {
  return (
    <section className="section contact contact-page">
      <div className="contact-box">
        <p className="eyebrow">{t.contactEyebrow}</p>

        <h2>{t.contactTitle}</h2>

        <p className="contact-intro">{t.contactIntro}</p>

        <div className="contact-actions">
          <a className="button contact-button" href={`tel:${company.phone}`}>
            <Phone size={20} />
            {t.callButton}
          </a>

          <a
            className="button contact-button secondary-contact"
            href={`sms:${company.phone}`}
          >
            <MessageCircle size={20} />
            {t.textButton}
          </a>
        </div>

     <div className="contact-list">
  <p>
    <Phone size={20} />
    <span>
      {t.callOrText}: {company.phone}
    </span>
  </p>

  <p>
    <MapPin size={20} />
    <span>
      {company.area[language]}
    </span>
  </p>
</div>
      </div>

      <div className="contact-image">
        <img src={contactPhoto} alt="Excavation project" />
      </div>
    </section>
  );
}

export default Contact;