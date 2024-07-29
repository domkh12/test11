import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {  
  return (
    <Helmet>
      <meta property="og:image" content="https://popupsmart.com/blog/user/pages/365.free-keyword-research-tools/Free-keyword-research-tools-cover.png"/>

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      {/* <meta property="og:image" content={image} /> */}
    </Helmet>
  );
};

export default SEO;
