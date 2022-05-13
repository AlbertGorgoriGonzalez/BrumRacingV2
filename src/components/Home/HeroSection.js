import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import introGame from './introGame.mp4'
import {useTranslation} from 'react-i18next';
import {Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const onClickNav = () => {
    window.location.href = 'https://drive.google.com/drive/folders/195HH2hDo9lxXXboHVFubbGTAsTf1YJ1z'
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
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={onClickNav}
        >
          {t("home.download")}
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={onClickTuto}
        >
          {t("home.seetutorial")} <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
