var wins = 0;
var losses = 0;
var current = 0;
var totalScore = 0;
var clicks = 0;
var totalScore = 0;
var target = 0;

$(document).ready(function () {

    var amber = Math.floor(Math.random() * 12) + 1;
    var emerald = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    target = Math.floor(Math.random()*102)+19;

    console.log("amber = " + amber);
    console.log("emerald = " + emerald);
    console.log("ruby = " + ruby);
    console.log("sapphire = " + sapphire);


    var reset = function() {
        var amber = Math.floor(Math.random() * 12) + 1;
        var emerald = Math.floor(Math.random() * 12) + 1;
        var ruby = Math.floor(Math.random() * 12) + 1;
        var sapphire = Math.floor(Math.random() * 12) + 1;
        target = Math.floor(Math.random()*102)+19;
        totalScore = 0;
        $("#current").text(totalScore);
        $("#target").text(target);
        console.log("amber = " + amber);
        console.log("emerald = " + emerald);
        console.log("ruby = " + ruby);
        console.log("sapphire = " + sapphire);    
    }

    var theEnd = function() {
        if(totalScore>target) {
            var result="You lose.";
            console.log(result);
            $("#win-lose").text(result);
            losses++;
            $("#losses").text(losses);
            reset();
        }else if(totalScore===target) {
            var result="You win.";
            console.log(result);
            $("#win-lose").text(result);
            wins++;
            $("#wins").text(wins);
            reset();
        };

    }

    $("#gem-1").click(function () {
        totalScore += amber;
        $("#current").text(totalScore);
        console.log("totalScore =" + totalScore);
        theEnd();
    });

$("#gem-2").click(function () {
        totalScore += emerald;
        $("#current").text(totalScore);
        console.log("totalScore =" + totalScore);
        theEnd();
    });

    $("#gem-3").click(function () {
        totalScore += ruby;
        $("#current").text(totalScore);
        console.log("totalScore =" + totalScore);
        theEnd();
    });

    $("#gem-4").click(function () {
        totalScore += sapphire;
        $("#current").text(totalScore);
        console.log("totalScore =" + totalScore);
        theEnd();
    });

    $("#target").text(target);
    $("#current").text(totalScore);

});
