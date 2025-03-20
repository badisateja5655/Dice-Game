
var randomdice1=Math.floor(Math.random()*6)+1;
var randomimage="images/"+"dice"+randomdice1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
var randomdice2=Math.floor(Math.random()*6)+1;
var randomimage2="images/"+"dice"+randomdice2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
var randomdice3=Math.floor(Math.random()*6)+1;
var randomimage3="images/"+"dice"+randomdice3+".png";
document.querySelectorAll("img")[2].setAttribute("src",randomimage3);

if (randomdice1 > randomdice2 && randomdice1 > randomdice3) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomdice2 > randomdice1 && randomdice2 > randomdice3) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else if (randomdice3 > randomdice1 && randomdice3 > randomdice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 3 Wins!";
} else if (randomdice1 == randomdice2 && randomdice2 == randomdice3) {
    document.querySelector("h1").innerHTML = "🔥 It's a Draw!";
} else if (randomdice1 == randomdice2) {
    document.querySelector("h1").innerHTML = "🎲 Draw Player 1 and Player 2!";
    document.querySelector("h1").style.fontSize = "3rem";

} else if (randomdice2 == randomdice3) {
    document.querySelector("h1").innerHTML = "🎲 Draw  Player 2 and Player 3!";
    document.querySelector("h1").style.fontSize = "3rem";

} else if (randomdice1 == randomdice3) {
    document.querySelector("h1").innerHTML = "🎲 Draw  Player 1 and Player 3!";
    document.querySelector("h1").style.fontSize = "3rem";

}