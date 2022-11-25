import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import ProductPage from './ProductPage/Product';
import LandingPageLisbon from './LandingPageLisbon/LandingPage';
import LandingPagePorto from './LandingPagePorto/LandingPage';
import {Product, SweatShirt}   from './Api/Products';


function App() {

    const mainpage = () => {
      return(<MainPage product= {Product}/>);
    }
    const productpage = () => {
      return( <ProductPage product = {SweatShirt}/>);
    }
    const landingpagelisbon = () => {
      return( <LandingPageLisbon/>);
    }
    const landingpageporto = () => {
      return( <LandingPagePorto/>);
    }
  return (
    <div>
        <Router>
          <Route path="/Porto" component={landingpageporto} />
          <Route path="/Lisbon" component={landingpagelisbon} />
          <Route path = "/42Store/home" component={mainpage}/>
          <Route path="/42Store/product" component={productpage}/>
        </Router>
    </div>
  );
}

export default App;
