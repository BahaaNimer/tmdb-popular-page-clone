import React from 'react';
import Column from './Column';
import footerLogo from '../../assets/moviesdb_footer.svg';
import styled from 'styled-components';
import { styles } from '../styles/styles';

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.styles.padding.p9}
    ${(props) => props.styles.padding.p0};
  height: ${(props) => props.styles.height.h50};
  width: ${(props) => props.styles.width.w80};
  margin-left: ${(props) => props.styles.margin.m20};
`;

const JoinSection = styled.div`
  position: relative;
  width: ${(props) => props.styles.width.w30};
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.styles.margin.m2};
  margin-left: ${(props) => props.styles.margin.m10};

  @media (max-width: ${(props) => props.styles.max_width.w717}) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  right: -1px;
  top: -14%;
  margin-top: ${(props) => props.styles.margin.m5x};
  margin-bottom: ${(props) => props.styles.margin.m30x};
`;

const JoinButton = styled.a`
  background-color: white;
  color: ${(props) => props.styles.color.l_blue};
  font-weight: ${(props) => props.styles.font_weight.b};
  font-size: ${(props) => props.styles.font_size.fs1r};
  border-radius: ${(props) => props.styles.border_radius.br6};
  transition: none;
  border: 2px solid white;
  padding: ${(props) => props.styles.padding.p10x};
  position: relative;
  height: max-content;
  width: max-content;

  &:hover {
    background-color: white;
  }
`;

const LinkSection = styled.div`
  width: ${(props) => props.styles.width.w100};
  display: flex;
  gap: ${(props) => props.styles.gap.g15x};

  @media (max-width: ${(props) => props.styles.max_width.w717}) {
    margin: ${(props) => props.styles.margin.m5};
  }
`;

const BottomSection = styled.section`
  text-align: center;
  color: ${(props) => props.styles.color.n_gray};
  opacity: 0.3;
  font-size: ${(props) => props.styles.font_size.fs07};
  font-weight: ${(props) => props.styles.font_weight.w6};
`;

function Footer() {
  return (
    <footer className='blue-bg'>
      <FooterNav
        styles={styles}
        className='footer-nav'>
        <JoinSection
          styles={styles}
          className='join-community'>
          <Image
            styles={styles}
            src={footerLogo}
            alt='footer-logo'
            width='130'
            height='94'
          />
          <JoinButton
            styles={styles}
            className='footer-btn'
            href='/'>
            JOIN THE COMMUNITY
          </JoinButton>
        </JoinSection>
        <LinkSection
          styles={styles}
          className='link-section'>
          <Column
            title='THE BASICS'
            link1='About TMDb'
            link2='Contact Us'
            link3='Support Forums'
            link4='API'
            link5='System Status'
          />
          <Column
            title='GET INVOLVED'
            link1='Contribution Bible'
            link2='3rd Party Applications'
            link3='Add New Movie'
            link4='Add New TV Show'
          />
          <Column
            title='COMMUNITY'
            link1='Guidelines'
            link2='Discussions'
            link3='Leaderboard'
            link4='Twitter'
          />
          <Column
            title='LEGAL'
            link1='Terms of Use'
            link2='API Terms of Use'
            link3='Privacy Policy'
          />
        </LinkSection>
      </FooterNav>
      <BottomSection styles={styles}>Build 87863fc (4378)</BottomSection>
    </footer>
  );
}

export default Footer;
