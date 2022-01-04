import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";


const StyledCreateAccount = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledCreateAccountContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
  color: white;
  & > a {
    color: white;
  font-size: var(--text-md);
  text-align: center;
  text-decoration: none;
  margin-top: 2rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: var(--title);
  margin-bottom: 1.2rem;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
    & {
      height: 100%;
      justify-content: space-between;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: var(--text-small);
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const StyledInput = styled.input`
  background-color: var(--input-color);
  border: none;
  border-radius: 0.8rem;
  height: 3.0rem;
  font-size: var(--text-md);
  padding: 0.6rem;
  margin-bottom: 1.2rem;
  margin-bottom: 2.2rem;
`;

const StyledPrimaryButton = styled.button`
  background-color: var(--white);
  border-radius: 0.8rem;
  border: none;
  color: black;
  width: 100%;
  cursor: pointer;
  font-size: var(--text-md);
  font-weight: bold;
  height: 5rem;
`;


const StyledSelect = styled.select`
  background-color: var(--input-color);
  border: none;
  border-radius: 0.8rem;
  height: 3rem;
  font-size: var(--text-md);
  padding: 0.6rem;
  margin-bottom: 1.2rem;
  margin-bottom: 2.2rem;
`;

function CreateAccount() {
  const form = useRef(null);
  const { saveReaction } = useLocalStorage();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      lastname: formData.get("lastName"),
      username: formData.get("email"),
      password: formData.get("password"),
      preferences: formData.get("preferences"),
    };
    saveReaction("DATA_V1", data);
    Navigate("/");
  };

  return (
    <StyledCreateAccount>
      <StyledCreateAccountContainer>
        <StyledTitle>Create Account</StyledTitle>
        <StyledForm action="/" ref={form}>
          <StyledLabel htmlFor="name">name</StyledLabel>
          <StyledInput type="text" name="name" placeholder="Marco" />
          <StyledLabel htmlFor="lastName">Last Name address</StyledLabel>
          <StyledInput type="text" name="lastName" placeholder="Aguirrez" />
          <StyledLabel htmlFor="email">Email address</StyledLabel>
          <StyledInput
            type="text"
            name="email"
            placeholder="platzi@example.cm"
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            placeholder="*********"
          />
          <StyledLabel htmlFor="preferencias">Preferencias</StyledLabel>
          <StyledSelect name="preferences">
            <option value="boys">Boys</option>
            <option value="girls">Girls</option>
          </StyledSelect>
          <StyledPrimaryButton onClick={handleSubmit}>
            Create
          </StyledPrimaryButton>
        </StyledForm>
        <Link to={'/login'}> Log In</Link>
      </StyledCreateAccountContainer>
    </StyledCreateAccount>
  );
}

export default CreateAccount;
