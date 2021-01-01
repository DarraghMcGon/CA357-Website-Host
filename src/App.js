import React from 'react'; 
import LandingPage from './pages/landingPage';
import InfoPage from './pages/InfoPage'; 
import ShopPage from './pages/shopPage';
import ProductPage from './pages/productPage';
import HeaderBar from './pages/components/headerBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { UsernameProvider } from './context/UsernameContext';
import { BasketProvider } from './context/BasketContext';

function App() {
  return (
    <Router>
      <Switch>
        <UsernameProvider>
          <BasketProvider>
            <HeaderBar />
            <Route path="/" exact component={LandingPage}/> 
            <Route path="/info" component={InfoPage}/> 
            <Route path="/shop" component={ShopPage}/>
            <Route path="/product/:product" component={ProductPage}/>
          </BasketProvider>
        </UsernameProvider>
      </Switch>
    </Router>
  );
}

export default App;
