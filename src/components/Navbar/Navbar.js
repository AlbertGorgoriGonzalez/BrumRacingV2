import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems/menuItem";
import { Button } from "./buttons/buttons";
import "./navBar.css";
import worldIcon from "../../assets/images/world.png";
import { useUser } from "../../context/usuarioContext";
import {getToken} from "../../assets/utils/helper";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const {userInfo} = useUser()

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

  window.addEventListener("resize", showButton);

  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <Link to={"/" + item.linkName}>
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
      <img src={worldIcon} className="icon-header nav-links" alt="Logo" />
      {!getToken() &&
      <>
        <Link to={"/register"}>
        <Button>Sign Up</Button>
        </Link>
        <Link to={"/login"}>
        <Button>Login</Button>
        </Link>
        </>
      }
      {getToken() &&
        <Link to={"/userInfo"}>
        <Button>Profile</Button>
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
