import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';
import CreateAccount from '../pages/CreateAccount';
import LikedUsers from '../pages/LikedUsers';
import Login from '../pages/Login';
import SearchPage from '../pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createAccount" element={<CreateAccount />} />
        <Route exact path="/likedUsers" element={<LikedUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
