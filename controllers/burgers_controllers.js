// First we need express
var express = require("express");

// Here is our router. Also will export this at the end. 
var router = express.Router();

// here is out bruger variable, required from the burgers js file in the model. 
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })



})

// exporting router
module.exports = router; 