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

});