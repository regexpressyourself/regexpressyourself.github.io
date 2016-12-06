// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


// slide down on mail click
$(function() {
    $('a.scroll-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 750, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready( function () {
    $(".code-link-button").on("mouseover", function () {
        $('.code-link-button').text("Code");
        $('.code-link-button').css("font-size", "2em");
    });
    $(".live-link-button").on("mouseover", function () {
        $('.live-link-button').text("Live");
        $('.live-link-button').css("font-size", "2em");
    });
    $(".code-link-button").on("mouseout", function () {
        $('.code-link-button').html("<i class='fa fa-github project-button-icon'></i>");
        $('.code-link-button').css("font-size", "5em");
    });
    $(".live-link-button").on("mouseout", function () {
        $('.live-link-button').html("<i class='fa fa-external-link-square ' aria-hidden='true'></i>");
        $('.live-link-button').css("font-size", "5em");
    });
});
