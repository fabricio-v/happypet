import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default withRouter(Home);