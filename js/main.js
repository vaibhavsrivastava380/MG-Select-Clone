

// for hero mute unmute button
let video = document.querySelector('.hero__video');
let unmuteBtn = document.querySelector('.hero__volume--unmute');
let muteBtn = document.querySelector('.hero__volume--mute');

unmuteBtn.addEventListener('click', () => {
    video.muted = false;
    unmuteBtn.style.display = 'none';
    muteBtn.style.display = 'block';
})

muteBtn.addEventListener('click', () => {
    video.muted = true;
    unmuteBtn.style.display = 'block';
    muteBtn.style.display = 'none';
})









// hamburger modal
const tabs = document.querySelectorAll('.tab');
const carItems = document.querySelectorAll('.car-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

carItems.forEach(item => {
    item.addEventListener('click', () => {
        carItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const carName = item.querySelector('h3').innerText;
        const carTitle = document.querySelector('.car-title');
        carTitle.innerText = carName;
        const carImage = document.querySelector('.car-image img');
        if (carName === 'CYBERSTER') {
            carImage.src = './assets/images/cybie-header.webp';
        } else {
            carImage.src = './assets/images/m9-burger-menu.webp';
        }
    });
});







// Side Navibar there 
const sideNavItems = document.querySelectorAll('.side-nav__item');
const wrapper = document.querySelector('.body_wrapper');

sideNavItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-section');
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const position = section.getBoundingClientRect();

        if (position.top >= -50 && position.top <= 50) {
            sideNavItems.forEach(item => item.classList.remove('active'));
            const activeDot = document.querySelector(`.side-nav__item[data-section="${section.id}"]`);
            activeDot.classList.add('active');
        }
    });
}

wrapper.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);





// About Section car moving
const aboutSection = document.getElementById('about');
const carNameEl = document.getElementById('about-car-name');
const carTaglineEl = document.getElementById('about-car-tagline');
const cybersterImg = document.querySelector('.about__image[data-car="cyberster"]');
const m9Img = document.querySelector('.about__image[data-car="m9"]');
const progCyberster = document.getElementById('prog-cyberster');
const progM9 = document.getElementById('prog-m9');
const nextBtn = document.getElementById('about-next');
let shownCar = 'cyberster';

nextBtn.addEventListener('click', function () {
    if (shownCar === 'cyberster') {
        cybersterImg.classList.remove('active', 'slide-right');
        cybersterImg.classList.add('slide-left');
        
        m9Img.classList.add('no-transition');
        m9Img.classList.remove('active', 'slide-left');
        m9Img.classList.add('slide-right');
        m9Img.offsetHeight;
        m9Img.classList.remove('no-transition', 'slide-right');
        m9Img.classList.add('active');
        
        carNameEl.innerText = 'MG M9';
        carTaglineEl.innerText = 'Luxury, Sculpted.';
        shownCar = 'm9';
        progCyberster.classList.remove('active');
        progM9.classList.add('active');
    } else {
        m9Img.classList.remove('active', 'slide-right');
        m9Img.classList.add('slide-left');
        
        cybersterImg.classList.add('no-transition');
        cybersterImg.classList.remove('active', 'slide-left');
        cybersterImg.classList.add('slide-right');
        cybersterImg.offsetHeight; 
        cybersterImg.classList.remove('no-transition', 'slide-right');
        cybersterImg.classList.add('active');
        
        carNameEl.innerText = 'MG Cyberster';
        carTaglineEl.innerText = 'Driven by vision, not convention.';
        shownCar = 'cyberster';
        progCyberster.classList.add('active');
        progM9.classList.remove('active');
    }
    
});






