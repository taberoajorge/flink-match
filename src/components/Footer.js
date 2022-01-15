import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fire } from "styled-icons/fa-solid";
import { PlugDisconnected } from "styled-icons/fluentui-system-filled";
import { ChatHistory } from "styled-icons/remix-fill";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  padding: 1rem;
  background-color: white;
  display: flex;
  width: 100vw;
  align-items: center;
  height: 8vh;
  & > nav {
    width: 100%;
  }
`;
const StyledNav = styled.nav`
  width: 100vw;
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


function Footer({getLikeds}) {
  return (
    <StyledFooter>
      <StyledNav>
        <StyledUl>
          <li>
          <Link to="/"><PlugDisconnected size={30} color="black" /></Link>
          </li>
          <li>
          <Link to="/match"><Fire size={30} color="red" /></Link>
          </li>
          <li>
          <Link onClick={getLikeds} to="/likedUsers"><ChatHistory size={30} color="black" /></Link>
          </li>
        </StyledUl>
      </StyledNav>
    </StyledFooter>
  );
}

export default Footer;
