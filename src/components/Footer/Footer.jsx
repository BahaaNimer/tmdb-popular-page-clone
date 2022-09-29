import React from 'react';
import Column from './Column';
import footerLogo from '../../assets/moviesdb_footer.svg';
import styled from 'styled-components';

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9% 0%;
  height: 50%;
  width: 100%;
`;

const JoinSection = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 2%;
  margin-left: 10%;

  @media (max-width: 717px) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  right: -1px;
  top: -14%;
  margin-top: 5px;
  margin-bottom: 30px;
`;

const JoinButton = styled.a`
  background-color: white;
  color: rgb(1, 180, 228);
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  transition: none;
  border: 2px solid white;
  padding: 10px;
  position: relative;
  height: max-content;
  width: max-content;

  &:hover {
    background-color: white;
  }
`;

const LinkSection = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media (max-width: 717px) {
    margin: 5%;
  }
`;

const BottomSection = styled.section`
  text-align: center;
  color: grey;
  opacity: 0.3;
  font-size: 0.7em;
  font-weight: 600;
`;

function Footer() {
  return (
    <footer className='blue-bg'>
      <FooterNav className='footer-nav'>
        <JoinSection className='join-community'>
          <Image
            src={footerLogo}
            alt='footer-logo'
            width='130'
            height='94'
          />
          <JoinButton
            className='footer-btn'
            href='#!'>
            JOIN THE COMMUNITY
          </JoinButton>
        </JoinSection>
        <LinkSection className='link-section'>
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
      <BottomSection>Build 87863fc (4378)</BottomSection>
    </footer>
  );
}

export default Footer;
