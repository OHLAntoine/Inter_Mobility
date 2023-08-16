const wordsResume = document.querySelector('.words_resume');

window.addEventListener("load", (event) => {
    wordsResume.classList.add('loaded');
})

const resume = document.querySelector('.test');

window.onscroll = function() {scrolling()};

function scrolling() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        resume.classList.add('loaded');
    }
}