import { Button } from "flowbite-react";
// import Project from "../../components/photography/Project";
import NavbarComponent from "../../components/photography/Navbar";
import HomepageComponent from "../../components/photography/Homepage";
import FooterComponent from "../../components/photography/Footer";
import React from 'react'
import AboutComponent from "../../components/photography/About";
import ProjectComponent from "../../components/photography/Project";
import BlogComponent from "../../components/photography/Blog";
import ContactUsComponent from "../../components/photography/ContactUs";
// import { PhotographyComponent } from "../../components/photography/Photography";

const PhotographyTemplate = () => {
  return (
    
    <div>
      <NavbarComponent/>
      <HomepageComponent/>
      <AboutComponent/>
      <ProjectComponent/>
      <BlogComponent/>
      <ContactUsComponent/>
      <FooterComponent/>
    </div>
  )
}

export default PhotographyTemplate

