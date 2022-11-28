import { useState } from "react";
import CartIcon from "./btn-card/CardIcon";
import "./HeaderBtnCard.css";
const HeaderbtnCard = () =>{

	const [CartItems, SetCartItems] = useState(0)

	return(
		<button className="button">
			<span className="icon">
				<CartIcon/>
			</span>
			<span>
				Your Cart
			</span>
			<span className="badge">
				{CartItems}
			</span>

		</button>
	);
};

export default HeaderbtnCard