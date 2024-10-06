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