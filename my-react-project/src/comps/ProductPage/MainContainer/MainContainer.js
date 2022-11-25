import "./MainContainer.css"
import ProductImg from "./ProductImg/ProductImg";
import Description from "./Description/Description";
const MainContainer = (props) =>{
	return(
		<div className="main-container">
			<ProductImg/>
			<Description product={props.product}/>
		</div>
	);
};

export default MainContainer