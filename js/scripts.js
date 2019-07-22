/* JavaScript file for the Drum Kit app */

// Get all drum buttons from DOM in a list once; reference from here after 
let drumBtns = document.querySelectorAll(".drum");

// Add a click event listener to each button
for (let i = 0; i < drumBtns.length; i++) {
    drumBtns[i].addEventListener("click", (event) => handleClick(event));
}

// Handle the button click by playing sound
const handleClick = (event) => {
    // Pass this button tag's inside text to the sound-making function
    makeSound(event.target.innerText);
};

// Add 'keydown' event listener to keyboard (document)
document.addEventListener("keydown", (event) => {
    makeSound(event.key); // call function to play sound
});

const makeSound = (key) => {
    // Check button's key against different letters; play respective sound
    switch (key.toLowerCase()) {
        case "w":
            let tom1 = new Audio("assets/sounds/tom-1.mp3"); // set audio file
            tom1.play(); // play audio file
            break;
        case "a":
            let tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("assets/sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            // console.log("No audio was found for '" + key + "'.");
            break;
    } // end switch
    buttonAnimation(key); // call function to animate button
}; // end makeSound

const buttonAnimation = (currentKey) => {
    // Loop through drum buttons array; check that there's a btn text same as key passed
    for (let i = 0; i < drumBtns.length; i++) {
        if (drumBtns[i].innerText === currentKey.toLowerCase()) {
            drumBtns[i].classList.add("pressed"); // add animation class to btn
            // remove animation class after 120ms
            setTimeout(function() {
                drumBtns[i].classList.remove("pressed");
            }, 120);
        }
    }
};