import styled from "styled-components";

export const StyledCart = styled.div``;

//
//Styled Cart Overlay
//

export const StyledCartOverlay = styled.div`
  position: fixed;
  right: 0px;
  height: 100vh;
  z-index: 101;
  overflow: scroll;
  background-color: ${({ theme }) => theme.color.background};

  /* Hide Scrollbars */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5em;
  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 50px;
    letter-spacing: -5px;
  }

  span {
    margin-left: 1em;
  }

  img {
    width: 30px;
    margin-left: 3em;
    align-self: center;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primaryText};
  border-width: 0.5px;
`;

//
//CartItem
//

export const StyledCartItem = styled.li`
  text-transform: uppercase;
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 2em;

  h2 {
    font-family: "TTrailer";
    font-size: 4rem;
    font-weight: 200;
    line-height: 60px;
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    font-size: 0.6rem;
  }

  img {
    max-width: 130px;
  }
`;

export const StyledCartProductItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-items: end;
  padding-bottom: 1.5em;
`;

export const StytledProductSummary = styled.div`
  input {
    max-width: 65px;
    min-height: 40px;
  }

  input:focus {
    outline: none;
  }
  p {
    text-decoration: underline;
    margin-top: 2em;
    font-size: 0.8rem;
  }
`;

export const StyledCheckoutSummary = styled.div`
  padding: 2em;
  margin-top: 1em;
  background-color: ${({ theme }) => theme.color.primaryText};
  color: ${({ theme }) => theme.color.background};
  text-transform: uppercase;

  div {
    display: flex;
    justify-content: space-between;
  }
`;
