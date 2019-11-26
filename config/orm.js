var connection = require("../config/connection.js");


// Let's have this helper in case we decide to use it. Not using it for now. It'll turn the input's into an array that includes strings. 
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
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // HOW DO I PASS THE VALUE OF THE USER'S INPUT INTO THIS SLOT FOR VALUE?????
    // create: function (col, val, cb) {
    //     connection.query("INSERT INTO burgers (burger_name, devoured) VALUES " + (col, val), function (err, result) {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // }

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
};





module.exports = orm;