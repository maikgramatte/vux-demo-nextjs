import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import '../css/app.scss';

export default () => (
  <div>
    <Head>
      <title>Homepage</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Navigation />
    Welcome to next.js!
  </div>
);
