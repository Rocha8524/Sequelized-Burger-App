// Create variables for dependencies
var express = require("express");
var router = express.Router();
var database = require("../models")

// Create all our routes and set up logic within those routes where required.
router.get("/", function (request, response) {
    database.burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/", function (request, response) {
    burger.create([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function () {
        // Send back the ID of the new quote
        response.redirect("/");
    });
});

router.put("/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: request.body.devoured
    }, condition, function () {
        response.redirect("/");
    });
});

router.delete("/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.redirect("/");
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
