$(document).ready(() => {
    $('.fixed-btn-mob').click(() => {
        $('html, body').animate({
            scrollTop: $('#point').offset().top
        }, 400);
    })

})

