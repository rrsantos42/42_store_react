import CartIcon from "./btn-card/CardIcon";
import "./HeaderBtnCard.css";
const HeaderbtnCard = () =>{
	return(
		<button className="button">
			<span className="icon">
				<CartIcon/>
			</span>
			<span>
				Your Cart
			</span>
			<span className="badge">
				0
			</span>

		</button>
	);
};

export default HeaderbtnCard