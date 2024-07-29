// components/seo/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
  const ogImageUrl = `https://test11-ecru.vercel.app/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="telegram:card" content="summary_large_image" />
      <meta name="telegram:title" content={title} />
      <meta name="telegram:description" content={description} />
      <meta name="telegram:image" content={ogImageUrl} />
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:title" content={title} />
      <meta name="github:description" content={description} />
      <meta name="github:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEO;
