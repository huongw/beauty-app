import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { HOME_PAGE, SHOP_PAGE, ABOUT_PAGE, CONTACT_PAGE } from './components/NavItems';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("Home")

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page === HOME_PAGE && <Home />}
      {page === SHOP_PAGE && <Shop />}
      {page === ABOUT_PAGE && <About />}
      {page === CONTACT_PAGE && <Contact />}
    </div>
  );
}

export default App;
