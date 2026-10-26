
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// منوی موبایل
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.setAttribute("aria-label", "بستن منو");
        menuBtn.textContent = "✕";
    } else {
        menuBtn.setAttribute("aria-label", "باز کردن منو");
        menuBtn.textContent = "☰";
    }
});

// بستن منو بعد از انتخاب یک بخش
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "باز کردن منو");
    });
});

// سال جاری
document.getElementById("year").textContent = new Date().getFullYear();

// اطلاعات تماس خودت را اینجا وارد کن
const myEmail = "YOUR_EMAIL@example.com";
const myPhone = "09XXXXXXXXX";

const emailLink = document.getElementById("emailLink");
const phoneLink = document.getElementById("phoneLink");
const contactMessage = document.getElementById("contactMessage");

// ایمیل
emailLink.addEventListener("click", function (event) {
    if (myEmail === "mhab27000@gmail.com") {
        event.preventDefault();
        contactMessage.textContent =
            "ایمیل خودت را در فایل script.js وارد کن.";
        return;
    }

    emailLink.href = "mailto:" + myEmail;
});

// تماس تلفنی
phoneLink.addEventListener("click", function (event) {
    if (myPhone === "09352402192") {
        event.preventDefault();
        contactMessage.textContent =
            "شماره تلفن خودت را در فایل script.js وارد کن.";
        return;
    }

    phoneLink.href = "tel:" + myPhone;
});
