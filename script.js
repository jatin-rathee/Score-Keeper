var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var numInput = document.querySelector("input");
var limit = document.querySelector(".limit");
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1.classList.add("winner");
        }
        p1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2.classList.add("winner");
        }
        p2.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1.textContent = p1Score;
    p2.textContent = p2Score;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
}

resetButton.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function(){
    winningScore = Number(this.value);
    limit.textContent = winningScore;
    reset();
});