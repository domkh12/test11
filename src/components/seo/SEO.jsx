import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="telegram:card" content="summary_large_image" />
      <meta name="telegram:title" content={title} />
      <meta name="telegram:description" content={description} />
      <meta name="telegram:image" content={image} />
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:title" content={title} />
      <meta name="github:description" content={description} />
      <meta name="github:image" content={image} />
    </Helmet>
  );
};

export default SEO;
