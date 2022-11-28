import Mylogo from "../../../../imgs/logo.png" 
import "./logo.css"

const Logo = () =>{
	return(
		<img src={Mylogo} className="logo-img" alt="logo"></img>
	);
}
export default Logo