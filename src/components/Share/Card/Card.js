import styled from 'styled-components';

export const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 0.26px;
  width: 200px;
  height: 415px;
  border-radius: 10px;
  @media (max-width: 475px) {
    width: 70%;
    margin-left: 70px;
  }
`;