const prevBtn = document.getElementById('about-prev');
prevBtn.addEventListener('click', function () {
    if (shownCar === 'cyberster') {
        cybersterImg.classList.remove('active', 'slide-left');
        cybersterImg.classList.add('slide-right');

        m9Img.classList.add('no-transition');
        m9Img.classList.remove('active', 'slide-right');
        m9Img.classList.add('slide-left');
        m9Img.offsetHeight; 
        m9Img.classList.remove('no-transition', 'slide-left');
        m9Img.classList.add('active');

        carNameEl.innerText = 'MG M9';
        carTaglineEl.innerText = 'Luxury, Sculpted.';
        shownCar = 'm9';
        if (progCyberster && progM9) {
            progCyberster.classList.remove('active');
            progM9.classList.add('active');
        }
    } else {
        m9Img.classList.remove('active', 'slide-left');
        m9Img.classList.add('slide-right');

        cybersterImg.classList.add('no-transition');
        cybersterImg.classList.remove('active', 'slide-right');
        cybersterImg.classList.add('slide-left');
        cybersterImg.offsetHeight; 
        cybersterImg.classList.remove('no-transition', 'slide-left');
        cybersterImg.classList.add('active');

        carNameEl.innerText = 'MG Cyberster';
        carTaglineEl.innerText = 'Driven by vision, not convention.';
        shownCar = 'cyberster';
        if (progCyberster && progM9) {
            progCyberster.classList.add('active');
            progM9.classList.remove('active');
        }
    }
});

const sunIcon = document.getElementById('theme-day');
const moonIcon = document.getElementById('theme-night');

sunIcon.addEventListener('click', function () {
    aboutSection.classList.remove('day-mode');
    aboutSection.classList.add('night-mode');
    sunIcon.classList.remove('active');
    moonIcon.classList.add('active');

    let allCarImages = document.querySelectorAll('.car-img');
    allCarImages.forEach(function (img) {
        let nightSrc = img.getAttribute('data-night');
        img.src = nightSrc;
    });

    const mainLogo = document.querySelector('.intro-logo img');
    mainLogo.src = './assets/images/mg-select-final-logo-light.webp';

    const hamburgerLines = document.querySelectorAll('.hamburger .line');
    hamburgerLines.forEach(line => line.style.backgroundColor = 'white');
});

moonIcon.addEventListener('click', function () {
    aboutSection.classList.remove('night-mode');
    aboutSection.classList.add('day-mode');
    moonIcon.classList.remove('active');
    sunIcon.classList.add('active');

    let allCarImages = document.querySelectorAll('.car-img');
    allCarImages.forEach(function (img) {
        let daySrc = img.getAttribute('data-day');
        img.src = daySrc;
    });

    const mainLogo = document.querySelector('.intro-logo img');
    mainLogo.src = './assets/images/mg-select-final-logo-dark.webp';

    const hamburgerLines = document.querySelectorAll('.hamburger .line');
    hamburgerLines.forEach(line => line.style.backgroundColor = 'black');
});








// Centres Section slider
const centerImages = document.querySelectorAll('.center__image');
const centerNextBtn = document.getElementById('center-next');
const centerPrevBtn = document.getElementById('center-prev');
const centerNavItems = document.querySelectorAll('.center__nav-item');

let centerIndex = 0;
function showCenterImage(newIndex, direction) {
    if (newIndex === centerIndex) return;

    const currentImg = centerImages[centerIndex];
    const nextImg = centerImages[newIndex];

    if (!direction) {
        direction = newIndex > centerIndex ? 'next' : 'prev';
    }

    if (direction === 'next') {
        currentImg.classList.remove('active', 'slide-right');
        currentImg.classList.add('slide-left');
        nextImg.classList.add('no-transition');
        nextImg.classList.remove('active', 'slide-left');
        nextImg.classList.add('slide-right');
        nextImg.offsetHeight;
        nextImg.classList.remove('no-transition', 'slide-right');
        nextImg.classList.add('active');
    } else {
        currentImg.classList.remove('active', 'slide-left');
        currentImg.classList.add('slide-right');
        nextImg.classList.add('no-transition');
        nextImg.classList.remove('active', 'slide-right');
        nextImg.classList.add('active', 'slide-left');
        nextImg.offsetHeight;
        nextImg.classList.remove('no-transition', 'slide-left');
        nextImg.classList.add('active');
    }

    centerNavItems.forEach(item => item.classList.remove('active'));
    centerNavItems[newIndex].classList.add('active');
    centerIndex = newIndex;
}


    centerNextBtn.addEventListener('click', () => {
        let newIndex = (centerIndex + 1) % centerImages.length;
        showCenterImage(newIndex, 'next');
    });

    centerPrevBtn.addEventListener('click', () => {
        let newIndex = (centerIndex - 1 + centerImages.length) % centerImages.length;
        showCenterImage(newIndex, 'prev');
    });


