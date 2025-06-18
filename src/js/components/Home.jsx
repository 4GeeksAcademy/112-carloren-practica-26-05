import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
let clicked = false;

//create your first component
const Home = () => {


	return (
		<div className="d-flex flex-column text-center">
			<h1>To-Do List</h1>
			<ul id="todo" className="list-group border align-self-center m-0">
				<li className="list-group-item align-self-center" style={{ width: "20em" }}><input type="text" className="border border-0 m-0 p-2 w-100" placeholder="Añadir tarea" /></li>
			</ul>
			<p className="border bg-secondary align-self-center mb-0" style={{ width: "19.5em", height: "5px", marginTop: "-1px" }}></p>
			<p className="border bg-dark align-self-center" style={{ width: "19em", height: "5px", marginTop: "-1px" }}></p>
		</div>
	);
};

export default Home;