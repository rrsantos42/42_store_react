import "./Description.css"
import Selector from "../Selector/Selector";
import QuantitySelection from "./QuantitySelection/QuantitySelection";
import AddToCart from "./AddToCart/AddToCart";

const Description = (props) =>{
	return(
		<div className="description-container">
			<h2 className="header">{props.product.type}</h2>
			<p className="description">{props.product.description}</p>
			<p className="price__description">{props.product.price}$</p>
			<Selector className="selector"/>
			<QuantitySelection/>
			<AddToCart/>
		</div>
	);
};

export default Description