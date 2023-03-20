import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px;
  background: black;
  color: white;
`;

export const Back = styled.button`
  all: unset;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  place-self: center self-start;
  cursor: pointer;

  margin-left: 20px;

  @media (min-width: 768px) {
    margin-left: 70px;
  }
`;

export const PageName = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  place-self: center;
`;
