const downloadBtn = document.getElementById('my_resume');
downloadBtn.addEventListener('click', function () {
    // آدرس فایل PDF که می‌خواهید دانلود کنید
    const pdfUrl = 'https://mohammad.fun/resume/MyResume.pdf';

    // ساخت عنصر لینک
    const link = document.createElement('a');
    link.href = pdfUrl;

    // نام فایل دانلود
    link.download = 'Resume.pdf';

    // اضافه کردن لینک به سند و کلیک کردن روی آن
    document.body.appendChild(link);
    link.click();

    // حذف لینک بعد از کلیک
    document.body.removeChild(link);
});