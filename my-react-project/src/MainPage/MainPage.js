import Header from './Header/header';
import Banner from './banner/banner';
import Items from './Items/Items';
const MainPage = (props) => {
	return(
	<div>
		<Header/>
		<Banner/>
		<Items product={props.product}/>
	  </div>
	);
}
export default MainPage