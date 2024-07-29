import React, { useState } from 'react';
import PostComponent from './PostComponent';
import { NormalButton } from './ButtonPrimary';
import { motion } from 'framer-motion';
import { duration } from '@mui/material';

const BgNone = "text-marketing-main-color bg-transparent border-marketing-main-color hover:text-button-hover p-2 w-22 rounded-xl";
const Bg = "text-button-hover border-button-hover p-2 w-22 rounded-xl";

const posts = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FYi7NhsaaJF2Q73WhDtnUfQhOmB5CDxFDy8qFO7obr6GfBO",
    category: "Marketing",
    date: "September 1, 2022",
    title: "How to increase your Twitter reach by over 200% with this simple trick"
  },
];

function PostSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const renderPosts = () => {
    const filteredPosts = activeCategory === 'All' 
      ? posts 
      : posts.filter(post => post.category === activeCategory);

    if (filteredPosts.length === 0) {
      return(
      <motion.div className='text-center'
      initial={{scale: 0.8}}
      whileInView={{scale: 1}}
      transition={{duration: 0.5}}
      >
        <div className="mt-16 text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-500 to-orange-300">404 Not Found</div>
        <p className='text-xl text-marketing-main-color'>Oops, this page is not found</p>
      </motion.div>)
    }

    return filteredPosts.map((post, index) => (
      <PostComponent
        key={index}
        imageUrl={post.imageUrl}
        category={post.category}
        date={post.date}
        title={post.title}
      />
    ));
  };

  return (
    <div>
      <motion.nav className='flex flex-col mx-0 mt-32 gap-5 justify-between items-center sm:flex-row sm:items-start sm:mx-16 md:mx-32 lg:mx-60'
      initial={{y: -50, opacity: 0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      >
        <h2 className='text-xl font-semibold mt-2'>Latest Post</h2>
        <ul className='flex flex-row gap-1'>
          {['All', 'Growth', 'Content', 'Social Media'].map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? Bg : BgNone}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
      <div className='flex flex-row flex-wrap mx-0 gap-5 items-center justify-center sm:mx-32'>
        {renderPosts()}
      </div>
    </div>
  );
}

export default PostSection;
