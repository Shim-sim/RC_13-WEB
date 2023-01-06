/* eslint-disable */
import { Reset } from 'styled-reset';
import Header from './components/Common/Header';
import NavBar from './components/Common/NavBar';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Common/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import { products } from './data.js';
import { useParams } from 'react-router-dom';

function App() {
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <Reset />
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Main products={products} convertPrice={convertPrice} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail products={products} convertPrice={convertPrice} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
