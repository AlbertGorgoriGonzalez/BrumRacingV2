import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems/menuItem";
import { Button } from "./buttons/buttons";
import "./navBar.css";
import worldIcon from "../../assets/images/world.png";
import { useUser } from "../../context/usuarioContext";
import {getToken} from "../../assets/utils/helper";
import {useTranslation} from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isSpanish, setIsSpanish] = useState(true)

  const {userInfo} = useUser();

  const [t, i18n] = useTranslation("global");

  const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const changeLang = () => {
    if(isSpanish){
      i18n.changeLanguage("en");
      setIsSpanish(false)
    }else{
      i18n.changeLanguage("es");
      setIsSpanish(true)
    }
  } 

  window.addEventListener("resize", showButton);

  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <Link to={"/" + item.linkName} key={index}>
              <li>
                <a className={item.cName} key={index} href={item.url}>
                  {t(item.title)}
                </a>
              </li>
            </Link>
          );
        })}
        <li onClick={changeLang}>
                <a className='nav-links'href='#'>
                  <button type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus.">
                    <FontAwesomeIcon icon={faGlobe} />
                  </button>
                  
                </a>
              </li>
      </ul>
      {(!userInfo || !userInfo.id) &&
      <>
        <Link to={"/register"}>
        <Button>{t("header.signup")}</Button>
        </Link>
        <Link to={"/login"}>
        <Button>{t("header.login")}</Button>
        </Link>
        </>
      }
      {userInfo && userInfo.id &&
        <Link to={"/userInfo"}>
        <Button>{t("header.profile")}</Button>
        </Link>
      }
    </nav>
  );
}

export default Navbar;

{
  /* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BRUM BRUM RACING 
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <p></p>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
        </div>
      </nav> */
}
