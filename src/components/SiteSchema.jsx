import React from 'react';
import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kids Connect',
  description:
    'Play-based social groups and autism services for neurodiverse children and teens in Burnaby, BC.',
  url: 'https://kidsconnect.ca',
  telephone: '+1-778-772-3821',
  email: 'info@kidsconnect.ca',
  image: 'https://kidsconnect.ca/uploads/cropped-logo.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6711 6th Street',
    addressLocality: 'Burnaby',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: [
    'Burnaby',
    'New Westminster',
    'Vancouver',
    'North Vancouver',
    'Coquitlam',
    'Port Moody',
    'Langley',
    'Surrey',
  ],
  founder: {
    '@type': 'Person',
    name: 'Crista Kundu',
    jobTitle: 'Founder, RASP Behavior Consultant',
  },
};

export default function SiteSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
