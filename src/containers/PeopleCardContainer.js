import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
function PeopleCardContainer({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default PeopleCardContainer;
