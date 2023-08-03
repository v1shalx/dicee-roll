var randomno=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomno + ".png";

var randomImageSource="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImageSource);

var randomno2=Math.floor(Math.random()*6)+1;
 var randomImageSource2="images/dice"+randomno2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

 if(randomno>randomno2){
    document.querySelector("h1").innerHTML="player 1 won";
 }
 else if(randomno2>randomno){
    document.querySelector("h1").innerHTML="player 2 won";
 }
 else{
    document.querySelector("h1").innerHTML="draw";
 }
