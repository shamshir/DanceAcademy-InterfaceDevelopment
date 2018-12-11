$(document).ready(function () {

    /* Scroll Button Management */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#scrollButton").show();
        } else {
            $("#scrollButton").hide();
        }
    });
    $("#scrollButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    /* Image Gallery Management */
    $(document).on("click", ".containedImage", function (event) {
        var sourceImg = $(event.target).attr("src");
        swal({
            background: "black",
            width: "750px",
            imageUrl: sourceImg,
            imageWidth: 1000,
            confirmButtonText: "Cerrar",
            confirmButtonColor: "grey",
        });
    });

});