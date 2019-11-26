// Here's where we are gonna grab the user input and use it to add a new burger. 

$(function () {
    $(".addBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $(".burgerName").val().trim()
        }
        console.log("The name of the burger is: " + newBurger.name);
        console.log("The id of the burger is: " + newBurger.id);

        // And here we will post it. 

        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger added");
                location.reload();
            }
        );

    })

})

$(function () {
    $(".changeDevoured").on("click", function (event) {
        event.preventDefault();

        var id = $(this).date("id");
        var newDevouredState = {
            devoured: true
        }
        
        console.log("Moving the burger with this: " + newBurger.name);

        // And here we will post it. 
        // The idea is to change the devoured state to true. 
        $.ajax("/", {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("the burger was devoured!");
                location.reload();
            }
        );

    })

})