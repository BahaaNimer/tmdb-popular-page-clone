import React from 'react';
import styled from 'styled-components';

const SmallHeader = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
`;

const FooterList = styled.ul`
  margin: 2px 0 0 0;
`;

const FooterItem = styled.li`
  list-style: none;
  line-height: 1.6rem;
`;

const FooterLink = styled.a`
  color: #fff;
`;

function Column(props) {
  return (
    <div>
      <SmallHeader className=''>{props.title}</SmallHeader>
      <FooterList>
        <FooterItem>
          <FooterLink
            className=''
            href='#!'>
            {props.link1}
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink
            className=''
            href='#!'>
            {props.link2}
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink
            className=''
            href='#!'>
            {props.link3}
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink
            className=''
            href='#!'>
            {props.link4}
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink
            className=''
            href='#!'>
            {props.link5}
          </FooterLink>
        </FooterItem>
      </FooterList>
    </div>
  );
}

export default Column;
