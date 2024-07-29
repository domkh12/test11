import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { fetchPublicTemplates } from "../../redux/feature/websitetemplate/publictemplate/publicTemplatesSlice";
import CardTemplate from "./CardTemplate"; // Adjust the import based on your file structure

function TemplatesSection() {
  const [slidesToShow, setSlidesToShow] = useState(3); // Initial value
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { templates, status, error } = useSelector(
    (state) => state.publicTemplates
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPublicTemplates());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust the number of slides based on window width
      if (windowWidth < 532) {
        setSlidesToShow(1);
      } else if (windowWidth < 540) {
        setSlidesToShow(1.2);
      } else if (windowWidth < 768) {
        setSlidesToShow(1.4);
      } else if (windowWidth < 800) {
        setSlidesToShow(1.5);
      } else if (windowWidth < 950) {
        setSlidesToShow(1.6);
      } else if (windowWidth < 1280) {
        setSlidesToShow(1.7);
      } else if (windowWidth < 1350) {
        setSlidesToShow(1.9);
      } else if (windowWidth < 1536) {
        setSlidesToShow(2);
      } else if (windowWidth < 1650) {
        setSlidesToShow(2.2);
      } else if (windowWidth > 1650) {
        setSlidesToShow(2.7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow, // Dynamically set based on state
    centerMode: true,
    centerPadding: "10px",
  };

  const handleCardClick = () => {
    const isLoggedIn = !!getAccessToken();
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <section
      className="sm:py-10 lg:px-40 sm-max:px-0 sm:px-10 sm-max:py-5 bg-[#F7F7F7] dark:bg-gray-800 font-sans section"
      name="template"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="xl:text-4xl text-primary font-semibold sm:text-2xl sm-max:text-2xl sm-max:px-10 sm-max:text-center">
          Transform your work into art with our templates
        </h2>
        <p className="text-lg dark:text-gray-100">Our popular templates!</p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>

      <div className="slider-container mt-10 sm-max:mx-5">
        {status === "loading" && (
          <Slider {...settings}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="px-5">
                <Skeleton height={200} />
                <Skeleton
                  width="60%"
                  height={30}
                  style={{ marginTop: "1rem" }}
                />
              </div>
            ))}
          </Slider>
        )}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <Slider {...settings}>
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={handleCardClick}
                className="cursor-pointer"
              >
                <div className="px-5">
                  <CardTemplate image={template.image} type={template.name} />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default TemplatesSection;
