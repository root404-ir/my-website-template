$(document).ready(function () {
    $('#image-carousel').owlCarousel({
        item: 4,
        loop: true,
        autoplay: true,
        autoWidth: true,
        autoplayTimeout: 1500,
        smartSpeed: 700,
    }),
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
    let checked_clipboard = $('.check_clipboard')
    let copy_phone_number = $('.copy_phone_number').click(() => {
        navigator.clipboard.writeText('09306136838')
        copy_phone_number.fadeToggle()
        checked_clipboard.fadeToggle()
        setTimeout(replace_clipboard_icon, 3000)
    })
    let replace_clipboard_icon = () => {
        copy_phone_number.fadeIn()
        checked_clipboard.fadeOut()
    }
    $('#change').click(function () {
        window.location.href = './index.html'
    })
    $('#change_purple').click(function () {
        window.location.href = './purple_theme.html'
    })
    $('.telegram_purple').click(() => {
        window.open('https://t.me/root404', '_blank')
    })

    // بررسی وضعیت دارک مود و آیکون‌ها هنگام بارگذاری صفحه
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
        $('html').addClass('dark');
        $('#light-mode-icon').addClass('d-none');
        $('#dark-mode-icon').removeClass('d-none');
    } else {
        $('#light-mode-icon').removeClass('d-none');
        $('#dark-mode-icon').addClass('d-none');
    }
    // تغییر وضعیت دارک مود و آیکون‌ها با کلیک بر روی دکمه
    $('.dark-light-mode').click(() => {
        $('#light-mode-icon').slideToggle().toggleClass('d-none');
        $('html').toggleClass('dark');
        $('#dark-mode-icon').slideToggle().toggleClass('d-none');

        // ذخیره وضعیت دارک مود و آیکون‌ها در localStorage
        darkMode = $('html').hasClass('dark') ? "enabled" : "disabled";
        localStorage.setItem("dark-mode", darkMode);
    });
    $('#open-call-box').click(() => {
        welcome__box.toggleClass('d-none')
    })
    let welcome__box = $('#welcome_box').mouseout(() => {
        welcome__box.toggleClass('d-none')
    })
});
$(function () {
    $('.skill_progress_bar').waypoint(
        function () {
            $('.progress_bar').each(function () {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                }, 800)
            })
            this.destroy()
        },
    )
    {
        offset: "bottom-in-view"
    }

})
let welcome_box = document.getElementById('welcome_box')
let welcome_alert_sound = document.getElementById('welcome_alert_sound')
let typeSound = document.getElementById('typingSound')
window.addEventListener('load', () => {

    $('#preloader').fadeOut()
    typingHeader()
    typeSoundPlay()
})
let i = 0
let txt_header = "من محمد تفقدی صفرپور هستم برنامه نویس و توسعه دهنده فرانت اند متولد 1382/02/19 در تهران این یک صفحه کوچک و ساده جهت معرفی خودم است. "
function typingHeader() {
    if (i < txt_header.length) {
        document.getElementById("typing_text_header").innerHTML += txt_header.charAt(i)
        i++
        setTimeout(typingHeader, 70)
    }
}
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
setInterval(() => {
    Time()
}, 1000)

let reload_page = document.getElementById('reload_page')
reload_page.addEventListener('click', () => {
    location.reload()
})

let docTitle = document.title
window.addEventListener('blur', () => {
    document.title = "برگرد لطفا🥲"
})
window.addEventListener('focus', () => {
    document.title = docTitle
})
const windowOpenFeatures = 'left=100,height=100,width=1100px,height=600px'
const blogBtn = document.getElementById('blog_open')
blogBtn.addEventListener('click', () => {
    window.open('https://front-code.ir', '_blank', windowOpenFeatures)
})