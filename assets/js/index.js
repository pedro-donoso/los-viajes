$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();

        var mia = this.hash;

        $("html").animate(
            {
                scrollTop: $(mia).offset().top - 20,
            },
            800
        );
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});