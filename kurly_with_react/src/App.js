/* eslint-disable */
import { Reset } from 'styled-reset';
import Header from './components/Common/Header';
import NavBar from './components/Common/NavBar';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Login from './pages/Login';
import Auth from './utils/Auth';
import Footer from './components/Common/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Reset />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/oauth/kakao/token" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
