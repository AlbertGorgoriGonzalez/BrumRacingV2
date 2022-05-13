import React from 'react';
import '../../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import introGame from './introGame.mp4'
import {useTranslation} from 'react-i18next';
import {Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const onClickNav = () => {
    window.location.href = 'https://drive.google.com/drive/folders/16YPmy-b3vzOMOLI_mPdvzvKHyK3alrz1?usp=sharing'
  }

  const onClickTuto = () => {
    navigate('/tutorial');
  }

  return (
    <div className='hero-container'>
      <video autoPlay loop muted>
        <source src={introGame} type="video/mp4" />
      </video>
      <h1>RACING THE LIMITS</h1>
      <p>{t("home.racing")}</p>
      <div className='hero-btns'>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClickEvent={onClickNav}
        >
          {t("home.download")}
        </Button2>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClickEvent='/tutorial'
        >
          {t("home.seetutorial")} <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
