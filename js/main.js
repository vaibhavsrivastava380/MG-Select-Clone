

console.log("MG Select JS Loaded");
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
        if (carTitle) {
            carTitle.innerText = carName;
        }

        const carImage = document.querySelector('.car-image img');
        if (carImage) {
            if (carName === 'CYBERSTER') {
                carImage.src = './assets/images/cybie-header.webp';
            } else {
                carImage.src = './assets/images/m9-burger-menu.webp';
            }
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
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const position = section.getBoundingClientRect();

        if (position.top >= -50 && position.top <= 50) {
            sideNavItems.forEach(item => item.classList.remove('active'));
            const activeDot = document.querySelector(`.side-nav__item[data-section="${section.id}"]`);
            if (activeDot) activeDot.classList.add('active');
        }
    });
}

wrapper.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);


// About Section car moving
const aboutSection = document.getElementById('about');
const carNameEl = document.getElementById('about-car-name');
const carTaglineEl = document.getElementById('about-car-tagline');

// Select images directly
const cybersterImg = document.querySelector('.about__image[data-car="cyberster"]');
const m9Img = document.querySelector('.about__image[data-car="m9"]');

// Progress Lines
const progCyberster = document.getElementById('prog-cyberster');
const progM9 = document.getElementById('prog-m9');

// Buttons
const nextBtn = document.getElementById('about-next');
const prevBtn = document.getElementById('about-prev');

let shownCar = 'cyberster'; // keep track of which car is on screen

// When clicking NEXT button
nextBtn.addEventListener('click', function () {
    if (shownCar === 'cyberster') {
        // Move Cyberster out (to left)
        cybersterImg.classList.remove('active', 'slide-right'); // clear right
        cybersterImg.classList.add('slide-left');

        // Move M9 in (from right)
        m9Img.classList.add('no-transition');
        m9Img.classList.remove('active', 'slide-left'); // clear left
        m9Img.classList.add('slide-right');
        m9Img.offsetHeight; // refresh
        m9Img.classList.remove('no-transition', 'slide-right');
        m9Img.classList.add('active');

        // Change text
        carNameEl.innerText = 'MG M9';
        carTaglineEl.innerText = 'Luxury, Sculpted.';
        shownCar = 'm9';
        if (progCyberster && progM9) {
            progCyberster.classList.remove('active');
            progM9.classList.add('active');
        }
    } else {
        // Move M9 out (to left)
        m9Img.classList.remove('active', 'slide-right');
        m9Img.classList.add('slide-left');

        // Move Cyberster in (from right)
        cybersterImg.classList.add('no-transition');
        cybersterImg.classList.remove('active', 'slide-left');
        cybersterImg.classList.add('slide-right');
        cybersterImg.offsetHeight; // refresh
        cybersterImg.classList.remove('no-transition', 'slide-right');
        cybersterImg.classList.add('active');

        // Change text
        carNameEl.innerText = 'MG Cyberster';
        carTaglineEl.innerText = 'Driven by vision, not convention.';
        shownCar = 'cyberster';
        if (progCyberster && progM9) {
            progCyberster.classList.add('active');
            progM9.classList.remove('active');
        }
    }
});

// When clicking PREV button
prevBtn.addEventListener('click', function () {
    if (shownCar === 'cyberster') {
        // Move Cyberster out (to right)
        cybersterImg.classList.remove('active', 'slide-left'); // clear left
        cybersterImg.classList.add('slide-right');

        // Move M9 in (from left)
        m9Img.classList.add('no-transition');
        m9Img.classList.remove('active', 'slide-right'); // clear right
        m9Img.classList.add('slide-left');
        m9Img.offsetHeight; // refresh
        m9Img.classList.remove('no-transition', 'slide-left');
        m9Img.classList.add('active');

        // Change text
        carNameEl.innerText = 'MG M9';
        carTaglineEl.innerText = 'Luxury, Sculpted.';
        shownCar = 'm9';
        if (progCyberster && progM9) {
            progCyberster.classList.remove('active');
            progM9.classList.add('active');
        }
    } else {
        // Move M9 out (to right)
        m9Img.classList.remove('active', 'slide-left');
        m9Img.classList.add('slide-right');

        // Move Cyberster in (from left)
        cybersterImg.classList.add('no-transition');
        cybersterImg.classList.remove('active', 'slide-right');
        cybersterImg.classList.add('slide-left');
        cybersterImg.offsetHeight; // refresh
        cybersterImg.classList.remove('no-transition', 'slide-left');
        cybersterImg.classList.add('active');

        // Change text
        carNameEl.innerText = 'MG Cyberster';
        carTaglineEl.innerText = 'Driven by vision, not convention.';
        shownCar = 'cyberster';
        if (progCyberster && progM9) {
            progCyberster.classList.add('active');
            progM9.classList.remove('active');
        }
    }
});