// Nav items click
centerNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showCenterImage(index);
    });
});










// History Section Swiper Logic
const historyData = [
    { year: '1924', topLabel: 'A STAR IS BORN', bottomLabel: '' },
    { year: '1930', topLabel: 'THE BIRTH OF MG CAR CLUB', bottomLabel: '' },
    { year: '1933', topLabel: "IT'S A WINNER", bottomLabel: "" },
    { year: '1945', topLabel: 'A BRITISH ICON, AN AMERICAN SENSATION', bottomLabel: '' },
    { year: '1956', topLabel: 'AN ALL-TIME CLASSIC', bottomLabel: '' },
    { year: '1957', topLabel: 'WORLD RECORD CONQUERED', bottomLabel: '' },
    { year: '1959', topLabel: 'THE MGA', bottomLabel: '' },
    { year: '2025', topLabel: 'CYBERSTER', bottomLabel: '' },
    { year: '2025', topLabel: 'MG M9', bottomLabel: '' }
];

document.addEventListener('DOMContentLoaded', () => {
    const swiperSlides = document.querySelectorAll('.history_section__scroll--images .swiper-slide');

    swiperSlides.forEach((slide, index) => {
        const itemData = historyData[index] || { year: '', topLabel: '', bottomLabel: '' };
        const img = slide.querySelector('img');

        const contentDiv = document.createElement('div');
        contentDiv.className = 'history_item';

        const yearSpan = document.createElement('span');
        yearSpan.className = 'year';
        yearSpan.innerText = itemData.year;

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image_wrapper';

        const topOverlay = document.createElement('span');
        topOverlay.className = 'label_overlay';
        topOverlay.innerText = '+ ' + itemData.topLabel;

        const bottomLabel = document.createElement('span');
        bottomLabel.className = 'bottom_label';
        bottomLabel.innerText = itemData.bottomLabel;

        contentDiv.appendChild(yearSpan);
        contentDiv.appendChild(imageWrapper);
        imageWrapper.appendChild(topOverlay);
        imageWrapper.appendChild(bottomLabel);
        if (img) imageWrapper.appendChild(img);

        slide.appendChild(contentDiv);
    });

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        initialSlide: 2,
        on: {
            slideChange: function () {
                const slides = document.querySelectorAll('.history_item');
                slides.forEach(s => s.classList.remove('active'));

                const activeSlide = this.slides[this.activeIndex].querySelector('.history_item');
                if (activeSlide) activeSlide.classList.add('active');
            }
        }
    });

    setTimeout(() => {
        const firstActive = document.querySelectorAll('.history_item')[swiper.activeIndex];
        if (firstActive) firstActive.classList.add('active');
    }, 100);
});

// Intro Logo Animation
window.addEventListener('load', () => {
    const overlay = document.querySelector('.intro-overlay');
    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('animate');
        }, 1000);
    }
});

