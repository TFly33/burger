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
            function() {
                console.log("new burger added");
                location.reload();
            }
        );

    })

})


// Here is the code to devour the burger. 
// $(function () {
//     $(".changeDevoured").on("click", function (event) {
//         event.preventDefault();

//         var id = $(this).date("id");
//         var newDevouredState = {
//             devoured: true
//         }
        
//         console.log("Moving the burger with this: " + newBurger.name);

//         // And here we will post it. 
//         // The idea is to change the devoured state to true. 
//         $.ajax("/", {
//             type: "PUT",
//             data: newDevouredState
//         }).then(
//             function() {
//                 console.log("the burger was devoured!");
//                 location.reload();
//             }
//         );

//     })

// })