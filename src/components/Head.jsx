import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/sass/main.scss';

const DOMAIN = 'monika-portfolio-site.netlify.app';
const BASE_URL = `https://${DOMAIN}`;

const Head = ({ title, description }) => {
  return (
    <Helmet meta={[{ name: 'keywords', content: 'photography, web' }]}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook Meta Tags  */}
      <meta property="og:url" content={BASE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/Pilates.jpg`} />

      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={DOMAIN} />
      <meta name="twitter:url" content={BASE_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/Pilates.jpg`} />
    </Helmet>
  );
};

export default Head;
