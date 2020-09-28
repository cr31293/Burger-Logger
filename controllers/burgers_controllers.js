var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
    console.log(hbsObject);
    res.render("index", hbsObject);
    })
});

router.post("/api/burger", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
        console.log(req.body.burger_name);
    });
    
});

router.put("/api/burger/:id", function(req, res) {
    burger.update(req.params.id, function() {
        res.json("Success");
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    })
})
// export routes for server.js
module.exports = router;
