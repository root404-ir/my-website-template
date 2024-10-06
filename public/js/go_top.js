$(function () {
    $('a.smooth-scroll,#goTo-top a').click(function (e) {
        e.preventDefault()
        let sectionId = $(this).attr('href')
        $('html,body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1250)
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#goTo-top').removeClass('d-none')
        }
        else {
            $('#goTo-top').addClass('d-none')
        }
    })
})