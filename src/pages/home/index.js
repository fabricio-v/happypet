import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default withRouter(Home);