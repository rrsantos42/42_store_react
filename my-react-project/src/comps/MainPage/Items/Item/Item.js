import img from "../../../../imgs/sweat.png"
import "./item.css"
// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



const Item = (props) => {

	const history = useHistory();
	return(
		<button className="product-btns" onClick={() => 
			history.push('/42Store/product')}
			>
			<div className="product-container">
				<img src={img} alt="Product" className="product-img"></img>
				<p>{props.product.type}</p>
				<p className="price">{props.product.price} €</p>

			</div>
		</button>
	);
}

export default Item