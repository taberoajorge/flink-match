import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --input-color: #ffffff9c;
  --white: white;
  --title: 2.4rem;
  --text-md: 1.8rem;
  --text-small: 1.4rem;
  --border-main: 0.5rem;
  --gradient: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 18%,
    rgba(0, 0, 0, 0) 100%
  );
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Josefin Sans', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  width: 100vw;
}

#root{
  margin: auto;
  background: rgb(131,58,180);
  background: linear-gradient(31deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 21%, rgba(252,176,69,1) 69%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

`;

export default GlobalStyle;
