import styled from "styled-components";

export const Container = styled.div`
  background: white;
  color: black;
  margin: 30px 20px;

  @media (min-width: 768px) {
    margin: 40px 70px;
  }

  padding-bottom: 30px;
  border-bottom: solid 1px gray;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 18px;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
    margin-right: 25px;
  }
`;

export const Content = styled.div`
  width: 100%;

  h3 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  p {
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    color: #b1b1b1;
  }
`;
