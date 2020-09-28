$( document ).ready(function() {


    $("#burger-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };

        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $("#devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured 
        };
        console.log(newDevouredState);

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $(".delete").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        )
    })

});