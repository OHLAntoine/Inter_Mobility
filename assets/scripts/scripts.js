// Apparition des textes
const wordsResume = document.querySelector('.words_resume');

window.addEventListener("load", (event) => {
    wordsResume.classList.add('loaded');
})

const resume = document.querySelector('.resume_content');
const actions = document.querySelector('.actions_content');
const experts = document.querySelector('.experts_content');
const partners = document.querySelector('.partners_content');

window.onscroll = function() {scrolling()};

function scrolling() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            resume.classList.add('loaded');
        }
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            actions.classList.add('loaded');
        }
        if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            experts.classList.add('loaded');
        }
        if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
            partners.classList.add('loaded');
        }
    } else {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            resume.classList.add('loaded');
        }
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            actions.classList.add('loaded');
        }
        if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
            experts.classList.add('loaded');
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            partners.classList.add('loaded');
        }
    }
}

// Multi level dropdown
let doubleDropdown = document.querySelector('.dropdown_double');
let teamDropdown = document.querySelector('.team_dropdown');
let expertsDropdown = document.querySelector('.experts_dropdown');
let submenus = [teamDropdown, expertsDropdown];

submenus.forEach(element => {
    element.addEventListener('click', function(e) {
        doubleDropdown.style.display = doubleDropdown.style.display==='block'?'':'block'
    })
});