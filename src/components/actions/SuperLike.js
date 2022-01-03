import React from 'react';
import styled from 'styled-components';
import { StarFill } from 'styled-icons/bootstrap';

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid blue;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SuperLike({ name, superLikePerson }) {
  return (
    <StyledButton onClick={() => superLikePerson(name)} type="button">
      <StarFill color="blue" size={30} />
    </StyledButton>
  );
}



export default SuperLike;
