import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ShopList, ShopPreviewItem, Menu, Home, Footer } from './components';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <div className="container">
            <Route path="/shop" exact component={ShopList} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/shop/:id" component={ShopPreviewItem} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
