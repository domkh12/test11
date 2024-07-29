import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = ({ isDarkMode, blogPosts }) => {
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-[#f7f7f7]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const subtitleColor = "text-orange-400";

  return (
    <section className={`py-16 w-full ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium ${subtitleColor} mb-2`}>BLOG & NEWS</p>
          <h2 className={`text-4xl font-bold ${textColor}`}>Blog & Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              img={post.img}
              author={post.author}
              title={post.title}
              description={post.description}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;