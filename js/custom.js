$(function () {
    $('.to_top').on('click', function () {
        $('html,body'), animate({ scrolltop: 0 }, 1000)
    })
})


$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        // dots: true,
        autoplay: true,
        pauseOnHover: false,
        //useTransform: false
    })
})