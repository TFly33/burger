// First we need express
var express = require("express");

// Here is our router. Also will export this at the end. 
var router = express.Router();

// here is our burger variable, required from the burgers js file in the model. 
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        // I'm pretty sure this is the object of burgers from MYSQL, which we are turning into an HBS object. 
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // THIS IS GOING TO THE INDEX OF HANDLEBARS 
        res.render("index", hbsObject)
    })

})

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name,
            false
        ], function (result) {
            // Send back the name of the new burger. Nothing to post here really. 
            res.json({ id: result.insertId });
        
    });
});

// exporting router
module.exports = router; 