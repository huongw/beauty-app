import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/menu" component={Menu} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
