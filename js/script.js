// Toggle Menu
const toggleButton = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

// إضافة الحدث عند النقر على زر التبديل (الهامبرغر)
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // التبديل بين إظهار واخفاء القائمة
});

// إضافة حدث عند النقر على أي رابط داخل القائمة لإغلاق القائمة
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // إغلاق القائمة بعد النقر على الرابط
    });
});


/*for Tabs  */
// دالة لإخفاء كل المحتويات
function hideAllContents() {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
}

// دالة لإظهار المحتوى المحدد
function showSelectedContent(contentId) {
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');
}

// دالة لتغيير المحتوى عند النقر
function showContent(contentId) {
    hideAllContents();
    showSelectedContent(contentId);
}

// تعيين قيمة افتراضية تظهر عند تحميل الصفحة بدون أي ضغط من المستخدم
document.addEventListener('DOMContentLoaded', () => {
    // تعيين المحتوى الافتراضي ليظهر عند تحميل الصفحة
    showContent('about-Us'); // استبدل 'default-content-id' بالمعرف الذي تريد أن يظهر بشكل افتراضي
});
