$(document).ready(function() {
    var num = Math.floor(Math.random() * 100);
    $("#button").click(function() {
        var name1 = $("#input").val()
        var name2 = parseInt(name1)
      
        if (num>name2) {
            $("p").html("The number is too low!");
        }
        else if (num === name2) {
            $("p").html("The guess is correct!");
        }
        else if (num ==! name2) {
            $("p").html("This is not a number!");
        }
        else {
            $("p").html("The number is too high!");
        }
    
        })
    
        
});