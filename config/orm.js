// import connection
var connection = require("./connection.js");


var orm = {
    // * `selectAll()`
    all: function(cb) {
        var queryString = "SELECT * FROM burger;";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // * `insertOne()`
    create: function(name, cb) {
        var queryString = "INSERT INTO burger SET ?";

        connection.query(queryString, { burger_name: name, devoured: false }, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    // * `updateOne()`
    update: function(ID, cb) {
        var queryString = "UPDATE burger SET ? WHERE ?";
        console.log(ID);
        connection.query(queryString, [{ devoured: true}, { id: ID }], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;




