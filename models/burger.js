// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.create(name, function(res) {
            cb(res);
        }); 
    },
    update: function(newID, cb) {
        orm.update(newID, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;