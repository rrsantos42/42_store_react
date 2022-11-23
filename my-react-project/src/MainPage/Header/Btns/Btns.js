import "./Btns.css"
import HeaderbtnCard from "./HeaderCard/HeaderBtnCard";

const Btns = () =>{
	return(
		<div className="Btns">
				<HeaderbtnCard/>
				<a href="https://www.intra.42.fr"><button className="log-in_btn" alt="log-in">Log in Intra</button></a>
		</div>
	);
}

export default Btns