import React from 'react';
import styled from 'styled-components';
import { SettingsBackupRestore } from 'styled-icons/material';

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid yellow;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rewind() {
  return (
    <StyledButton type="button">
      <SettingsBackupRestore  color="yellow" size={30} />
    </StyledButton>
  );
}

export default Rewind;
