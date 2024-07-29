import React, { useState } from "react";
import NavbarComponent from "../../components/business/NavbarComponent";
import HeroSectionBusiness from "../../components/business/HeroSectionBusiness";
import ServiceSectionBusiness from "../../components/business/ServiceSectionBusiness";
import AboutSection from "../../components/business/AboutSection";
import IndustriesSection from "../../components/business/IndustriesSection";
import RecentProjectSection from "../../components/business/RecentProjectSection";
import BlogSection from "../../components/business/BlogSection";
import ContactSection from "../../components/business/ContactSection";
import FooterBusines from "../../components/business/FooterBusines";
import { FaChartLine, FaBriefcase, FaSearch } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const BusinessTemplate = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = ["About", "Project", "Blog", "Contact"];

  const services = [
    {
      icon: <FaChartLine />,
      name: "Strategic Planning",
      description:
        "Tortor dignissim convallis aenean et tortor at. Elementum nisi quis eleifend quam adipiscing vitae.",
    },
    {
      icon: <FaBriefcase />,
      name: "Financial Analysis",
      description:
        "Tortor dignissim convallis aenean et tortor at. Elementum nisi quis eleifend quam adipiscing vitae.",
    },
    {
      icon: <FaSearch />,
      name: "Market Research",
      description:
        "Tortor dignissim convallis aenean et tortor at. Elementum nisi quis eleifend quam adipiscing vitae.",
    },
  ];

  const recentProjectProps = {
    title: "Last Year We Have Completed 20+ Projects",
    subtitle: "OUR RECENT PROJECTS",
    categories: ["All", "Finance", "Analyzing", "Marketing"],
    projects: [
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: "/public/businessImg/RecentProject.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  };

  const industriesProps = {
    title: "We serve a wide variety of industries",
    subtitle: "WHY CHOOSE US?",
    industries: [
      {
        image: "/public/businessImg/Industries.png",
        title: "Faucibus et molestie ac",
        description:
          "Tortor dignissim convallis aenean et tortor at. Elementum nisi eleifend quam.",
      },
      {
        image: "/public/businessImg/Industries.png",
        title: "Egestas sed tempus urna",
        description:
          "Viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis.",
      },
      {
        image: "/public/businessImg/Industries.png",
        title: "Duis convallis convallis",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      },
    ],
  };

  const blogPosts = [
    {
      img: "/public/businessImg/blogImg1.png",
      author: "John Doe",
      title: "Which allows you to pay down insurance bills",
      description:
        "Ullamcorper a lacus vestibulum sed arcu non odio. Nulla porttitor massa id.",
    },
    {
      img: "/public/businessImg/blogImg1.png",
      author: "Jane Smith",
      title: "The importance of regular financial check-ups",
      description:
        "Vitae congue eu consequat ac felis donec et odio pellentesque.",
    },
    {
      img: "/public/businessImg/blogImg1.png",
      author: "Mike Johnson",
      title: "Understanding market trends for better investments",
      description:
        "Amet nisl suscipit adipiscing bibendum est ultricies integer quis.",
    },
  ];

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <NavbarComponent
        logo="/public/logoHomepage.png"
        title="Showcase"
        navItems={navItems}
        onDarkModeToggle={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <HeroSectionBusiness
        title={"Strategy and growth solutions for business"}
        desc={
          "At augue eget arcu dictum. Maecenas ultricies mi eget mauris pharetra et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Mattis nunc sed blandit libero. At consectetur lorem donec massa sapien."
        }
        button={"Learn more"}
        img={"public/businessImg/herosection.png"}
        imgAlt={"business Strategy"}
        isDarkMode={isDarkMode}
      />
      <ServiceSectionBusiness
        sectionTitle="Explore What We Offer"
        sectionSubtitle="OUR SERVICES"
        services={services}
        isDarkMode={isDarkMode}
      />
      <AboutSection
        img="public/businessImg/CompanyService.png"
        icon1="/public/businessImg/Service2.png"
        icon2="/public/businessImg/Service3.png"
        title="Choose Insurance Service Company"
        subtitle="ABOUT OUR COMPANY"
        description1="Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei debet persius, id eos sanctus persecuti."
        description2="Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei debet persius, id eos sanctus persecuti."
        feature1="Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad"
        feature2="Lorem ipsum dolor sit amet, ad his ignota verterem recusabo. Meis pericula eum ad"
        buttonText="Contact us now"
        isDarkMode={isDarkMode}
      />
      <IndustriesSection
        isDarkMode={isDarkMode}
        title={industriesProps.title}
        subtitle={industriesProps.subtitle}
        industries={industriesProps.industries}
      />
      <RecentProjectSection
        title={recentProjectProps.title}
        subtitle={recentProjectProps.subtitle}
        categories={recentProjectProps.categories}
        projects={recentProjectProps.projects}
        isDarkMode={isDarkMode}
      />
      <BlogSection isDarkMode={isDarkMode} blogPosts={blogPosts} />
      <ContactSection
        isDarkMode={isDarkMode}
        title="Don't Be a Stranger Just Say Hello."
        subtitle="GET IN TOUCH"
        description="Accumsan in nisl nisi scelerisque eu. Massa id neque aliquam vestibulum morbi blandit cursus. Molestie ac feugiat sed lectus vestibulum mattis."
        phoneNumbers={["+855 44 65 4545", "+855 44 65 4545"]}
        emails={["showcase@gmail.com", "info@gmail.com"]}
        officeLocation="TDP Agency The Barn Moat House Farm IP7 7DB"
      />
      <FooterBusines
        isDarkMode={isDarkMode}
        navItems={["Home", "About", "Services", "Projects", "Blog", "Contact"]}
        socialIcons={[FaGithub, FaFacebook, FaTwitter, FaLinkedin]}
        developerInfo="@Showcase"
      />
    </div>
  );
};

export default BusinessTemplate;
