$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    $('#winCount').text("Wins: " + wins);
    $('#lossCount').text("Losses: " + losses);
    
    var randomTotal = 0;
    var foodImg = ["assets/images/food1.png","assets/images/food2.png","assets/images/food3.png","assets/images/food4.png"];
    var playerTotal = 0;

    $('#match').text("You have a total of " + randomTotal + " berries.");
    $("#yourNum").text("You've spent " + playerTotal + " berries.");

    
    function foodNum() {

        // for loop to iterate through index and use string as a source for image. 
        for (i = 0; i < foodImg.length; i++) {

            // DOM manip randomTotal 
            $('#match').text("You have a total of " + randomTotal + " berries.");

            // creates food image with same classes but with different attributes
            var food = $("<img>");
            food.addClass("button foodButton m-3");
            food.attr("src", foodImg[i]);
            food.attr("data-number", Math.floor(Math.random() * 12 )+ 1);

            // adds image to DOM
            $("#foods").append(food);
            console.log(food);
            
        }

    }

    function gameplay(){

        // generates new variables and add to DOM
        var randomTotal = Math.floor(Math.random() * 121 + 19);
        $('#match').text("You have a total of " + randomTotal + " berries.");
        var playerTotal = 0;
        $("#yourNum").text("You've spent " + playerTotal + " berries.");
        
        $(".button").on("click", function () {

            // grabs the random number of the food button that was clicked.
            var foodCost = $(this).attr("data-number");

            // converts string to num
            foodCost = parseInt(foodCost);
            
            // Adds the number from the button clicked to the player's total cost.
            playerTotal += foodCost;
            
            // inputs total user spent back to the DOM
            $("#yourNum").text("You've spent " + playerTotal + " berries.");
            console.log(playerTotal);
            
            // win and lose conditions
            if (playerTotal === randomTotal) {

                alert("Just enough berries!");
                wins++;
                $('#winCount').text("Wins: " + wins);
                
                // clear images and its values and restart the game
                $("#foods").empty();
                foodNum();
                gameplay();
            }

            else if (playerTotal > randomTotal) {

                alert("You spent too much!");
                losses++;
                $('#lossCount').text("Losses: " + losses);

                // clear images and its values and restart the game
                $("#foods").empty();
                foodNum();
                gameplay();
            }
        })
    
    }

    foodNum();
    gameplay();
});

