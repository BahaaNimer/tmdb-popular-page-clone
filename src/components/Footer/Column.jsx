import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../styles/styles';

const FooterList = styled.ul`
  margin: 2px 0 0 0;
`;

const FooterItem = styled.li`
  list-style: none;
  line-height: 1.6rem;
`;

const FooterLink = styled.a`
  color: ${color.white};
`;

function Column(props) {
  return (
    <div>
      {Object.values(props).map((value, index) => (
        <FooterList key={index} data-testid='footer_list'>
          <FooterItem>
            <FooterLink href='/'>{value}</FooterLink>
          </FooterItem>
        </FooterList>
      ))}
    </div>
  );
}

//TODO:  Implement props check with props prototypes
Column.propTypes = {
  props: PropTypes.object,
};

export default Column;
