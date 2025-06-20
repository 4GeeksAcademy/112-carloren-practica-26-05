import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {

	const [characters, setCharacters] = useState([])

	function getCharacter() {
		fetch('https://rickandmortyapi.com/api/character', { method: "GET" }) //busca info en la url
			.then((response) => response.json()) 			// promete que si llega la info la guardo en un formato, en este caso json (no es una extensión, es formato de datos) para poder interpretarla y crear una clase
			.then((data) => setCharacters(data.results))  	//promete que si se formatea bien lo guarda en un espacio, en este caso data, y lo procesa, en ese caso, hace un console.log
			.catch((error) => console.log(error)) 			//si algo sale mal, avisa
	}

	useEffect(() => {
		//código que queremos que se ejecute al cargar el componente
		getCharacter()
	}, [])

	console.log(characters);


	return (
		<div className="d-flex flex-column text-center">
			<a href="#" className="btn btn-info m-auto my-5" onClick={getCharacter}>Traer personajes</a>
			<ul className="list-group m-auto">
				{characters.map((item, index) => <li key={index} className="list-group-item">{item.name}</li>)}
			</ul>
		</div>
	);
};

export default Home;