// Day and Night theme code
const sunIcon = document.getElementById('theme-day');
const moonIcon = document.getElementById('theme-night');

// Theme Toggle (Night)
sunIcon.addEventListener('click', function () {
    aboutSection.classList.remove('day-mode');
    aboutSection.classList.add('night-mode');
    sunIcon.classList.remove('active');
    moonIcon.classList.add('active');

    // Change car images to night version
    let allCarImages = document.querySelectorAll('.car-img');
    allCarImages.forEach(function (img) {
        let nightSrc = img.getAttribute('data-night');
        img.src = nightSrc;
    });

    // Change Fixed Logo to Light for Night Theme
    const mainLogo = document.querySelector('.intro-logo img');
    if (mainLogo) {
        mainLogo.src = './assets/images/mg-select-final-logo-light.webp';
    }

    // Change Hamburger to White
    const hamburgerLines = document.querySelectorAll('.hamburger .line');
    hamburgerLines.forEach(line => line.style.backgroundColor = '#fff');
});

// Theme Toggle (Day)
moonIcon.addEventListener('click', function () {
    aboutSection.classList.remove('night-mode');
    aboutSection.classList.add('day-mode');
    moonIcon.classList.remove('active');
    sunIcon.classList.add('active');

    // Change car images back to day version
    let allCarImages = document.querySelectorAll('.car-img');
    allCarImages.forEach(function (img) {
        let daySrc = img.getAttribute('data-day');
        img.src = daySrc;
    });

    // Change Fixed Logo to Dark for Day Theme
    const mainLogo = document.querySelector('.intro-logo img');
    if (mainLogo) {
        mainLogo.src = './assets/images/mg-select-final-logo-dark.webp';
    }

    // Change Hamburger to Black
    const hamburgerLines = document.querySelectorAll('.hamburger .line');
    hamburgerLines.forEach(line => line.style.backgroundColor = '#000');
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

    // Determine direction if not provided (e.g. from nav click)
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

    // Update Nav items
    centerNavItems.forEach(item => item.classList.remove('active'));
    if (centerNavItems[newIndex]) {
        centerNavItems[newIndex].classList.add('active');
    }

    centerIndex = newIndex;
}

if (centerNextBtn && centerPrevBtn) {
    centerNextBtn.addEventListener('click', () => {
        let newIndex = (centerIndex + 1) % centerImages.length;
        showCenterImage(newIndex, 'next');
    });

    centerPrevBtn.addEventListener('click', () => {
        let newIndex = (centerIndex - 1 + centerImages.length) % centerImages.length;
        showCenterImage(newIndex, 'prev');
    });
}

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

        // Construct the rich structure inside swiper slide
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

        // Re-assemble
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
        initialSlide: 2, // Start with 1933
        on: {
            slideChange: function () {
                const slides = document.querySelectorAll('.history_item');
                slides.forEach(s => s.classList.remove('active'));

                const activeSlide = this.slides[this.activeIndex].querySelector('.history_item');
                if (activeSlide) activeSlide.classList.add('active');
            }
        }
    });

    // Manually trigger first active state
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

