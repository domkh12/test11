import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTop from "react-scroll-to-top";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo/SEO";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
function App() {
  const url = "https://test11-ecru.vercel.app/";
  return (
    
    <HelmetProvider>
      <SEO
        title="Showcase - Your Portfolio Builder"
        description="Build and customize your portfolio with ease using our portfolio builder."
        keywords="portfolio, builder, templates, showcase"
        url={url}
        image="/imgSeo.png"
      />

      <header>
        <NavBarComponent />
      </header>
      <main>
        <HeroSection />
        <TemplatesSection />
        <FeatureSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollToTopButton />
    </HelmetProvider>
  );
}

export default App;
