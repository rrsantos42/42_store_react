import Item from "./Item/Item";
import "./Item.css"

const Items = (props) =>{

	return(
		<div className="Product-container">
			{props.product.map(product => <Item product={product} key={product.id}/>)}
		</div>
	);
}

export default Items