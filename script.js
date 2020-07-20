$(document).ready(function(){
    $("header").hover(function(){
        $(this).css("background-color", "blue").css("color", "white");
    }, function(){
        $(this).css("background-color", "gold").css("color", "black");
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.").css("font-size", "25px").css("color", "darkgreen");
    });
});

$(document).ready(function(){
    $("li").dblclick(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("input").keydown(function(){
        $(this).toggleClass("input");
    });
});

function clicked(){
    alert("Yay, you submitted your information successfully!")
}