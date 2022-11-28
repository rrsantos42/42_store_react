// import MainContainer from "./MainContainer/MainContainer";
import "./LandingPage.css"
import { useHistory } from 'react-router-dom';


const LandingPageLisbon = () => {
	const history = useHistory();
	return(
		<div class="center">
		<h1>WELCOME To 42Lisbon WebStore</h1>
		<div className="btns-container">
		<div class="btn"  onClick={() => 
			history.push('/42Store/home')}>Enter</div>
		<div class="redirect"  onClick={() => 
			history.push('/Porto')}>Go to Porto WebStore</div>
		</div>
	  </div>
	);
};
export default LandingPageLisbon