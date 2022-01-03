import React from 'react';
import styled from 'styled-components';
import { HeartFill } from 'styled-icons/bootstrap';

const StyledButton = styled.button`
  width: 6rem;
  height: 6rem;
  border: 0.1rem solid green;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Like({ name, likePerson }) {
  return (
    <StyledButton onClick={() => likePerson(name)} type="button">
      <HeartFill color="green" size={30} />
    </StyledButton>
  );
}

export default Like;
