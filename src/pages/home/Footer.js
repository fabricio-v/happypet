import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/happypet.png';
import Patinha from '../../assets/patinha.png';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Junte-se ao boletim informativo HappyPet para receber nossas melhores ofertas e dicas!
        </p>
        <p className='footer-subscription-text'>
        Você pode cancelar sua inscrição a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email aqui'
            />
            <Button buttonStyle='btn--outline'>Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Termos de serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contate-nos</h2>
            <Link to='/'>Tel: (91) 3441-1100</Link>
            <Link to='/'>Email: sac@happypet.com.br </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to={{ pathname: 'https://www.instagram.com/'}}>Instagram</Link>
            <Link to={{ pathname: 'https://pt-br.facebook.com/'}}>Facebook</Link>
            <Link to={{ pathname: 'https://youtube.com/'}}>Youtube</Link>
            <Link to={{ pathname: 'https://twitter.com/'}}>Twitter</Link>
          </div>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={Logo} alt='Happy logo' className='imgFoo' />
            <img src={Patinha} alt='Patinha logo' className='imgPatFoo' />
            </Link>
          </div>
          <small class='website-rights'>HappyPet © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: 'https://pt-br.facebook.com/'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: 'https://www.instagram.com/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: 'https://youtube.com/'}}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: 'https://twitter.com/'}}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to = {{ pathname: 'https://br.linkedin.com/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
