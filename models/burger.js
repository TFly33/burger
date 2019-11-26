// create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      }

};

// This is the export for the database functions for the conroller. burgers_controller.js
module.exports = burger;