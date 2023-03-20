import styled from "styled-components";

export const Container = styled.div`
  background: white;
  color: black;
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 40px 70px;
  }

  h2,
  p {
    margin-bottom: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  all: unset;
  cursor: pointer;
  padding: 17px 50px;
  background: #3b89ff;
  border-radius: 3px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 17px 44px;
    background: #3b89ff;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
  }

  &:hover {
    background: #2564c5;
  }
`;
