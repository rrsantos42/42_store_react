import Header from './Header/header';
import Items from './Items/Items';
const MainPage = (props) => {
	return(
	<div>
		<Header/>
		<Items product={props.product}/>
	  </div>
	);
}
export default MainPage