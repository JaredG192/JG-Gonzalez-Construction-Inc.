import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import ProjectsPreview from "../components/ProjectsPreview";

function Home({ t, language }) {
  return (
    <>
      <Hero t={t} />
      <ServicesPreview t={t} language={language} />
      <ProjectsPreview language={language} />
    </>
  );
}

export default Home;