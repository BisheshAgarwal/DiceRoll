var randomPlayer1 = Math.floor(Math.random() * 6) + 1; 
var randomPlayer2 = Math.floor(Math.random() * 6) + 1; 
document.querySelector(".img1").setAttribute("src", "images/dice"+randomPlayer1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomPlayer2+".png");

if(randomPlayer1 > randomPlayer2)
    {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    }
else if(randomPlayer1 === randomPlayer2)
    {
        document.querySelector("h1").innerHTML = "Draw";
    }
else
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }