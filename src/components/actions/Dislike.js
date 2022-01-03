import React from 'react';
import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';

const StyledButton = styled.button`
  width: 6rem;
  height: 6rem;
  border: 0.1rem solid red;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Dislike({ name, dislikePerson }) {
  return (
    <StyledButton onClick={() => dislikePerson(name)} type="button">
      <Close color="red" size={30} />
    </StyledButton>
  );
}


export default Dislike;
