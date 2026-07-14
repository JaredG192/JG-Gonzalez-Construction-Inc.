import { Link } from 'react-router-dom';
import { gallery } from '../data/gallery';

function ProjectsPreview({ language }) {
  return (
    <section className="section dark-section">
      <div className="section-heading">
        <p className="eyebrow">
          {language === 'en' ? 'Recent projects' : 'Proyectos recientes'}
        </p>

        <h2>
          {language === 'en'
            ? 'A look at excavation and site prep work.'
            : 'Un vistazo a trabajos de excavación y preparación de terrenos.'}
        </h2>
      </div>

      <div className="gallery-grid">
       {gallery.slice(0, 3).map((item, index) => (
  <img
    key={index}
    src={item.image}
    alt={item.title}
  />
))}
      </div>

      <div className="center-button">
        <Link className="button primary" to="/gallery">
          {language === 'en' ? 'View Full Gallery' : 'Ver Galería'}
        </Link>
      </div>
    </section>
  );
}

export default ProjectsPreview;