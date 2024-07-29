import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader spinner
import { fetchTemplateData } from "../../redux/feature/websitetemplate/TemplateSlice";
import { fetchWorkExperiences } from "../../redux/feature//websitetemplate/WorkExperienceSlice";
import { fetchContacts } from "../../redux/feature/websitetemplate/ContactSlice";
import { fetchBlogs } from "../../redux/feature/websitetemplate/BlogSlice";
import { fetchSkills } from "../../redux/feature/websitetemplate/SkillSlice";
import { fetchServices } from "../../redux/feature/websitetemplate/ServiceSlice";
import { fetchProjects } from "../../redux/feature/websitetemplate/ProjectSlice";
import NavBarComponent from "../../components/developercomponent/Navbar";
import HeroSection from "../../components/developercomponent/HeroSection";
import AboutMeSectionDev from "../../components/developercomponent/AboutMeSectionDev";
import MyResumeSection from "../../components/developercomponent/MyResumeSection";
import MySkillSection from "../../components/developercomponent/MySkillSection";
import MyProject from "../../components/developercomponent/MyProject";
import BlogSection from "../../components/developercomponent/BlogSection";
import ContactSection from "../../components/developercomponent/ContactSection";
import FooterSection from "../../components/developercomponent/FooterSection";

const DeveloperTemplate = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(
    localStorage.getItem('isEditing') === 'true'
  );
  
  const {
    templateData,
    status: templateStatus,
    error: templateError,
  } = useSelector((state) => state.templates);
  const {
    workExperiences,
    status: workStatus,
    error: workError,
  } = useSelector((state) => state.workExperiences);
  const {
    contacts,
    status: contactStatus,
    error: contactError,
  } = useSelector((state) => state.contacts);
  const {
    blogs,
    status: blogStatus,
    error: blogError,
  } = useSelector((state) => state.blogs);
  const {
    skills,
    status: skillStatus,
    error: skillError,
  } = useSelector((state) => state.skills);
  const {
    services,
    status: serviceStatus,
    error: serviceError,
  } = useSelector((state) => state.services);
  const {
    projects,
    status: projectStatus,
    error: projectError,
  } = useSelector((state) => state.projects);

  useEffect(() => {
    const templateId = 1;
    dispatch(fetchTemplateData(templateId));
    dispatch(fetchWorkExperiences());
    dispatch(fetchContacts());
    dispatch(fetchBlogs());
    dispatch(fetchSkills());
    dispatch(fetchServices());
    dispatch(fetchProjects());
  }, [dispatch, isEditing]);

  if (
    templateStatus === "loading" ||
    workStatus === "loading" ||
    contactStatus === "loading" ||
    blogStatus === "loading" ||
    skillStatus === "loading" ||
    serviceStatus === "loading" ||
    projectStatus === "loading"
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#4C3DE3"} loading={true} />
      </div>
    );
  }

  const staticData = {
    name: "Elon Musk",
    profession: "Developer",
    biography: "CEO and chief engineer of SpaceX, a private aerospace manufacturer.",
    heroImage: "/developerimage/imgHeroDev.png",
    socialMediaLinks: [
      { type: "facebook", url: "https://facebook.com/" },
      { type: "github", url: "https://github.com/" },
    ],
    
    sectionImage:
      "/developerimage/aboutImg.png",
    title: "Elon",
    lastName: "Musk",
    birthDate: "24 April 1993",
    nationality: "Khmer",
    experience: "7 years",
    address: "Phnom Penh",
    freelance: "Available",
    language: "Khmer, English",
    phone: "+855 977 34 54 71",
    email: "example@gmail.com",
    logoImage: "/logoHomepage.png",
    textLogo: "Showcase",
    workExperiences: [
      {
        id: 1,
        title: "Software Engineer",
        subtitle: "Tech Solutions Inc.",
        description: "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive design and ensured cross-browser compatibility."
      },
      {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Creative Agency",
        description: "Designed and built user interfaces for client websites using HTML, CSS, and JavaScript. Worked closely with designers to translate wireframes and mockups into interactive and responsive web pages. Optimized website performance and enhanced user experience."
      },
      {
        id: 3,
        title: "Junior Web Developer",
        subtitle: "Startup Hub",
        description: "Assisted in the development of e-commerce platforms and content management systems. Gained experience in full-stack development with a focus on frontend technologies. Participated in code reviews and contributed to the improvement of coding standards."
      },
    ],
    skills: [
      {
        id: 1,
        title: "Python",
        image: [
          {
            url: "/developerimage/pythonImg.png",
          },
        ],
      },
      {
        id: 2,
        title: "Javascript",
        image: [
          {
            url: "/developerimage/javascriptImg.png",
          },
        ],
      },
      {
        id: 3,
        title: "Java",
        image: [
          {
            url: "/developerimage/javaImg.png",
          },
        ],
      },
      {
        id: 4,
        title: "C#",
        image: [
          {
            url: "/developerimage/cSharp.png",
          },
        ],
      },
      {
        id: 5,
        title: "Swift",
        image: [
          {
            url: "/developerimage/swift.png",
          },
        ],
      },
      {
        id: 6,
        title: "TypeScript",
        image: [
          {
            url: "/developerimage/typeScript.png",
          },
        ],
      },
      {
        id: 7,
        title: "Kotlin",
        image: [
          {
            url: "/developerimage/kotlin.png",
          },
        ],
      },
      {
        id: 8,
        title: "Ruby",
        image: [
          {
            url: "/developerimage/ruby.png",
          },
        ],
      },
      {
        id: 8,
        title: "Rust",
        image: [
          {
            url: "/developerimage/rust.png",
          },
        ],
      },
      {
        id: 9,
        title: "Go",
        image: [
          {
            url: "/developerimage/go.png",
          },
        ],
      },
    ],
    projects: [
      {
        id: 1,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project1.png",
      },
      {
        id: 2,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project2.png",
      },
      {
        id: 3,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project3.png",
      },
      {
        id: 4,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project4.png",
      },
      {
        id: 5,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project5.png",
      },
      {
        id: 6,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        project_image:
          "/developerimage/project6.png",
      },
      
    ],
    blogs: [
      {
        id: 1,
        title: "The Importance Of Web Design",
        description: "This blog post underscores the importance of web design as an integral part of the marketing strategy.",
        image: [
          {
            url: "/developerimage/blog1.png",
          },
        ],
      },
      {
        id: 2,
        title: "Mobile-First Approach",
        description: "With the increasing dominance of mobile devices, responsive and mobile-optimized web...",
        image: [
          {
            url: "/developerimage/blog2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Personalization and User Experience",
        description: "Personalized user experiences, tailored to individual preferences and behaviors...",
        image: [
          {
            url: "/developerimage/blog3.png",
          },
        ],
      },
    ],
    contacts: [
      {
        id: 1,
        address: "123 Main St",
        contact_email: "example@gmail.com",
        phone: "123-456-7890",
      },
    ],
  };

  const mergedTemplateData = templateData || staticData;
  const mergedWorkExperiences = workExperiences.length
    ? workExperiences
    : staticData.workExperiences;
  const mergedContacts = contacts.length ? contacts : staticData.contacts;
  const mergedBlogs = blogs.length ? blogs : staticData.blogs;
  const mergedSkills = skills.length ? skills : staticData.skills;
  const mergedProjects = projects.length ? projects : staticData.projects;
  console.log("mergedTemplateData.portfolio_avatar",mergedTemplateData.portfolio_avatar)
  return (
    <div className="w-full h-auto">
      <NavBarComponent
        logo={mergedTemplateData.portfolio_avatar || staticData.logoImage}
        textLogo={mergedTemplateData.title || staticData.textLogo}
      />
      <HeroSection
        heroImage={mergedTemplateData.hero_image || staticData.heroImage}
        introduction="INTRODUCTION"
        name={mergedTemplateData.name || staticData.name}
        profession={mergedTemplateData.profession || staticData.profession}
        bio={mergedTemplateData.biography || staticData.biography}
        socialMediaLinks={(
          mergedTemplateData.social_media_link_json ||
          staticData.socialMediaLinks
        ).map((url, index) => ({
          type: index === 0 ? "facebook" : "github",
          url,
        }))}
      />
      <AboutMeSectionDev
        avatar={mergedTemplateData.section_image || staticData.sectionImage}
        firstName={mergedTemplateData.title || staticData.title}
        lastName={mergedTemplateData.lastName || staticData.lastName}
        birthDate={mergedTemplateData.birthDate || staticData.birthDate}
        nationality={mergedTemplateData.nationality || staticData.nationality}
        experience={mergedTemplateData.experience || staticData.experience}
        address={mergedTemplateData.address || staticData.address}
        freelance={mergedTemplateData.freelance || staticData.freelance}
        language={mergedTemplateData.language || staticData.language}
        phone={mergedTemplateData.phone || staticData.phone}
        email={mergedTemplateData.email || staticData.email}
      />
      <MyResumeSection workExperiences={mergedWorkExperiences} />
      <MySkillSection skills={mergedSkills} />
      <MyProject projects={mergedProjects} />
      
      <BlogSection blogs={mergedBlogs} />
      <ContactSection
        initialAddress={mergedContacts[0]?.address}
        initialEmail={mergedContacts[0]?.contact_email}
        initialPhone={mergedContacts[0]?.phone}
      />
      <FooterSection />
    </div>
  );
};

export default DeveloperTemplate;
