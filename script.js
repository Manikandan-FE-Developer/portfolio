document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1ADutcr7UwsSQLbg59uCV7BTT4DNGGB5q';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Manikandan_CV.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        document.getElementById('response').style.display = 'block';
        document.querySelector('form').reset();

        setTimeout(function() {
            document.getElementById('response').style.display = 'none';
        }, 5000);
    });
});
