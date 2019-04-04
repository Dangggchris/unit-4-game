$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    $('#winCount').text("Wins: " + wins);
    $('#lossCount').text("Losses: " + losses);
    
    var randomTotal = []
    var foodImg = ["assets/images/food1.png","assets/images/food2.png","assets/images/food3.png","assets/images/food4.png"];
    var playerTotal = 0;

    $('#match').text("You have a total of " + randomTotal + " berries.");
    $("#yourNum").text("You've spent " + playerTotal + " berries.");

    function foodNum() {

        for (i = 0; i < foodImg.length; i++) {

            $('#match').text("You have a total of " + randomTotal + " berries.");

            // creates food image with same classes but with different attributes
            var food = $("<img>");
            food.addClass("button foodButton m-3");
            food.attr("src", foodImg[i]);
            food.attr("data-number", Math.floor(Math.random() * 12 )+ 1);
            $("#foods").append(food);
            
        }

    }

    foodNum();

});

