//funcion declarada ------------------------------

// function cantar() {
//     console.log("Canción random");

// }

//funcion de expresión (guardada en variable) ---------------------------

// let saludar = function () {
//     console.log("Hola");

// }

//se llaman igual 

// cantar()             //Las funciones declaradas se pueden llamar incluso
//en una línea anterior a su declaración

// saludar()            //Las funciones de expresión deben llamarse después


//funcion flecha (arrow function)----------------------------------

// let bailar = () => {     //es una forma más reducida de declarar funciones
//     console.log("Baila baila bailando va");

// }

// let bailar = () => `Estoy bailando` //cuando hay un solo return se puede declarar sin {} ni return
//la función de arriba sería lo mismo que esto:
// function bailar() {
//     return `Estoy bailando`
// }

// let bailar = () => {
//     let animo = prompt("¿Estás de ánimo?")

//     if (animo === "si") {
//         console.log("Pues a bailar")
//     } else {
//         console.log("Pues bailamos en otra ocasión")
//     }
// }

//parámetros de una función ----------------------

// function cantar(param1, param2) {    //son espacios de memoria que se usarán solo dentro de la función
//     console.log(`${param1} le dedicó una canción a ${param2}`);

// }

// cantar("Carlos", "Judith") // al llamar la función se declara el valor de los parámetros

//objetos literales ----------------------------------------

// let persona = {
//     nombre: "Carlos",
//     cursos: ["html", "js", "css"],
//     saludar: function () {
//         console.log("Holaaa");

//     }
// }

// persona.saludar()           //igual que con cualquier función, hay que llamar la función
//                             //dentro del objeto (método) con los paréntesis ()

//recorrer array con bucle for --------------------------

// let cursos = ["html", "js", "css"]

// for (let index = 0; index < cursos.length; index++) {
//     console.log(cursos[index]);

// }

//ejercicio generador de dominios ------------------------------

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

// OPERADOR TERNIARIO ---------------------------------------
// es una forma más corta de escribir un ifelse
//esto:
//     if (animo === "si") {
//         console.log("Pues a bailar")
//     } else {
//         console.log("Pues bailamos en otra ocasión")
//     }

//podría ser esto:
//      animo === "si" ? console.log("Pues a bailar") : console.log("Pues bailamos en otra ocasión")

//TEMPLATE LITERALS -------------------------------------------
// es otra forma de concatenar elementos de forma más sencilla y
// que permite saltos de línea

//para hacer:
// let nombre = "Carlos"
// let apellido = "Lorenzo"
// console.log("Mi nombre es: " + nombre + "\n" +
//     "Mi apellido es: " + apellido
// );

// se podría hacer:
// console.log(`Mi nombre es: ${nombre}
// Mi apellido es: ${apellido}`);


//QUERY SELECTOR----------------------------------------
//Para acceder a elementos del HTML 
//  document.querySelector("h1").style.color = "blue"
//Esto accede a la propiedad color del estilo del primer h1 que encuentre
//y lo cambia a azul

//Si quiesiera hacer lo mismo para todos los h1, sería así
//document.querySelectorAll("h1").forEach(h1 => h1.style.color = "blue")