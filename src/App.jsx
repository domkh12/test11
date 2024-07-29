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
  return (
    <HelmetProvider>
      <SEO
        title="Showcase - Your Portfolio Builder"
        description="Build and customize your portfolio with ease using our portfolio builder."
        keywords="portfolio, builder, templates, showcase"
        url="https://5c74-175-100-10-208.ngrok-free.app/"
        image="https://i.pinimg.com/originals/f1/15/24/f11524ef3d2a23175a58213744311542.png"
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
