import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ShopList, ShopPreviewItem, Menu, Home, Gallery, Footer } from './components';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={ShopList} />
          <Route path="/menu" component={Menu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/shop/:id" component={ShopPreviewItem} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
