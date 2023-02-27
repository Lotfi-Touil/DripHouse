$(document).ready(function () {
    var menuButton = $('.burger-menu-button');
    var menuClose = $('.burger-menu-close');
    var menu = $('.burger-menu');

    menu.removeClass('d-none');

    menuButton.click(function () {
        menu.addClass('open');
    });

    menuClose.click(function () {
        menu.removeClass('open');
    });
});
