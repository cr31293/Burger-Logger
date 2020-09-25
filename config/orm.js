// import connection
var connection = require("../config/connection.js");


var orm = {
    // * `selectAll()`
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // * `insertOne()`
    create: function(name, cb) {
        var queryString = "INSERT INTO burgers SET ?";

        connection.query(queryString, { burger_name: name, devoured: false }, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    // * `updateOne()`
    update: function(newID, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        console.log(newID);
        connection.query(queryString, [{ devoured: true}, { id: newID }], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;




