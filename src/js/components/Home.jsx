import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
let clicked = false;

//create your first component
const Home = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function handleChange(event) {
		setEmail(event.target.value);
		console.log(email);
	}

	function enviarDatos(event) {
		event.preventDefault()
		console.log(email, password);

	}

	return (
		<div className="text-center">
			<h1>Componentes React controlados</h1>
			<form className="w-50 mx-auto align-self-center" onSubmit={enviarDatos}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default Home;