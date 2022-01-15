import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "../GlobalStyles";
import CreateAccount from "../pages/CreateAccount";
import LikedUsers from "../pages/LikedUsers";
import Login from "../pages/Login";
import SearchPage from "../pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/match" element={<SearchPage />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
        <Route exact path="/liked-users" element={<LikedUsers />} />
        <Route
          exact
          path="*"
          element={
            <p>
              error 404 not found{" "}
              <br />
              <Link to={"/create-account"}>Registarte</Link>
              <br />
              <Link to={"/"}>Inicia sesion</Link>
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
