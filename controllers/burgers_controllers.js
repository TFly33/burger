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

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// exporting router
module.exports = router; 