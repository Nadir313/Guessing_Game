


// Generate a ramdom number
var randomNumber = Math.floor(Math.random () *100);

var button = document.getElementById("btn");
var guessedNumber = document.getElementById("userInput");
var output = document.getElementById("resultArea");
chip = document.getElementById("chipsNumber");
var tries = 10;

console.log(randomNumber);


button.addEventListener("click", function(){

    tries--;
    if(tries <= 0) {
        
        output.textContent = "you r out of luck !! good luck next time";
        return;
    }

    chip.textContent = "number of tries " + tries;

    if(guessedNumber.value > randomNumber) {
        
        output.textContent = "your guess is high";
    } else if(guessedNumber.value < randomNumber) {

        output.textContent = "your guess is low";
    }
     else {

        if(guessedNumber.value == randomNumber){

            if(tries>7){
                output.textContent = "you r genuis";
            }
            else{
                output.textContent = "congratulations you won after "+(tries);
            }
            return;
        }
    
    }
});





