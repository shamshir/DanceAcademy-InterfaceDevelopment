$(document).ready(function () {

    /* Scroll Button management */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("#scrollButton").show();
        } else {
            $("#scrollButton").hide();
        }
    });
    $("#scrollButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});