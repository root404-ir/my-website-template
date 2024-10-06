$(document).ready(function () {
    $('.contact').click(() => {
        $('#menu_hidden').fadeToggle()
        $('#left_svg').toggleClass()
        $('#bottom_svg').toggleClass('d-none')
    })

    $('#menu_hidden').mouseleave(() => {
        $('#menu_hidden').hide(500)
        $('#left_svg').toggleClass('d-none')
        $('#bottom_svg').removeClass('d-none')
    })
    $('#icon_off').click(function () {
        $('#icon_on').fadeToggle()
        $(this).hide()
        $('#menu_toggle_responsive').removeClass('d-none')
        $('.main_header').css('margin-top', '200px')
        $('.welcome_alert').hide()
        $('.welcome_alert_purple').hide()
    })
    $('#icon_on').click(function () {
        $('#icon_off').fadeToggle()
        $(this).hide()
        $('#menu_toggle_responsive').addClass('d-none')
        $('.main_header').css('margin-top', '64px')
        $('.welcome_alert').show()
        $('.welcome_alert_purple').show()
    })
    let hoverSound = $('#hoverSound')[0]
    let myResume = $('#my_resume').hover(() => {
        hoverSound.currentTime = 0
        hoverSound.play()
    })
    myResume.mouseleave(() => {
        hoverSound.currentTime = 1
    })
    let myGitHub = $('#myGitHub').hover(() => {
        hoverSound.currentTime = 0
        hoverSound.play()
    })
    myGitHub.mouseleave(() => {
        hoverSound.currentTime = 1
    })
});