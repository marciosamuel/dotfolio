import React from 'react';
import logo from '../assets/img/logo.png';
import LogoHtml from '../assets/img/html.png';
import LogoCss from '../assets/img/css.png';
import ImageTop from '../assets/img/image-top.png';
import LogoJs from '../assets/img/JS.png';
import './Home.css';
import SocialLinks from './SocialLinks';

const Home = () => (
  <div className="home">
    <header>
      <a href="#home">
        <img src={logo} alt="logo do portfolio" className="logo" />
      </a>
      <nav className="top-menu">
        <ul>
          <li>Stacks</li>
          <li>Projects</li>
          <li>About me</li>
        </ul>
        <button type="button">Contact</button>
      </nav>
    </header>
    <main>
      <h2>Desenvolvedor Frontend</h2>
      <h1>Marcio Samuel</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iste libero harum
        optio modi. Ipsam minus facilis voluptatem aut? Maiores provident ab aliquid dolores
        obcaecati, omnis iure necessitatibus sit impedit.
      </p>
      <button type="button">My CV</button>
    </main>
    <aside>
      <img src={LogoHtml} alt="logo do html" />
      <img src={LogoCss} alt="logo do css" />
      <img src={ImageTop} alt="html e css" />
      <img src={LogoJs} alt="logo javascript" />
    </aside>
    <SocialLinks />
  </div>
);

export default Home;
