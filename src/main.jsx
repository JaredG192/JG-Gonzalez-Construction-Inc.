import React from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Mail, MapPin, Truck, Mountain, Shovel, Hammer, ShieldCheck, Menu, X } from 'lucide-react';
import './styles.css';

const company = {
  name: 'Gonzalez Excavation',
  tagline: 'Reliable excavation, grading, trenching, and site preparation.',
  phone: '(555) 555-5555',
  email: 'info@gonzalezexcavation.com',
  area: 'Serving San Bernardino County and surrounding areas',
};

const services = [
  { icon: Mountain, title: 'Grading & Leveling', text: 'Prepare lots, driveways, pads, and work areas with clean, accurate grading.' },
  { icon: Shovel, title: 'Trenching', text: 'Utility, drainage, irrigation, and foundation trenching for residential and commercial jobs.' },
  { icon: Truck, title: 'Land Clearing', text: 'Brush, debris, dirt, and material removal to get your property ready for the next step.' },
  { icon: Hammer, title: 'Site Preparation', text: 'Complete prep work before concrete, building, landscaping, drainage, or road projects.' },
];

const gallery = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=900&q=80',
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Services', 'Gallery', 'About', 'Contact'];

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Home">
        <span className="brand-mark">GE</span>
        <span>{company.name}</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
        <a className="nav-call" href={`tel:${company.phone}`}>Call Now</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Family-owned excavation services</p>
        <h1>{company.tagline}</h1>
        <p className="hero-text">From land clearing to precise trenching and grading, we help homeowners, contractors, and property owners get the job site ready.</p>
        <div className="hero-actions">
          <a className="button primary" href="#gallery">View Our Work</a>
          <a className="button secondary" href={`tel:${company.phone}`}>{company.phone}</a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Excavation services built around clean, dependable work.</h2>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="card" key={title}>
            <Icon className="card-icon" size={34} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section dark-section">
      <div className="section-heading">
        <p className="eyebrow">Project gallery</p>
        <h2>Photos from recent excavation and site prep work.</h2>
        <p>Replace these sample images with your dad’s real job-site photos.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((src, index) => (
          <img key={src} src={src} alt={`Excavation project ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div>
        <p className="eyebrow">About us</p>
        <h2>Hard-working equipment, honest communication, and job sites left ready for the next phase.</h2>
        <p>Gonzalez Excavation helps property owners and contractors with practical excavation, grading, clearing, and trenching services. Add your dad’s story here: how long he has been doing excavation, what areas he serves, and what makes his work reliable.</p>
      </div>
      <div className="about-card">
        <ShieldCheck size={42} />
        <h3>Why customers choose us</h3>
        <ul>
          <li>Clear communication before work begins</li>
          <li>Dependable equipment and skilled operation</li>
          <li>Residential and small commercial project experience</li>
          <li>Clean, practical site preparation</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-box">
        <p className="eyebrow">Contact</p>
        <h2>Need excavation work? Call or email for a quote.</h2>
        <div className="contact-list">
          <a href={`tel:${company.phone}`}><Phone size={20} /> {company.phone}</a>
          <a href={`mailto:${company.email}`}><Mail size={20} /> {company.email}</a>
          <p><MapPin size={20} /> {company.area}</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer>© {new Date().getFullYear()} {company.name}. All rights reserved.</footer>;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
