import React from "react";
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import GlobalStyle from "../GlobalStyles";
import CreateAccount from "../pages/CreateAccount";
import LikedUsers from "../pages/LikedUsers";
import Login from "../pages/Login";
import SearchPage from "../pages/SearchPage";

function App() {
  var a =4
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/match" element={<SearchPage />} />
        <Route  path="/create-account" element={<CreateAccount />} />
        <Route  path="/liked-users" element={<LikedUsers />} />
        <Route
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
    </HashRouter>
  );
}

export default App;
