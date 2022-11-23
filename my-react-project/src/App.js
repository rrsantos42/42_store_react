import {Route} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import ProductPage from './ProductPage/Product';
import {Switch} from 'react-router-dom'

function App() {

  let Product = [
		{
      id: 1,
		  type: "Sweat Shirt",
		  Price: "20,00",
		  Size: ["S", "M", "L", "XL"],
		  Available: true,
		  imgs: "../../imgs/sweat.png"
		},
		{
      id: 2,
		  type: "T-Shirt",
		  Price: "15,00",
		  Size: ["S", "M", "L", "XL"],
		  Available: true,
		  imgs: "../../imgs/sweat.png"
		},
		{
      id: 3,
		  type: "Towel",
		  Price: "10,00",
		  Size: null,
		  Available: true,
		  imgs: "../imgs/sweat.png"
		},
		{
      id: 4,
			type: "Mouse Pad",
			Price: "5,00",
			Size: null,
			Available: true,
			imgs: "../imgs/sweat.png"
		  },
		  {
      id: 5,
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 6,
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 7,
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id : 8,
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id : 9
,			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 10,
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 11,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 12,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 13,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 14,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 15,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 16,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 17,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 18,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 19,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
      id: 20,
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  }
	  ]
  return (
    <div>
        <Switch>
        <Route exact path="/">
          <MainPage product= {Product}/>
        </Route>
        <Route path="/product">
          <ProductPage product = {Product}/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
