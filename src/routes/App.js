import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';
import CreateAccount from '../pages/CreateAccount';
import LikedUsers from '../pages/LikedUsers';
import Login from '../pages/Login';
import SearchPage from '../pages/SearchPage';

function App() {
  var a =4
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
        <Route exact path="/liked-users" element={<LikedUsers />} />
        <Route exact path="*" element={<p>error 404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
