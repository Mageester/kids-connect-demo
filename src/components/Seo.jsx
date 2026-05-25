import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://kids-connect.getaxiom.ca';
const DEFAULT_OG_IMAGE = '/uploads/main-space_-1024x627.webp';

export default function Seo({ title, description, path = '/', image = DEFAULT_OG_IMAGE }) {
  const fullTitle = title ? `${title} — Kids Connect Concept` : 'Kids Connect Concept — Social Play Groups for Neurodiverse Children in Burnaby, BC';
  const url = `${SITE_URL}${path}`;
  const imgUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content="Kids Connect" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </Helmet>
  );
}
