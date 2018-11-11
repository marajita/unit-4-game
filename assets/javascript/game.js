// 

var winCount = 0; // for points won
var lossCount = 0; // for points lost
var totalCount = 0; // variable to display totalScore to HTML
var randomNumber = 0; // variable to display (the number between 18-120) randomNum to HTML
var blueRandom = 0; // for random number (1, 12)
var greenRandom = 0;
var redRandom = 0;
var yellowRandom = 0;

// this is calling the function to start the game
$(document).ready(function () { 
    startOrReset(); 

    //this will add a totalCount while clicking blue crystal
    $("#blue").click(function () { 
       // console.log("blue clicked")
        totalCount = totalCount + blueRandom; 
       // console.log(totalCount);

        $("#totalScore").text(totalCount);
        checkWinOrLosses();
    });

    //this will add a totalCount while clicking green crystal
    $("#green").click(function () {
        //console.log("greenClicked")
        totalCount = totalCount + greenRandom;
        //console.log(totalCount);

        $("#totalScore").text(totalCount);
        checkWinOrLosses();
    });

    //this will add a totalCount while clicking red crystal
    $("#red").click(function () {
        //console.log("redClicked")
        totalCount = totalCount + redRandom;
        //console.log(totalCount);

        $("#totalScore").text(totalCount);
        checkWinOrLosses();
    });

    //this will add a totalCount while clicking yellow crystal
    $("#yellow").click(function () {
        //console.log("yellowClicked")
        totalCount = totalCount + yellowRandom;
        //console.log(totalCount);

        $("#totalScore").text(totalCount);
        checkWinOrLosses();
    });

});

//this is to display the random number between max and min in HTML randomNum,
function getRandomNum(min, max) {
    var r = Math.floor(Math.random() * (+max - +min) + min);
    //console.log("Random Number" + r)
    return r;
}

function checkWinOrLosses() {
    if (totalCount === randomNumber) { // if the totalCount=randomNum users wins and displays the message and updates the winCOunt
        winCount++;
        $("#resultID").text("You Won!!!");
        $("#wins").empty();
        $("#wins").append(winCount);
        startOrReset();

    }
    else if (totalCount > randomNumber) { //if the total count is greater than random number user losses and displays you lost message and update the lost count
        lossCount++;
        $("#resultID").text("You Lost!!!");
        $("#losses").empty();
        $("#losses").append(lossCount);
        startOrReset();
    }
}

function startOrReset() { //this function will be used to start the game and will reset the game once the user wins or losses
    totalCount = 0; // total count will be showing as 0 at the begining of the game
    randomNumber = getRandomNum(18, 120);; // this is generating the random number between 18-20 and update the golbal variable
    $("#randomNum").text(randomNumber); // display the randomNumber to html randomNum
    $("#totalScore").text(totalCount); // display the totalCount to HTML totalScore

    //this is generating the random number between 1-12 for each crystal
    blueRandom = getRandomNum(1, 12);
    greenRandom = getRandomNum(1, 12);
    redRandom = getRandomNum(1, 12);
    yellowRandom = getRandomNum(1, 12);
}