// Unified Nav Visibility and Theme Logic
const navScrollLogic = () => {
    // 1. Get Elements
    const logo = document.querySelector('.intro-logo');
    const logoImg = document.querySelector('.intro-logo img');
    const hamburger = document.querySelector('.hamburger');
    const hamburgerLines = document.querySelectorAll('.hamburger .line');

    // 2. Get Sections
    const about = document.getElementById('about');
    const newEra = document.getElementById('newera');
    const centres = document.getElementById('centres');
    const history = document.getElementById('history');
    const footer = document.getElementById('footer');

    // Safety Check
    if (!logo || !hamburger) return;

    // 3. Determine Visibility and theme
    // Default: Visible and Light (White)
    let isHidden = false;
    let isDarkTheme = false;

    // Check where we are on the page
    // We check the 'top' position of each section relative to the viewport window
    const newEraTop = newEra ? newEra.getBoundingClientRect().top : 10000;
    const centresTop = centres ? centres.getBoundingClientRect().top : 10000;
    const historyTop = history ? history.getBoundingClientRect().top : 10000;
    const footerTop = footer ? footer.getBoundingClientRect().top : 10000;
    const aboutTop = about ? about.getBoundingClientRect().top : 10000;

    // Logic Flow from Top to Bottom

    // If Footer is appearing (coming up from bottom)
    if (footerTop < window.innerHeight) {
        isHidden = true;
    }
    // If History is appearing
    else if (historyTop < window.innerHeight) {
        isHidden = false;
        isDarkTheme = true; // History = Dark
    }
    // If Centres is appearing
    else if (centresTop < window.innerHeight) {
        isHidden = false;
        isDarkTheme = true; // Centres = Dark
    }
    // If New Era is appearing
    // It should vanish "immediately" as New Era appears
    else if (newEraTop < window.innerHeight) {
        isHidden = true;
    }
    // If About is appearing (or we are in About)
    else if (aboutTop < window.innerHeight) {
        isHidden = false;
        // About Theme depends on Day/Night Toggle
        if (about.classList.contains('day-mode')) {
            isDarkTheme = true;
        } else {
            isDarkTheme = false;
        }
    }
    // Otherwise we are at Hero (Top) -> Light
    else {
        isHidden = false;
        isDarkTheme = false;
    }

    // 4. Apply Changes

    // Visibility
    if (isHidden) {
        logo.style.opacity = '0';
        hamburger.style.opacity = '0';
        logo.style.pointerEvents = 'none'; // Disable clicks when hidden
        hamburger.style.pointerEvents = 'none';
    } else {
        logo.style.opacity = '1';
        hamburger.style.opacity = '1';
        logo.style.pointerEvents = 'auto';
        hamburger.style.pointerEvents = 'auto';
        logo.style.transform = 'translate(-50%, 0)'; // Ensure proper position
    }

    // Theme (Color) - Only if visible
    if (!isHidden) {
        if (isDarkTheme) {
            // Dark (Black)
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-dark.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#000');
        } else {
            // Light (White)
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-light.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#fff');
        }
    }
}

// New Era Scroll Logic (Sticky Text Switching)
// New Era Scroll Logic (Sticky Text Switching)
const newEraScrollLogic = () => {
    const newEraSection = document.getElementById('newera');
    if (!newEraSection) return;

    const step1 = document.querySelector('.newera__step.step-1');
    const step2 = document.querySelector('.newera__step.step-2');

    const rect = newEraSection.getBoundingClientRect();

    // Simple Half-way Logic
    // rect.top is 0 when at top of section.
    // We want switch to happen when we scroll 50% of viewport height into it (approx).

    const switchPoint = -window.innerHeight / 2;

    if (rect.top < switchPoint) {
        // Second Half
        if (step1) step1.classList.remove('active');
        if (step2) step2.classList.add('active');
    } else {
        // First Half
        if (step1) step1.classList.add('active');
        if (step2) step2.classList.remove('active');
    }
}


// Attach Listener
const scrollArea = document.querySelector('.body_wrapper');
if (scrollArea) {
    scrollArea.addEventListener('scroll', () => {
        navScrollLogic();
        newEraScrollLogic();
    });
    // Initial Call
    navScrollLogic();
    newEraScrollLogic();
}
