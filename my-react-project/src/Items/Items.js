import Item from "./Item/Item";
import "./Item.css"

const Items = (props) =>{

	let Product = [
		{
		  type: "Sweat Shirt",
		  Price: "20,00",
		  Size: ["S", "M", "L", "XL"],
		  Available: true,
		  imgs: "../../imgs/sweat.png"
		},
		{
		  type: "T-Shirt",
		  Price: "15,00",
		  Size: ["S", "M", "L", "XL"],
		  Available: true,
		  imgs: "../../imgs/sweat.png"
		},
		{
		  type: "Towel",
		  Price: "10,00",
		  Size: null,
		  Available: true,
		  imgs: "../imgs/sweat.png"
		},
		{
			type: "Mouse Pad",
			Price: "5,00",
			Size: null,
			Available: true,
			imgs: "../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: "20,00",
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  },
		  {
			type: "Sweat Shirt",
			Price: 20.00,
			Size: ["S", "M", "L", "XL"],
			Available: true,
			imgs: "../../imgs/sweat.png"
		  }
	  ]
	return(
		<div className="Product-container">
			{Product.map(product => <Item product={product}/>)}
		</div>
	);
}

export default Items