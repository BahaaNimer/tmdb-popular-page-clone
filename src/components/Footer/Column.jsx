import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles/styles';

const SmallHeader = styled.h5`
  margin: ${(props) => props.styles.margin.m0};
  font-size: ${(props) => props.styles.font_size.fs1r};
  font-weight: bold ${(props) => props.styles.font_weight.b};
  color: ${(props) => props.styles.color.white};
`;

const FooterList = styled.ul`
  margin: 2px 0 0 0;
`;

const FooterItem = styled.li`
  list-style: none;
  line-height: ${(props) => props.styles.line_height.lh};
`;

const FooterLink = styled.a`
  color: ${(props) => props.styles.color.white};
`;

function Column(props) {
  return (
    <div>
      <SmallHeader
        styles={styles}
        className=''>
        {props.title}
      </SmallHeader>
      <FooterList>
        <FooterItem styles={styles}>
          <FooterLink
            styles={styles}
            className=''
            href='/'>
            {props.link1}
          </FooterLink>
        </FooterItem>

        <FooterItem styles={styles}>
          <FooterLink
            styles={styles}
            className=''
            href='/'>
            {props.link2}
          </FooterLink>
        </FooterItem>

        <FooterItem styles={styles}>
          <FooterLink
            styles={styles}
            className=''
            href='/'>
            {props.link3}
          </FooterLink>
        </FooterItem>

        <FooterItem styles={styles}>
          <FooterLink
            styles={styles}
            className=''
            href='/'>
            {props.link4}
          </FooterLink>
        </FooterItem>

        <FooterItem styles={styles}>
          <FooterLink
            styles={styles}
            className=''
            href='/'>
            {props.link5}
          </FooterLink>
        </FooterItem>
      </FooterList>
    </div>
  );
}

export default Column;
