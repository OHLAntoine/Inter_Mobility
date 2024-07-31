// Menu disabled after link clicked
const menu = document.querySelector('.offcanvas_menu');
const links = document.querySelectorAll('.sections_links');
const closeMenu = document.querySelector('.btn-close')

links.forEach(link => {
    link.addEventListener('click', (event) => {
        if (menu.classList.contains('show')) {
                event.preventDefault();
                closeMenu.click();
                if (link.getAttribute('href') === '#actions') {
                    window.scrollTo(0, 4200);
                } else {
                    window.scrollTo(0, 8000);
                }
        }
    })
});

// Backgroundcolor dropdowns
const dropdownsToggle = document.querySelectorAll('.dropdown-toggle');
const dropdownsMenu = document.querySelectorAll('.dropdown-menu');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', (event)=> {
    dropdownsToggle.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (event)=> {
            dropdownsMenu.forEach(dropdownMenu => {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.style.backgroundColor = 'var(--ecru-)';
                }
            });
        })
    })
})

if (window.location.pathname == '/articles/GenderEquality.html' || window.location.pathname == '/articles/CitiesFirst.html' || window.location.pathname == '/articles/MobilityHUB.html' || window.location.pathname == '/articles/USPNetwork.html' || window.location.pathname == '/articles/YouthDecarbonizationTech.html') {
    dropdownsToggle.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (event)=> {
            dropdownsMenu.forEach(dropdownMenu => {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.style.backgroundColor = 'var(--ecru-)';
                }
            });
        })
    })
} else if (window.location.pathname == '/FoundingTeam.html') {
    dropdownsToggle.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (event)=> {
            dropdownsMenu.forEach(dropdownMenu => {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.style.backgroundColor = 'var(--dark_blue-)';
                }
            });
        })
    })
}


// Show content on scroll
const wordsResume = document.querySelector('.words_resume');

window.addEventListener("load", (event) => {
    wordsResume.classList.add('loaded');
})

const resume = document.querySelector('.resume_content');
const actions = document.querySelector('.actions_content');
const experts = document.querySelector('.experts_content');
const support = document.querySelector('.support_content');
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
            support.classList.add('loaded');
        }
        if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
            experts.classList.add('loaded');
        }
        if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
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
            support.classList.add('loaded');
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            experts.classList.add('loaded');
        }
        if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
            partners.classList.add('loaded');
        }
    }
}
