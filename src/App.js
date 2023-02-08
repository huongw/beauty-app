import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Menu, Home, Gallery, Contact, Footer } from './components';
import Preloader from './components/preloader/Preloader';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Preloader />

      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
