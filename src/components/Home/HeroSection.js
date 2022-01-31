import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import introGame from './introGame.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted>
        <source src={introGame} type="video/mp4" />
      </video>
      <h1>RACING THE LIMITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DOWNLOAD
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEE TUTROIAL <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
