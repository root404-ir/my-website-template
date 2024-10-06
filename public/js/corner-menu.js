//corner menu
const doc = document
const toggle_btn = doc.querySelector('#toggle-btn')
const corner_menu = doc.querySelectorAll('.corner-menu a')
const blurx = doc.querySelector('.blur')
const click_sound = doc.querySelectorAll('#click-sound')[0]
const hover_sound = doc.querySelectorAll('#hover-sound')[0]
const close_sound = doc.querySelectorAll('#close-sound')[0]
let isMenuActive = false

toggle_btn.addEventListener('click', () => {
    if (!isMenuActive) {
        toggle_btn.classList.add('active')
        blurx.style.filter = "blur(100px)"
        corner_menu[0].style.transform = "translate(10px,94px)"
        corner_menu[1].style.transform = "translate(82px,49px)"
        corner_menu[2].style.transform = "translate(10px,-94px)"
        corner_menu[3].style.transform = "translate(82px,-36px)"
        corner_menu.forEach(items => items.addEventListener('mouseenter', () => {
            hover_sound.currentTime = 0
            hover_sound.play()
        }))
        click_sound.currentTime = 0
        click_sound.play()
        isMenuActive = true
    } else {
        toggle_btn.classList.remove('active')
        blurx.style.filter = "blur(0)"
        corner_menu.forEach(items => items.style.transform = "translate(0,0)")
        close_sound.currentTime = 0
        close_sound.play()
        isMenuActive = false
    }
})

