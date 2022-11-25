import Header from "../MainPage/Header/header";
import MainContainer from "./MainContainer/MainContainer";

const ProductPage = (props) =>{
	return(
		<div>
			<Header/>
			<MainContainer product={props.product}/>
		</div>
	);
};
export default ProductPage