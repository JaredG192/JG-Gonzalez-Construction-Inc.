import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/JJGLogo.png';
import logoText from '../assets/JJGLogo2.png';
import { company } from '../data/company';

function Header({ language, setLanguage, t }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="header">
      <Link className="brand" to="/">
        <div className="logo-container">
          <img src={logo} alt="JJ Gonzalez Construction Inc." className="logo" />

          <img
            src={logoText}
            alt="JJ Gonzalez Construction Inc."
            className="logo-text"
          />
        </div>
      </Link>

      <button className="menu-button" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        {t.nav.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}

        <button className="lang-toggle" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
          {t.languageButton}
        </button>

        <a className="nav-call" href={`tel:${company.phone}`}>{t.callNow}</a>
      </nav>
    </header>
  );
}

export default Header;