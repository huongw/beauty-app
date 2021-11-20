import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Menu, Home, Gallery, Contact, Footer } from './components';
import useWindow from './hooks/useWindow';
import Preloader from './components/preloader/Preloader';

function App() {
  useWindow()

  return (
    <div className="App">
      <Preloader />

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
