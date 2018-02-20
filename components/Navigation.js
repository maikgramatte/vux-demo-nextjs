import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <Link href="/">
      <a href="#a">Home</a>
    </Link>
    <Link href="/about">
      <a href="#a2">About</a>
    </Link>
  </nav>
);
