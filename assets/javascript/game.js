// 

var winCount = 0; // variable for points won
var lossCount = 0; // variable for points lost
var totalCount = 0;
var userGuess = 0;
var randomNumber = 0;
var blueRandom = 0;
var greenRandom = 0;
var redRandom = 0;
var yellowRandom = 0;

$(document).ready(function () {

    document.getElementById("randomNum").innerHTML = getRandomNum(18, 120);

    blueRandom = getRandomNum(1, 12);
    greenRandom = getRandomNum(1, 12);
    redRandom = getRandomNum(1, 12);
    yellowRandom = getRandomNum(1, 12);

    $("#blue").click(function () {
        console.log("blue clicked")
        totalCount = totalCount + blueRandom;
        console.log(totalCount);

        document.getElementById("totalScore").innerHTML = totalCount;
        checkWinOrLosses();


    });

    $("#green").click(function () {
        console.log("greenClicked")
        totalCount = totalCount + greenRandom;
        console.log(totalCount);

        document.getElementById("totalScore").innerHTML = totalCount;
        checkWinOrLosses();

    });

    $("#red").click(function () {
        console.log("redClicked")
        totalCount = totalCount + redRandom;
        console.log(totalCount);

        document.getElementById("totalScore").innerHTML = totalCount;
        checkWinOrLosses();

    });

    $("#yellow").click(function () {
        console.log("yellowClicked")
        totalCount = totalCount + yellowRandom;
        console.log(totalCount);

        document.getElementById("totalScore").innerHTML = totalCount;
        checkWinOrLosses();

    });


});


function getRandomNum(min, max) {
    var r = Math.floor(Math.random() * (+max - +min) + min);
    //console.log("Random Number" + r)
    return r;
}

function checkWinOrLosses(){
    if (totalCount === randomNumber){
        winCount++;
        document.getElementById("resultID").innerHTML = "You Won!!!";
        document.getElementById("wins").innerHTML = winCount;

    }
    else if(totalCount> randomNumber){
        lossCount++;
        document.getElementById("resultID").innerHTML = "You Lost!!!"; 
        document.getElementById("losses").innerHTML = lossCount; 
    }
    }


    