// Manipulación del DOM (Document Object Model)

//1. obtener el elemento
// document.getelementById() 
// document.querySelector()               --Los más usados
// document.

//2. manipular el elemento => html, css, evento...

function changeStyle() {
    let button = document.querySelector("button") //obtenemos el primer elemento button
    button.classList.remove("btn-primary") //quitamos la clase btn-primary
    button.classList.add("btn-success") //añadimos la clase btn-success

}

//en la misma linea obtenemos el elemento, el evento, y le decimos que ejecute una funcion
document.querySelector("#btn-show").addEventListener("click", function (event) { //le podemos declarar un parámetro para luego reutilizarlo o verlo
    //añadimos la manipulación, en este caso añadir una foto al div #box
    document.querySelector("#box").innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhE6BR-rfQWZ_lpTkxrjLc70wncjrIps1_Q&s"/>`

    console.log(event);

})

let lista = document.querySelectorAll("li")

for (let index = 0; index < lista.length; index++) {
    lista[index].addEventListener("click", function (event) {

        event.target.style.backgroundColor = "yellow"

    })

}

function tarea(event) {
    if (event.keyCode === 13) {
        console.log("agregar tarea");

    }
}

//eventos