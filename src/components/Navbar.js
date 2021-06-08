import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/happypet.png';
import Patinha from '../assets/patinha.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      
          <img src={Logo} alt='Happy logo' className='img' />
                      
          <img src={Patinha} alt='Patinha logo' className='imgPat' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
            <li className='nav-item'>
              <Link 
              to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Inicio
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Serviços
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link
                to='/signin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cadastra-se
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
