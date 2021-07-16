import React from 'react';
import './index.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>O melhor para seu Pet e aqui!</h1>
      <p>O que você está esperando, venha conhecer nossa loja.</p>
      <div className='hero-btns'>

      </div>
    </div>
  );
}

export default HeroSection;
