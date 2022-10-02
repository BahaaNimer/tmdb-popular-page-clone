import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/tmbd.svg';
import styled from 'styled-components';
import { styles } from '../../styles/styles';

const Nav = styled.nav`
  z-index: 5;
  position: fixed;
  top: 0;
  width: ${(props) => props.styles.width.w100};
  overflow: hidden;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  &.hide-nav {
    visibility: hidden;
  }
`;

const NavigationBar = styled.div`
  font-size: ${(props) => props.styles.font_size.fs09r};
  font-weight: ${(props) => props.styles.font_weight.w6};
  padding: ${(props) => props.styles.padding.p12x}
    ${(props) => props.styles.padding.p5};
  display: flex;
`;

const NavLogo = styled.a`
  font-size: ${(props) => props.styles.font_size.fs2r};
  padding: 0 ${(props) => props.styles.padding.p100x} 0
    ${(props) => props.styles.padding.p80x};
`;

const NavListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.styles.width.w100};

  & ul {
    display: flex;
    list-style: none;
    width: ${(props) => props.styles.width.w100};
  }

  & ul:first-child li {
    margin-right: ${(props) => props.styles.margin.m3};
  }

  & ul:last-child {
    justify-content: flex-end;
    align-items: center;
  }

  & ul:last-child li {
    margin-left: ${(props) => props.styles.margin.m3};
  }

  & ul li a {
    color: #fff;
    white-space: nowrap;
  }

  & .toggle_size {
    @media (max-width: ${(props) => props.styles.max_width.w975x}) {
      display: flex;
    }
  }
  & .toggle {
    @media (max-width: ${(props) => props.styles.max_width.w975x}) {
      display: none;
    }
  }

  & .toggle_size {
    @media (max-width: ${(props) => props.styles.max_width.w600x}) {
      display: none;
    }
  }
`;

const BoxVisible = styled.div`
  width: ${(props) => props.styles.width.w30x};
  height: ${(props) => props.styles.height.h25x};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #fff;
  border-radius: ${(props) => props.styles.border_radius.br6};
  padding: ${(props) => props.styles.padding.p3x}
    ${(props) => props.styles.padding.p5x};
  font-size: ${(props) => props.styles.font_size.fs07r};
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
    <Nav
      styles={styles}
      className={`blue-bg ${hide && 'hide-nav'}`}>
      <NavigationBar styles={styles}>
        <NavLogo
          styles={styles}
          href='/'>
          <img
            src={logo}
            alt='logo'
            width='154'
            height='20'
          />
        </NavLogo>

        <NavListContainer styles={styles}>
          <ul className='toggle_size'>
            <li>
              <Link to='/'>Movies</Link>
            </li>

            <li>
              <Link to='/'>Tv Shows</Link>
            </li>

            <li>
              <Link to='/'>People</Link>
            </li>

            <li>
              <Link to='/'>More</Link>
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
                <BoxVisible styles={styles}>EN</BoxVisible>
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
