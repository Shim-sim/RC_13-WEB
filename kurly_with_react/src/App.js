/* eslint-disable */

import Header from './components/Common/Header';
import NavBar from './components/Common/NavBar';
import styled from 'styled-components';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
