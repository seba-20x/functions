//2.2

// Funcion dada en el desafío:

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
// }

// const ele = document.getElementById("ele1") 
// ele.addEventListener("click", pintar);

// Modificacion para que reciba el elemento:

const elem = document.getElementById("ele1");

function pintar(ele) {
    ele.style.backgroundColor = 'yellow';
}
 
elem.addEventListener("click", (event) => {
    pintar(event.target);
});


// 2.3

// nota: Descomentar codigo para revisión 

// const ele = document.getElementById("ele1")

// function pintar(color="green") {
//     ele.style.backgroundColor = color
// }

// ele.addEventListener("click", () => {
//     pintar('yellow')
// });

