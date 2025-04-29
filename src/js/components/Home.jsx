import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {
	const [personajes, setPersonajes] = useState([])
	const [contador, setContador] = useState("")

	function saludar() {
		console.log("hola");

	}


	useEffect(() => {
		//va a ejecutar el codigo que nosotros especifiquemos
		saludar()
	}, [contador])


	// useEffect(() => {
	// 	//va a ejecutar el codigo que nosotros especifiquemos
	// 	saludar() //onload
	// 	obtenerInfo()
	// 	crearUsuario()
	// }, [])


	



	//fetch 
	function obtenerInfo() {
		fetch("https://rickandmortyapi.com/api/character", { //ve y busca la info en esta url 
			method: "GET"
		})
			.then((response) => response.json()) //yo prometo convertir la respuesta en un json
			// .then((data) => console.log(data)) // yo prometo guardar el json en un espacio de memoria para que sea un objeto
			// .then((data) => console.log(data.results)) 
			.then((data) => setPersonajes(data.results))
			.catch((error) => console.log(error) //si algo sale mal con las primeras promesas eso se captura y te aviso el error
			)
	}

	console.log(personajes);

	function crearUsuario(params) {
		fetch("https://playground.4geeks.com/todo/users/user1", { //ve y busca la info en esta url 
			method: "POST",
			headers:{
				"Content-type":"application/json"
			}
		})
			.then((response) => response.json()) //yo prometo convertir la respuesta en un json
			// .then((data) => console.log(data)) // yo prometo guardar el json en un espacio de memoria para que sea un objeto
			// .then((data) => console.log(data.results)) 
			.then((data) => console.log(data))
			.catch((error) => console.log(error) //si algo sale mal con las primeras promesas eso se captura y te aviso el error
			)
	}


	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Hello Rigo! {contador}</h1>
			<button onClick={()=>setContador(contador+1)}>+</button>
			<ul>
				{personajes.map((item)=><li key={item.id}>{item.name}</li>)}
			</ul>
			
		</div>
	);
};

export default Home;