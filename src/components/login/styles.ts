import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1px) {
    display: grid;
    height: 100vmax;
    align-content: space-between;
    justify-content: center;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "logo"
      "aside"
      "welcome"
      "footer";
    margin: 0px 10% 0px 10%;
  }

  @media screen and (min-width: 930px) {
    display: grid;
    height: 100vh;
    grid-column-gap: 50px;
    grid-template-columns: auto 340px max-content;
    grid-template-rows: auto;
    grid-template-areas:
      ". . ."
      ". logo aside"
      ". welcome aside"
      ". . ."
      "footer footer footer";

    margin: 0 10% 0 10%;
  }


`;

export const Welcome = styled.div`
  grid-area: welcome;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Aside = styled.div`
  grid-area: aside;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  > img {
    height: 60vmin;
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.form`
  grid-area: welcome;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const AGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
`
