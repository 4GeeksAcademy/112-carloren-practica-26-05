//funcion declarada

// function cantar() {
//     console.log("Canción random");

// }

//funcion de expresión (guardada en variable)

// let saludar = function () {
//     console.log("Hola");

// }

//se llaman igual 

// cantar()             //Las funciones declaradas se pueden llamar incluso
//en una línea anterior a su declaración

// saludar()            //Las funciones de expresión deben llamarse después


//funcion flecha (arrow function)

// let bailar = () => {     //es una forma más reducida de declarar funciones
//     console.log("Baila baila bailando va");

// }

//parámetros de una función

// function cantar(param1, param2) {    //son espacios de memoria que se usarán solo dentro de la función
//     console.log(`${param1} le dedicó una canción a ${param2}`);

// }

// cantar("Carlos", "Judith") // al llamar la función se declara el valor de los parámetros

//objetos literales

// let persona = {
//     nombre: "Carlos",
//     cursos: ["html", "js", "css"],
//     saludar: function () {
//         console.log("Holaaa");

//     }
// }

// persona.saludar()           //igual que con cualquier función, hay que llamar la función
//                             //dentro del objeto (método) con los paréntesis ()

//recorrer array con bucle for

// let cursos = ["html", "js", "css"]

// for (let index = 0; index < cursos.length; index++) {
//     console.log(cursos[index]);

// }

//ejercicio generador de dominios

// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];


// for (let i = 0; i < pronoun.length; i++) {

//     for (let j = 0; j < adj.length; j++) {

//         for (let k = 0; k < noun.length; k++) {

//             console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);

//         }
//     }
// }