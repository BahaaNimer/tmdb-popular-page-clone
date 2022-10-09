import React from 'react';

import logo from '../../assets/tmbd.svg';
import styled from 'styled-components';
import { color, fontSize, fontWeight, zIndex } from '../styles/styles';

const Nav = styled.nav`
  z-index: ${zIndex.z1};
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
  display: flex;
  font-size: ${fontSize.fs09r};
  font-weight: ${fontWeight.w6};
  padding: 12px 5%;
`;

const NavLogo = styled.a`
  font-size: ${fontSize.fs2r};
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
    color: ${color.white};
    white-space: nowrap;
  }

  & .toggleSize {
    @media (max-width: 975px) {
      display: flex;
    }
  }
  & .toggle {
    @media (max-width: 975px) {
      display: none;
    }
  }

  & .toggleSize {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const BoxVisible = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid ${color.white};
  border-radius: 6px;
  padding: 3px 5px;
  font-size: ${fontSize.fs07r};
`;

function Navbar() {
  return (
    <Nav className={`blueBg`}>
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
          <ul className='toggleSize'>
            <li>
              <a href='/'>Movies</a>
            </li>

            <li>
              <a href='/'>Tv Shows</a>
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
