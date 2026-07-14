import { services } from '../data/services';


function Services({ t, language }) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">{t.servicesEyebrow}</p>
        <h2>{t.servicesTitle}</h2>
      </div>

      <div className="service-grid">
        {services.map(({ icon: Icon, en, es }) => (
          <article className="card" key={en}>
            <Icon className="card-icon" size={34} />
            <h3>{language === 'en' ? en : es}</h3>
            <p>
              {language === 'en'
                ? 'Professional excavation service for residential and commercial job sites.'
                : 'Servicio profesional de excavación para trabajos residenciales y comerciales.'}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;