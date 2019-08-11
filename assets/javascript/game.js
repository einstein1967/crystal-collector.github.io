$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var target = 0;
    var amber;
    var emerald;
    var ruby;
    var sapphire;

    var reset = function () {
        var colorArr = [];
        amber = Math.floor(Math.random() * 12) + 1;
        colorArr.push(amber);
        emerald = Math.floor(Math.random() * 12) + 1;
        if (!colorArr.includes(emerald)) {
            colorArr.push(emerald);
        }else{
            reset();
        }
        ruby = Math.floor(Math.random() * 12) + 1;
        if (!colorArr.includes(ruby)) {
            colorArr.push(ruby);
        }else{
            reset();
        }
        sapphire = Math.floor(Math.random() * 12) + 1;
        if (!colorArr.includes(sapphire)) {
            colorArr.push(sapphire);
        }else{
            reset();
        }
        console.log(colorArr);
        target = Math.floor(Math.random() * 101) + 20;
        totalScore = 0;
        $("#current").text(totalScore);
        $("#target").text(target);
    }

    var theEnd = function () {
        if (totalScore > target) {
            $("#win").text("");
            var result = "You lost.";
            $("#lose").text(result);
            losses++;
            $("#losses").text(losses);
            reset();
        } else if (totalScore === target) {
            $("#lose").text("");
            var result = "You won.";
            $("#win").text(result);
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

    reset();

});
