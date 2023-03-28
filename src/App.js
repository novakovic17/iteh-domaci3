import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';
import AboutUs from './aboutus/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </Header> 
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Slider />
              <Products />
            </>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
