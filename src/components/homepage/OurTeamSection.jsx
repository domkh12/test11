import React, { useEffect, useState } from "react";
import CardTeam from "./CardTeam";
import Slider from "react-slick";

function OurTeamSection() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust the number of slides based on window width
      if (windowWidth < 540) {
        setSlidesToShow(1.6);
      } else if (windowWidth < 640) {
        setSlidesToShow(1.8);
      } else if (windowWidth < 768) {
        setSlidesToShow(2);
      } else if (windowWidth < 868) {
        setSlidesToShow(2.3);
      } else if (windowWidth < 968) {
        setSlidesToShow(2.6);
      } else if (windowWidth < 1068) {
        setSlidesToShow(2.9);
      } else if (windowWidth < 1168) {
        setSlidesToShow(3.2);
      } else if (windowWidth < 1268) {
        setSlidesToShow(3.5);
      } else if (windowWidth < 1368) {
        setSlidesToShow(3.8);
      } else if (windowWidth < 1468) {
        setSlidesToShow(4.1);
      } else if (windowWidth < 1568) {
        setSlidesToShow(4.4);
      } else if (windowWidth < 1609) {
        setSlidesToShow(5);
      } else if (windowWidth > 1609) {
        setSlidesToShow(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow,
  };

  const teamMembers = [
    {
      title: "EI CHANUDOM",
      role: "Front-End/UX/UI",
      github: "https://github.com/domkh12",
      facebook: "https://www.facebook.com/ei.chanudom/",
      img: "homepageImg/udom.png",
    },
    {
      title: "MOM RAKSMEY",
      role: "Front-End/UX/UI",
      github: "https://github.com/raksmeymom",
      facebook: "https://www.facebook.com/profile.php?id=100069487637655&mibextid=ZbWKwL",
      img: "homepageImg/raksmey.png",
    },
    {
      title: "RETH SARAKNORIN",
      role: "Front-End/UX/UI",
      github: "https://github.com/itsmestevee",
      facebook: "https://www.facebook.com/bobaaa13?mibextid=LQQJ4d",
      img: "homepageImg/norin.png",
    },
    {
      title: "SOY SREYTEY",
      role: "Front-End/UX/UI",
      github: "https://github.com/Zeiitey",
      facebook:
        "https://www.facebook.com/profile.php?id=100057300903859&mibextid=LQQJ4d",
      img: "homepageImg/tey.png",
    },
    {
      title: "HOR RATHA",
      role: "Front-End/UX/UI",
      github: "https://github.com/HorRatha",
      facebook: "https://www.facebook.com/thouy.dp.7?mibextid=LQQJ4d",
      img: "homepageImg/rotha.png",
    },
    {
      title: "SRIV NARY",
      role: "Front-End/UX/UI",
      github: "https://github.com/SrivNary",
      facebook:
        "https://www.facebook.com/profile.php?id=100046388491383&mibextid=ZbWKwL",
      img: "homepageImg/nary.png",
    },
    {
      title: "SEM SOPAHNA",
      role: "Front-End/UX/UI",
      github: "https://github.com/SopanhaSem",
      facebook: "https://www.facebook.com/profile.php?id=100035612538137",
      img: "homepageImg/panha.png",
    },
    {
      title: "NGOV BUNSINH",
      role: "Front-End/UX/UI",
      github: "https://github.com/Bunsinhh",
      facebook: "https://www.facebook.com/NAMWOOON",
      img: "homepageImg/bunsinh.png",
    },
    {
      title: "KHUON CHHOEURN",
      role: "Front-End/UX/UI",
      github: "https://github.com/ChhoeunKhuon",
      facebook: "https://www.facebook.com/mnus.tmey.94064?mibextid=ZbWKwL",
      img: "homepageImg/chhoeurn.png",
    },
  ];

  const mentors = [
    {
      title: "SANG SOKEA",
      role: "Mentor",
      github: "https://github.com/sangsokea",
      facebook: "https://www.facebook.com/sang.sokea.7",
      img: "https://i.pinimg.com/originals/17/7f/cb/177fcb59d048fdf27b627b08119e02a1.png",
    },
    {
      title: "SIN SREYPHEA",
      role: "Mentor",
      github: "https://github.com/sreypheasin",
      facebook: "https://www.facebook.com/sreyphea.sin?mibextid=LQQJ4d",
      img: "https://i.pinimg.com/originals/db/e9/3e/dbe93ed4781896ef5c33375e1f9bd797.jpg",
    },
  ];

  return (
    <section
      className="py-20 font-sans section bg-[#F7F7F7] dark:bg-gray-800 lg:px-40"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6 sm-max:px-5">
        <h2 className="text-4xl text-primary font-semibold">About Us</h2>
        <p className="text-lg dark:text-gray-100 sm-max:text-center">
          Showcase.com has everything you need. Whatever you want to do, we have
          a feature for it.
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="sm-max:mx-5 slider-container mt-10">
        <div className="lg:flex lg-max:hidden flex justify-center lg:gap-20 items-center">
          {mentors.map((mentor) => (
            <CardTeam
              key={mentor.title}
              title={mentor.title}
              role={mentor.role}
              github={mentor.github}
              facebook={mentor.facebook}
              img={mentor.img}
            />
          ))}
        </div>
        <div className="lg:hidden sm:flex flex-wrap justify-center items-center sm:max:justify-center sm-max:items-center sm-max:flex gap-20">
          {mentors.map((mentor) => (
            <CardTeam
              key={mentor.title}
              title={mentor.title}
              role={mentor.role}
              github={mentor.github}
              facebook={mentor.facebook}
              img={mentor.img}
            />
          ))}
          {teamMembers.map((member) => (
            <CardTeam
              key={member.title}
              title={member.title}
              role={member.role}
              github={member.github}
              facebook={member.facebook}
              img={member.img}
            />
          ))}
        </div>
        <Slider {...settings} className="lg-max:hidden lg:block">
          {teamMembers.map((member) => (
            <CardTeam
              key={member.title} // Important for performance optimization
              title={member.title}
              role={member.role}
              github={member.github}
              facebook={member.facebook}
              img={member.img}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurTeamSection;