const navScrollLogic = () => {
    const logo = document.querySelector('.intro-logo');
    const logoImg = document.querySelector('.intro-logo img');
    const hamburger = document.querySelector('.hamburger');
    const hamburgerLines = document.querySelectorAll('.hamburger .line');

    const about = document.getElementById('about');
    const newEra = document.getElementById('newera');
    const centres = document.getElementById('centres');
    const history = document.getElementById('history');
    const footer = document.getElementById('footer');

    if (!logo || !hamburger) return;

    let isHidden = false;
    let isDarkTheme = false;

    const newEraTop = newEra ? newEra.getBoundingClientRect().top : 10000;
    const centresTop = centres ? centres.getBoundingClientRect().top : 10000;
    const historyTop = history ? history.getBoundingClientRect().top : 10000;
    const footerTop = footer ? footer.getBoundingClientRect().top : 10000;
    const aboutTop = about ? about.getBoundingClientRect().top : 10000;

    if (footerTop < window.innerHeight) {
        isHidden = true;
    }
    else if (historyTop < window.innerHeight) {
        isHidden = false;
        isDarkTheme = true; 
    }
    else if (centresTop < window.innerHeight) {
        isHidden = false;
        isDarkTheme = true;
    }
    else if (newEraTop < window.innerHeight) {
        isHidden = true;
    }
    else if (aboutTop < window.innerHeight) {
        isHidden = false;
        if (about.classList.contains('day-mode')) {
            isDarkTheme = true;
        } else {
            isDarkTheme = false;
        }
    }
    else {
        isHidden = false;
        isDarkTheme = false;
    }

    if (isHidden) {
        logo.style.opacity = '0';
        hamburger.style.opacity = '0';
        logo.style.pointerEvents = 'none';
        hamburger.style.pointerEvents = 'none';
    } else {
        logo.style.opacity = '1';
        hamburger.style.opacity = '1';
        logo.style.pointerEvents = 'auto';
        hamburger.style.pointerEvents = 'auto';
        logo.style.transform = 'translate(-50%, 0)';
    }
    if (!isHidden) {
        if (isDarkTheme) {
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-dark.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#000');
        } else {
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-light.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#fff');
        }
    }
}

const newEraScrollLogic = () => {
    const newEraSection = document.getElementById('newera');
    if (!newEraSection) return;

    const step1 = document.querySelector('.newera__step.step-1');
    const step2 = document.querySelector('.newera__step.step-2');

    const rect = newEraSection.getBoundingClientRect();

    const switchPoint = -window.innerHeight / 2;

    if (rect.top < switchPoint) {
        if (step1) step1.classList.remove('active');
        if (step2) step2.classList.add('active');
    } else {
        if (step1) step1.classList.add('active');
        if (step2) step2.classList.remove('active');
    }
}


const scrollArea = document.querySelector('.body_wrapper');
if (scrollArea) {
    scrollArea.addEventListener('scroll', () => {
        navScrollLogic();
        newEraScrollLogic();
    });
    navScrollLogic();
    newEraScrollLogic();
}


const closeButtons = document.querySelectorAll('.floating-btn .close-btn');

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentBtn = btn.closest('.floating-btn');
        if (parentBtn) {
            parentBtn.style.opacity = '0';
            parentBtn.style.pointerEvents = 'none';
            setTimeout(() => {
                parentBtn.style.visibility = 'hidden';
            }, 300);
        }
    });
});

// Privacy Cookie Modal Logic
const privacyModal = document.getElementById('privacy-cookie-modal');
if (privacyModal) {
    const closeBtn = privacyModal.querySelector('.close-btn');
    const acceptBtn = privacyModal.querySelector('.accept-btn');
    const rejectBtn = privacyModal.querySelector('.reject-btn');

    const closeModal = () => {
        privacyModal.style.opacity = '0';
        privacyModal.style.pointerEvents = 'none';
        setTimeout(() => {
            privacyModal.style.visibility = 'hidden';
        }, 300);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (acceptBtn) acceptBtn.addEventListener('click', closeModal);
    if (rejectBtn) rejectBtn.addEventListener('click', closeModal);
}
