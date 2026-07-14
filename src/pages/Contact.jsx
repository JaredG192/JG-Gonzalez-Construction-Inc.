import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '../data/company';

function Contact({ t, language }) {
  return (
    <section className="section contact">
      <div className="contact-box">
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h2>{t.contactTitle}</h2>

        <div className="contact-list">
          <a href={`tel:${company.phone}`}><Phone size={20} /> {company.phone}</a>
          <a href={`mailto:${company.email}`}><Mail size={20} /> {company.email}</a>
          <p><MapPin size={20} /> {company.area[language]}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;