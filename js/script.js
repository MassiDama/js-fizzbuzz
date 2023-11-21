// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

let square;


// costruzione ciclo 
for (let i = 1; i <= 100; i++) {

   

   

    // inserisco le condizioni 
    if ( i % 3 === 0 && i % 5 === 0 ) {
        
        // andiamo a creare il div
        square =  `<div class="square"> ${"FizzBuzz"} </div>` ;

        let fizzBuzz = document.querySelector(".square");
        fizzBuzz.classList.add("fizzbuzz");

        fizzBuzz.style.backgroundColor = "red";

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

    } else if ( i % 5 === 0 ) {

        // andiamo a creare il div
        square =  `<div class="square"> ${"Buzz"} </div>` ;

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

    } else if ( i % 3 === 0 ) {

        // andiamo a creare il div
        square =  `<div class="square"> ${"Fizz"} </div>` ;

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;
        
    } else {
         
        // andiamo a creare il div
        square =  `<div class="square"> ${i} </div>` ;
         
        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;
    } 



 


   
}


// .style.backgroundColor = "hsl(345.53deg 85% 60.78%)" ;

