// script.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

const autoSlideInterval = 3000;
setInterval(nextSlide, autoSlideInterval);

function validateForm(){
    const nama = document.forms["contact-form"]["nama"].value;
    const email = document.forms["contact-form"]["email"].value;
    const pesan = document.forms["contact-form"]["pesan"].value;

    if (nama == "" || email == "" || pesan == ""){
        alert("Tidak Boleh Ada Yang Kosong")
        return false;
    }
}