window.addEventListener('load', () => {
    $('#preloader').fadeOut()
    typingHeader()
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