// Here's where we are gonna grab the user input and use it to add a new burger. 

$(function () {
    $(".addBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $(".burgerName").val().trim(),
            devoured: false
        }
        console.log("The name of the burger is: " + newBurger.name);

        // And here we will post it. 
        // NEED TO ADD THE ID HERE
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );

    });
    $(".changeDevoured").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevouredState = {
            devoured: true
        }

        // And here we will post it. 
        // The idea is to change the devoured state to true. 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("the burger was devoured!");
                location.reload();
            }
        );

    });
    $(".deleteBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // And here we will post it. 
        // The idea is to change the devoured state to true. 
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("the burger was devoured!");
                location.reload();
            }
        );

    })

})
