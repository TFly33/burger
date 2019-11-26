var connection = require("../config/connection.js");


// Let's use this helper. It'll turn the input's into an array that includes strings. 
function printQuestionMarks(num) {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push("?")
    }

    return arr.toString();
}


// similar idea:
function objtoSql(ob) {
    var arr = [];

    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
    return arr.toString();
}
// Functions I'll be using: 

// selectAll();
// function selectAll()
// insertOne();
// updateOne();


var orm = {
    selectAll: function (burgerInput, cb) {
        var queryString = "SELECT * FROM " + burgerInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};



module.exports = orm;