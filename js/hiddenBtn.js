$.fn.scrollStopped = function (callback) {
    var that = this, $this = $(that);
    $this.scroll(function (ev) {

        $('.fixed-btn-mob button').animate({
            bottom: "-55px"
        }, 1)
        if ($(this).scrollTop() > $('.form')[0].offsetTop
            && $(this).scrollTop() < $('.form')[0].offsetTop + $('.form')[0].offsetHeight - 300
        ) {
            $('.fixed-btn-mob button').animate({
                bottom: "-55px"
            }, 1)
        }

        else {
            clearTimeout($this.data('scrollTimeout'));
            $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
        }
    });
};

$(window).scrollStopped(function () {
    // console.log(Math.round($(this).scrollTop()), $('#point')[0].offsetTop)
    if (Math.round($(this).scrollTop()) == $('#point')[0].offsetTop
        || Math.round($(this).scrollTop()) + 1 == $('#point')[0].offsetTop) {
        $('.fixed-btn-mob button').animate({
            bottom: "-55px"
        }, 1)
    }
    else {
        $('.fixed-btn-mob button').animate({
            bottom: "0px"
        })
    }
});
