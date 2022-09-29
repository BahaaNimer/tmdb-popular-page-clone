import React, { useEffect, useState } from 'react';

import logo from '../../assets/tmbd.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  z-index: 5;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  &.hide-nav {
    visibility: hidden;
  }
`;

const NavigationBar = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 12px 5%;
  display: flex;
`;

const NavLogo = styled.a`
  font-size: 2.1rem;
  padding: 0 100px 0 80px;
`;

const NavListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & ul {
    display: flex;
    list-style: none;
    width: 100%;
  }

  & ul:first-child li {
    margin-right: 3%;
  }

  & ul:last-child {
    justify-content: flex-end;
    align-items: center;
  }

  & ul:last-child li {
    margin-left: 3%;
  }

  & ul li a {
    color: #fff;
    white-space: nowrap;
  }

  & .toggle_size {
    @media (max-width: 975px) {
      display: flex;
    }
  }
  & .toggle {
    @media (max-width: 975px) {
      display: none;
    }
  }

  & .toggle_size {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const BoxVisible = styled.div`
  width: 28px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 0.7rem;
`;

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
    <Nav className={`blue-bg ${hide && 'hide-nav'}`}>
      <NavigationBar>
        <NavLogo href='/'>
          <img
            src={logo}
            alt='logo'
            width='154'
            height='20'
          />
        </NavLogo>

        <NavListContainer>
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
                  <i style={{ fontSize: '1.5rem' }}>+</i>
                </b>
              </a>
            </li>

            <li>
              <a href='/'>
                <BoxVisible>EN</BoxVisible>
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
        </NavListContainer>
      </NavigationBar>
    </Nav>
  );
}

export default Navbar;
