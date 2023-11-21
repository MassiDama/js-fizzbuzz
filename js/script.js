// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

let square;

// costruzione ciclo 
for (let i = 1; i <= 100; i++) {

    // inserisco le condizioni 
    if ( i % 3 === 0 && i % 5 === 0 ) {
        
        // andiamo a creare il div
        square =  `<div class="square fizzbuzz"> ${"FizzBuzz"} </div>` ;

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

        console.log("FizzBuzz");

    } else if ( i % 5 === 0 ) {

        // andiamo a creare il div
        square =  `<div class="square buzz"> ${"Buzz"} </div>` ;

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

        console.log("Buzz");

    } else if ( i % 3 === 0 ) {

        // andiamo a creare il div
        square =  `<div class="square fizz"> ${"Fizz"} </div>` ;

        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

        console.log("Fizz");
        
    } else {
         
        // andiamo a creare il div
        square =  `<div class="square"> ${i} </div>` ;
         
        // andiamo ad aggiungere il div al container 
        container.innerHTML += square;

        console.log(i);
    } 



 


   
}


// .style.backgroundColor = "hsl(345.53deg 85% 60.78%)" ;

