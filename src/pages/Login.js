import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledFormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 30rem;
  & >a {
    color: black;
  background-color: white;
  border-radius: 0.8rem;
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  height: 5rem;
  margin-top: 1.4rem;
  margin-bottom: 3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const StyledA = styled.a`
  color: white;
  font-size: 1.8rem;
  text-align: center;
  text-decoration: none;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  background-color: #bababa;
  border: none;
  border-radius: 0.8rem;
  height: 3rem;
  font-size: 1.4rem;
  padding: 0.6rem;
`;

const StyledPrimaryButton = styled.input`
  background-color: white;
  border-radius: 0.8rem;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  height: 5rem;
  margin-top: 1.4rem;
  margin-bottom: 3rem;
`;


function Login() {
  return (
    <StyledLogin>
      <StyledFormContainer>
        <StyledTitle>Bienvenido</StyledTitle>
        <StyledForm action="/">
          <StyledLabel htmlFor="email">email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            placeholder="ejemplo@gmail.com"
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput type="password" id="password" placeholder="*********" />
          <StyledPrimaryButton type="submit" value="Confirm" />
          <StyledA>Forgot my password</StyledA>
        </StyledForm>
        <Link to={"/createAccount"}>Sign Up</Link>
      </StyledFormContainer>
    </StyledLogin>
  );
}
export default Login;
