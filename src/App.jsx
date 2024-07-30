import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
function App() {
  return (
    <HelmetProvider>
     <Helmet>
      <title>"Showcase - Your Portfolio"</title>
      <meta name="description" content="Build and" />
      <meta name="keywords" content="https://i.pinimg.com/originals/f1/15/24/f11524ef3d2a23175a58213744311542.png" />
      <meta property="og:title" content="Showcase - Your Portfolio" />
      <meta property="og:description" content="Build and" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://test11-ecru.vercel.app/" />     
      </Helmet>

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
