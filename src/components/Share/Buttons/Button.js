import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(20px, 160px);
  border-radius: 15px;
  background-color: #01b4e4;
  color: #eee;
  border-style: none;
  padding: 10px;
  width: 200px;
  font-size: larger;
  font-weight: 700;

  &:hover {
    background-color: #032541;
  }

  @media (max-width: 1300px) {
    margin-right: 33px;
    width: 95%;
  }

  @media (max-width: 485px) {
    margin-left: 7px;
  }
`;

export const ButtonLoadMore = styled(Button)`
  transform: translate(15px, 1px);
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  width: 85%;
  border-radius: 10px;
  height: 45px;
  background-color: #01b4e4;
  color: #eee;
  font-size: x-large;
  font-weight: 700;
`;
