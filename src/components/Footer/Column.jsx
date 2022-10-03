import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles/styles';

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
      {Object.values(props).map((value, index) => (
        <FooterList key={index}>
          <FooterItem styles={styles}>
            <FooterLink
              styles={styles}
              href='/'>
              {value}
            </FooterLink>
          </FooterItem>
        </FooterList>
      ))}
    </div>
  );
}

export default Column;
