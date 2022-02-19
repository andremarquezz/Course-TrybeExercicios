// Exercicio com getElementByID
// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

// document.getElementById("page-title").innerText = "Não tenho filme favorito :( , mas amo animes!"
// document.getElementById("second-paragraph").innerText = "Assistam Naruto!! Faz parte para evoluir como ser humano!"
// document.getElementById("subtitle").innerText = "To manjando já"


// console.log(document.getElementsByClassName("paragraphClass"))

// let paragrafo = document.getElementsByClassName("paragraphClass")
// paragrafo[1].style.color = "green"
// let subtitulo = document.getElementsByTagName("h4")
// subtitulo[0].style.color = "blue"

//  Exercicio com queryselector

// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

document.querySelector("#page-title").innerText = "Não tenho filme favorito :( , mas amo animes!"
document.querySelector("#second-paragraph").innerText = "Assistam Naruto!! Faz parte para evoluir como ser humano!"
document.querySelector("#subtitle").innerText = "To manjando já"


console.log(document.querySelectorAll(".paragraphClass"))

let paragrafo = document.querySelector(".paragraphClass")
paragrafo.style.color = "green"
let subtitulo = document.querySelector("h4")
subtitulo.style.color = "blue"