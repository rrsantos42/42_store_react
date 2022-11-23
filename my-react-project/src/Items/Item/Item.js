import img from "../../imgs/sweat.png"
import "./item.css"


const Item = (props) => {

	const btnHandler = () =>{
		console.log("clicked",props.product.type)
		
	}

	return(
		<button className="product-btns" onClick={btnHandler}>
			<div className="product-container">
				<img src={img} alt="Product" className="product-img"></img>
				<p>{props.product.type}</p>
				<p className="price">{props.product.Price} €</p>

			</div>
			</button>
	);
}

export default Item