import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ShopList, ShopPreviewItem, About, Home } from './components';

function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <div className="container">
            <Route path="/shop" exact component={ShopList} />
            <Route path="/shop/:id" component={ShopPreviewItem} />
            <Route path="/about" component={About} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
