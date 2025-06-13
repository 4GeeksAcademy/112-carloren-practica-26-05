import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
let clicked = false;

//create your first component
const Home = () => {
	const [nombre, setNombre] = useState("Luis")
	const [text, setText] = useState("Cambiar nombre")
	const [color, setColor] = useState("btn-warning")


	console.log(nombre);

	function saludar() {
		console.log(clicked);

		if (clicked === false) {
			clicked = true
			setNombre("Carlos")
			setText("Nombre cambiado")
			setColor("btn-success")
		} else {
			clicked = false
			setNombre("Luis")
			setText("Cambiar nombre")
			setColor("btn-warning")
		}
		console.log(clicked);

	}
	return (
		<div className="text-center">
			<h1>Hola {nombre}</h1>
			<p className={`btn ${color}`} onClick={saludar}>{text}</p>
		</div>
	);
};

export default Home;