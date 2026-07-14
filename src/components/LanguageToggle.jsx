function LanguageToggle({ language, setLanguage, t }) {
  return (
    <button
      className="lang-toggle"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
    >
      {t.languageButton}
    </button>
  );
}

export default LanguageToggle;