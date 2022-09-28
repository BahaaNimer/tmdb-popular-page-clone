import React, { useEffect, useState } from 'react';

import logo from './tmbd.svg';
import './Navbar.css';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 50) {
        setHide(position > scrollPosition);
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className={`blue-bg ${hide && 'hide-nav'}`}>
      <div className='navigationBar'>
        <a
          href='/'
          className='nav-logo'>
          <img
            src={logo}
            alt='logo'
            width='154'
            height='20'
          />
        </a>

        <div className='nav-list-container'>
          <ul className='toggle_size'>
            <li>
              <a href='/'>Movies</a>
            </li>

            <li>
              <a href='/'>TV Shows</a>
            </li>

            <li>
              <a href='/'>People</a>
            </li>

            <li>
              <a href='/'>More</a>
            </li>
          </ul>

          <ul className='toggle'>
            <li>
              <a href='/'>
                <b>
                  <i
                    id='plus'
                    className='material-icons'>
                    +
                  </i>
                </b>
              </a>
            </li>

            <li>
              <a href='/'>
                <div className='box-visible'>EN</div>
              </a>
            </li>

            <li>
              <a href='/'>Login</a>
            </li>

            <li>
              <a href='/'>Join TMDB</a>
            </li>

            <li>
              <a href='/'>
                <img
                  src='https://img.icons8.com/external-anggara-flat-anggara-putra/32/000000/external-search-ui-basic-anggara-flat-anggara-putra.png'
                  alt='Search'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
