//obtaining the length of our selector class drum and assigning it to our named variable numberOfDrums
var numberOfDrums = document.querySelectorAll(".drum").length;
//looping through all our buttons with class drum
for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        
    //This detects a button clicked and plays it corresponding sound.    
   var innerhtmlOfButton = this.innerHTML;

   makeSound(innerhtmlOfButton);
   buttonAnimation(innerhtmlOfButton);


    
    })

}

 //This detects a keyboard character pressed and plays it corresponding sound. 
 //the event parameter contains all the properties of the pressed character of which we access the property that matters to us which is the key property which gives us the name of the key we pressed on the keyboard.  
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})

//Switch statement within function to match button or keyboard character to its sound

function makeSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
    
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
    
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    
        default:
            // alert("Not a button !");
            var twentyOne = new Audio("sounds/21_Savage_-_a_lot_ft_J_Cole_talkglitz.tv.mp3");
            twentyOne.play();
    
    
       }
    

}

//function for animation playback

function buttonAnimation(currentKey){
    var liveButton = document.querySelector("."+ currentKey);
    liveButton.classList.add("pressed");

    setTimeout(function(){
        liveButton.classList.remove("pressed");
    }, 100);
}


