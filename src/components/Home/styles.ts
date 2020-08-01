import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1px) {
    height: 100%;
    display: grid;
    grid-template-columns: auto 10%;
    grid-template-rows: 10px auto auto auto auto 70px;
    grid-template-areas:
      ". ."
      ". exit"
      "logo logo"
      "buttongroup buttongroup"
      "cardgroup cardgroup"
      "footer footer";
    justify-content: center;
  }

  @media screen and (min-width: 930px) {
    height: 100%;
    display: grid;
    grid-template-columns: 8% auto auto auto 8%;
    grid-template-rows: 20px 150px auto auto 70px;
    grid-template-areas:
      ". . . . ."
      ". logo . exit ."
      ". cardgroup cardgroup cardgroup ."
      ". buttongroup buttongroup buttongroup ."
      ". footer footer footer .";
    justify-content: center;
  }
`;

export const CardGroup = styled.div`
  @media screen and (min-width: 1px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    grid-area: cardgroup;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    };
  }

  @media screen and (min-width: 930px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    grid-area: cardgroup;
    overflow: auto;
  }
`;

export const Exit = styled.div`
  display: flex;
  color: var(--primary);
  font-size: 20px;
  grid-area: exit;
  align-self: center;
  justify-self: left;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;

  &:hover {
    color: var(--secondary);
    transition: all 0s;
  }

  &:active {
    color: var(--terciary);
    transition: all 0s;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: buttongroup;
  cursor: pointer;
  color: var(--primary);
  margin: 20px 0px 20px 0px;
  padding: 10px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px -1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  strong {
    margin-left: 5px;
  }

  &:hover {
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transition: all 0s;
    box-shadow: 2px 2px 8px -1px rgba(0, 0, 0, 0.3);
    background-color: var(--primary);
    color: white;
  }
`;
