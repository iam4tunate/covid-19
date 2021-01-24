var sideNav, btnHamburger;
sideNav = document.getElementById('sideNav');
btnHamburger = document.getElementById('btnHamburger');
span = document.querySelectorAll('.span');
document.getElementById('btnHamburger').addEventListener('click', function () {
    btnHamburger.classList.toggle('open');
    if (btnHamburger.classList.contains('open')) {
        sideNav.style.right = '0';
        btnHamburger.style.backgroundColor = "transparent";
        span[0].style.backgroundColor = "#BA3147";
        span[2].style.backgroundColor = "#BA3147";
        span[0].style.width = "2.2rem";
        span[2].style.width = "2.2rem";
    } else {
        sideNav.style.right = '-30rem';
        btnHamburger.style.backgroundColor = "#BA3147";
        span[0].style.backgroundColor = "#fff";
        span[2].style.backgroundColor = "#fff";
        span[0].style.width = "2.8rem";
        span[2].style.width = "2.8rem";
    }
})


const faqItemHeaders = document.querySelectorAll(".faq-item-header");

faqItemHeaders.forEach(faqItemHeader => {
    faqItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
        const currentlyActivefaqItemHeader = document.querySelector(".faq-item-header.active");
        if (currentlyActivefaqItemHeader && currentlyActivefaqItemHeader !== faqItemHeader) {
            currentlyActivefaqItemHeader.classList.toggle("active");
            currentlyActivefaqItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        faqItemHeader.classList.toggle("active");
        const faqItemBody = faqItemHeader.nextElementSibling;
        if (faqItemHeader.classList.contains("active")) {
            faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
            document.querySelectorAll('.faq-icon')[0].style.display = "none";
            document.querySelectorAll('.faq-icon')[1].style.display = "block";
        } else {
            document.querySelectorAll('.faq-icon')[0].style.display = "block";
            document.querySelectorAll('.faq-icon')[1].style.display = "none";
            faqItemBody.style.maxHeight = 0;
        }

    });
});