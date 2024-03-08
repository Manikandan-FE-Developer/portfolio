function downloadPDF() {
    const pdfLink = 'https://drive.google.com/file/d/1J0ivtGXScKaIWIlCJshS48uE91w3E6Cd/export?format=pdf';

    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = 'Manikandan_CV.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('response').style.display = 'block';
    document.querySelector('form').reset();

    setTimeout(function() {
        document.getElementById('response').style.display = 'none';
    }, 5000);
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
