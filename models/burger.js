// create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
            console.log("The selectAll pass from burger.js to the ORM is working.")
        });
    },

    // STILL NEED TO FIX THE NEXT TWO
    // What am I passing through the function? I understand the orm part of it, but don't think I understand the top part. 
    insertOne:function (cols, vals, cb) {
        orm.insertOne(val, function(res) {
            cb(res);
            console.log("The insertOne pass from burger.js to the ORM is working.")
        });
    },

    // updateOne:function(cb) {
    //     orm.upDateOne("burgers",function(res) {
    //         cb(res)
    //     });
    // }
};

// This is the export for the database functions for the controller. burgers_controller.js
module.exports = burger;