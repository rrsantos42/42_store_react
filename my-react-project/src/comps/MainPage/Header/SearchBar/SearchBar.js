import "./SearchBar.css"


const SearchBar = () =>{
	return(
		<div className="Search">
			<input type="text" placeholder="Search.." className="Search-bar"/>
			<button className="search-btn">&#128269;</button>
		</div>
	);
}

export default SearchBar