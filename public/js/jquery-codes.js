$(document).ready(function () {
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

const contact = document.querySelector('.contact');
const menu = document.querySelector('#menu_hidden');

contact.addEventListener('mouseenter', () => {
    menu.classList.remove('d-none');
});

contact.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!menu.matches(':hover')) {
            menu.classList.add('d-none');
        }
    }, 200);
});

menu.addEventListener('mouseleave', () => {
    menu.classList.add('d-none');
});


gsap.registerPlugin(ScrollToPlugin)
document.getElementById('portfolio').addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: '#my-skill' }
    })
})

document.getElementById('aboutMe').addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: '#about_me_section' }
    })
})