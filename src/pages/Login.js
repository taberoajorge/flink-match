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
  & > a {
    display: grid;
    place-items: center;
    color: black;
    background-color: white;
    border-radius: var(--border-main);
    border: none;
    width: 100%;
    cursor: pointer;
    font-size: var(--text-md);
    font-weight: bold;
    height: 5rem;
    margin-top: 1.4rem;
    margin-bottom: 3rem;
    text-decoration: none;
  }
`;

const StyledTitle = styled.h1`
  font-size: var(--title);
  margin-bottom: 1.2rem;
  text-align: center;
  color: white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: var(--text-small);
  font-weight: bold;
  margin: 0.5rem;
  color: white;
`;

const StyledA = styled.a`
  color: var(--white);
  font-size: var(--text-md);
  text-align: center;
  text-decoration: none;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  height: 3rem;
  font-size: var(--text-small);
  background-color: var(--input-color);
  border: none;
  border-radius: 0.8rem;
  padding: 0.6rem;
`;

const StyledPrimaryButton = styled.input`
  background-color: white;
  border-radius: var(--border-main);
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: var(--text-md);
  font-weight: bold;
  height: 5rem;
  margin-top: 1.4rem;
  margin-bottom: 3rem;
  color: black;
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
