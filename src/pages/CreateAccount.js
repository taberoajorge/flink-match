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
  & > a {
    color: white;
  font-size: 1.8rem;
  text-align: center;
  text-decoration: none;
  margin-top: 2rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
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
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  background-color: #bababa;
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: 1.6rem;
  padding: 6px;
  margin-bottom: 12px;
  margin-bottom: 22px;
`;

const StyledPrimaryButton = styled.button`
  background-color: white;
  border-radius: 8px;
  border: none;
  color: black;
  width: 100%;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  height: 50px;
`;


const StyledSelect = styled.select`
  background-color: #bababa;
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: 1.6rem;
  padding: 6px;
  margin-bottom: 12px;
  margin-bottom: 22px;
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
