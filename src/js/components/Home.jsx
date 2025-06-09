import React from "react";
import Navbar from "./Navbar"
import Card from "./Card"
import Jumbotron from "./jumbotron"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />              {/* Todas las funciones llamadas deben estar dentro de un componente. En este caso, un div*/}
			<Jumbotron />
		</div>
	);
};

export default Home;