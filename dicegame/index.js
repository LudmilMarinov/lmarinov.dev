let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);
let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";
image1 = document.querySelectorAll("img")[0];
image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

// function dice1 () {
//     if (randomNumber1 === 1){
//         document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
//     }else if (randomNumber1 === 2){
//         document.querySelector(".img1").setAttribute("src", "./images/dice2.png"); 
//     }else if (randomNumber1 === 3){
//         document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
//     }else if (randomNumber1 === 4){
//         document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
//     }else if (randomNumber1 === 5){
//         document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
//     }else if (randomNumber1 === 6){
//         document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
//     }
// }
// function dice2 () {
//     if (randomNumber2 === 1){
//         document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
//     }else if (randomNumber2 === 2){
//         document.querySelector(".img2").setAttribute("src", "./images/dice2.png"); 
//     }else if (randomNumber2 === 3){
//         document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
//     }else if (randomNumber2 === 4){
//         document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
//     }else if (randomNumber2 === 5){
//         document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
//     }else if (randomNumber2 === 6){
//         document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
//     }
// }
function announceWinnerOrDraw (){
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    }else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }else {
        document.querySelector("h1").innerText = "Draw! Refresh to reroll!";
    }
}
// dice1();
// dice2();
announceWinnerOrDraw();