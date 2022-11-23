import "./header.css"
import Logo from "./logo/logo";
import SearchBar from "./SearchBar/SearchBar";
import Btns from "./Btns/Btns";

const Header = () => {
	return(
		<div className="nav-container">
			<Logo/>
			<SearchBar/>
			<Btns/>
		</div>
	);
}


export default Header