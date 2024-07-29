import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTemplates,
  fetchTemplateData,
  selectTemplate,
} from "./TemplateSlice";
import CardTemplateDashboard from "../../../components/dashboard/CardTemplateDashboard";
import LogoLoading from "../../../components/loading/LogoLoading";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateList = () => {
  const dispatch = useDispatch();
  const { templates, status, error } = useSelector((state) => state.templates);
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTemplates());
    }
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDropdown(true);
      } else {
        setIsDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      AOS.refresh(); // Refresh AOS to ensure it only applies to this component
    };
  }, [status, dispatch]);

  const handleSelectTemplate = (templateId) => {
    const userId = 1; // Replace with actual user ID
    dispatch(selectTemplate({ userId, templateId })).then((action) => {
      if (selectTemplate.fulfilled.match(action)) {
        dispatch(fetchTemplateData(templateId)).then(() => {
          navigate("/dashboard/developer");
        });
      } else {
        console.error(action.payload || action.error.message);
      }
    });
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    AOS.refresh(); // Refresh AOS on filter change to reapply animations
  };

  const filteredTemplates =
    activeFilter === "All"
      ? templates
      : templates.filter((template) => template.name === activeFilter);

  const handlePreviewClick = (templateId) => {
    navigate(`/dashboard/preview/${templateId}`);
  };

  if (error === "No access token found") {
    return <p className="text-red-500">Please log in to view templates.</p>;
  }

  return (
    <div>
      {isDropdown ? (
        <select
          value={activeFilter}
          onChange={(e) => handleFilterClick(e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        >
          {["All", "Developer", "Photography", "Business", "Marketing"].map(
            (filterName) => (
              <option key={filterName} value={filterName}>
                {filterName}
              </option>
            )
          )}
        </select>
      ) : (
        <div className="flex gap-4">
          {["All", "Developer", "Photography", "Business", "Marketing"].map(
            (filterName) => (
              <button
                key={filterName}
                onClick={() => handleFilterClick(filterName)}
                className={`px-5 py-2 rounded-md border-2 dark:text-gray-100 transition-all duration-300 transform ${
                  activeFilter === filterName
                    ? "bg-primary text-white border-primary scale-105"
                    : "bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:scale-105"
                }`}
              >
                {filterName}
              </button>
            )
          )}
        </div>
      )}
      {status === "loading" && <LogoLoading />}
      {status === "succeeded" && (
        <div className="flex flex-wrap sm:gap-5 mt-5 justify-start">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex-1 min-w-[300px] max-w-[400px] md:min-w-[350px] lg:min-w-[300px]"
              data-aos="fade-up"
            >
              <CardTemplateDashboard
                imageSrc={template.image}
                title={template.name}
                onSelect={() => handleSelectTemplate(template.id)}
                onPreview={() => handlePreviewClick(template.id)}
              />
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TemplateList;
