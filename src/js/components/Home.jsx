import React from "react";
import Navbar from "./Navbar"
import Card from "./Card"
import Jumbotron from "./jumbotron"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let nombre = "Luis"
	return (
		<div className="text-center">
			<Card name="Carlos" />
			<Card name="Judith" />         {/* Al llamar al componente se le puede pasar cualquier propiedad para utilizarla */}
			<Card name="Rosinni" />
			<Card name={nombre} />
		</div>
	);
};

export default Home;