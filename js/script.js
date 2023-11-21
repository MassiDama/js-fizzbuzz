// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

// costruzione ciclo 
for (let i = 1; i <= 100; i++) {

    // andiamo a creare il div
    const square =  `<div class="square"> ${i} </div>` ;

    // andiamo ad aggiungere il div al container 
    container.innerHTML += square;
}