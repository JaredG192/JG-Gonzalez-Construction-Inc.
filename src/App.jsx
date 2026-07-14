import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { translations } from './data/translations';

function App() {
  const [language, setLanguage] = React.useState('en');
  const t = translations[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} language={language} />} />
          <Route path="/services" element={<Services t={t} language={language} />} />
          <Route path="/gallery" element={<Gallery t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/contact" element={<Contact t={t} language={language} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;