// src/components/Login/Loginsection.jsx

import React from "react";
import { motion } from "framer-motion";
import LoginSection from "../../components/Login/LoginSection";
// import LoginSection from "../../components/Login/LoginSection";

const Login = () => {
  return (
    <HelmetProvider>
      <SEO
        title="Showcase - Your Portfolio Builder"
        description="Build and customize your portfolio with ease using our portfolio builder."
        keywords="portfolio, builder, templates, showcase"
        url="https://test11-ecru.vercel.app/"
        image="https://i.pinimg.com/originals/f1/15/24/f11524ef3d2a23175a58213744311542.png"
      />
   
    <div>
      <LoginSection />
    </div>
    </HelmetProvider>
  );
};

export default Login;
