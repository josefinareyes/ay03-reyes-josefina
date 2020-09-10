$(document).ready(function () {
    var shadowbox = $(".shadowbox");
    var button1 = $("#button1");
    var button2 = $("#button2");

    shadowbox.mouseenter(function () {
        var idChange = $(this).attr("id");
        $(this).css('background-color', 'pink');
    });

    shadowbox.mouseleave(function () {
        var idChange = $(this).attr("id");
        $(this).css('background-color', 'white');
    });

    button1.click(function () {
        var idbut1 = $(this).attr("id");
        $("#header").toggle()
    });

    button2.click(function () {
        $(this).toggleClass("active");

        if ($("#title").text() == "Q U O K K A S")
            $("#title").text("Recuerda tomar agua :D")
        else
            $("#title").text("Q U O K K A S");

    })

});