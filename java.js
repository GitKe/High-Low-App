$(document).ready(function() {

    $("#button").click(function() {
        var name1 = $("#input").val()
        var name2 = parseInt(name1)
        $("p").html(name2);
        
        var num = Math.floor((Math.random() * 10));
        if (num>name1) {
            $("p").html("The number is too low!");
        }
        else if (num == name1) {
            $("p").html("The guess is correct!");
        }
        else if (num =! name1) {
            $("p").html("This is not a number!");
        }
        else {
            $("p").html("The number is too high!");
        }
    
        })
        
        
});