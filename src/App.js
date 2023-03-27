import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div>
     <Header/> 
     <Hero/>
     <Slider/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default App;
