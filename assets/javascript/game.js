// * There will be four crystals displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

$(document).ready(function () {

//  reset button, could only get operational by seperating this function but i dont quite understand why. possibly scope?
// $("#start").on('click', reset); --> this is how i attempted to set it up intially, i was jsut referencing the function reset at the bottom
    $("#start").on("click", function reset() {

        game = {
            score: 0,
            randomNumber: Math.floor(Math.random() * 121) + 19,
            rupee: {
                red: Math.floor(Math.random() * 13) + 1,
                blue: Math.floor(Math.random() * 13) + 1,
                green: Math.floor(Math.random() * 13) + 1,
                yellow: Math.floor(Math.random() * 13) + 1,
            },
            losses: game.losses,
            wins: game.wins,
        };

        $("#random-r").text(game.randomNumber);
        $("#user-score").text(game.score);
    });

        
        // When i restart my game the User-score from the last game remain,
        //  this does not happen when the user naturally plays through the game.    

        let game = {
            score: 0,
            randomNumber: Math.floor(Math.random() * 121) + 19,
            rupee: {
                red: Math.floor(Math.random() * 13) + 1,
                blue: Math.floor(Math.random() * 13) + 1,
                green: Math.floor(Math.random() * 13) + 1,
                yellow: Math.floor(Math.random() * 13) + 1,
            },
            losses: 0,
            wins: 0,

        };

        // Clearing the fields on the start of the game
        $("#start").text("Reset Game!");
        $("#win-score").text(game.wins);
        $("#loss-score").text(game.losses);
        $("#user-score").text(game.score);
        $("#random-r").text(game.randomNumber);



        // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        //   * Your game will hide this amount until the player clicks a crystal.
        //   * When they do click one, update the player's score counter.


        // Function for the green rupee

        $("#green-rupee").on("click", function () {
            result = game.score + game.rupee.green
            game.score = result
            $("#user-score").text(game.score);
            roundComplete();
            console.log(game.score);

        });

        // Function for the blue rupee

        $("#blue-rupee").on("click", function () {
            result = game.score + game.rupee.blue
            game.score = result
            $("#user-score").text(game.score);
            roundComplete();
            console.log(game.score);
        });


        // Function for the red rupee

        $("#red-rupee").on("click", function () {
            result = game.score + game.rupee.red
            game.score = result
            $("#user-score").text(game.score);
            roundComplete();
            console.log(game.score);
        });




        // Function for the yellow rupee

        $("#yellow-rupee").on("click", function () {
            result = game.score + game.rupee.yellow
            game.score = result
            $("#user-score").text(game.score);
            console.log(game.score);
            roundComplete();
        });


        // Testing game elements

        console.log(game.rupee.green);
        console.log(game.rupee.blue);
        console.log(game.rupee.red);
        console.log(game.rupee.yellow);
        console.log(game.score);
        console.log(game.randomNumber);



        function roundComplete() {
            // * The player wins if their total score matches the random number from the beginning of the game.
            if (game.score == game.randomNumber) {
                game.wins++
                alert("You freed the princess!");

                $("#win-score").text(game.wins);
                // * The game restarts whenever the player wins or loses.  
                reset();

                // * The player loses if their score goes above the random number.
            } else if (game.score > game.randomNumber) {
                game.losses++
                alert("The princess has been lost!");

                $("#loss-score").text(game.losses);


                // * The game restarts whenever the player wins or loses.  
                reset();
            }




            //   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
            function reset() {

                game = {
                    score: 0,
                    randomNumber: Math.floor(Math.random() * 121) + 19,
                    rupee: {
                        red: Math.floor(Math.random() * 13) + 1,
                        blue: Math.floor(Math.random() * 13) + 1,
                        green: Math.floor(Math.random() * 13) + 1,
                        yellow: Math.floor(Math.random() * 13) + 1,
                    },
                    losses: game.losses,
                    wins: game.wins,
                };

                $("#random-r").text(game.randomNumber);
                $("#user-score").text(game.score);
            }
        };
    
      


    // Below is for document ready above is for start function
});
// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.