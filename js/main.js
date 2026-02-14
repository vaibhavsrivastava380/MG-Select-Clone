

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
    const logo = document.querySelector('.intro-logo');
    const logoImg = document.querySelector('.intro-logo img');
    const hamburger = document.querySelector('.hamburger'); // Label
    const hamburgerLines = document.querySelectorAll('.hamburger .line');

    // Sections
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');
    const newEraSection = document.getElementById('newera');
    const centersSection = document.getElementById('centres');
    const historySection = document.getElementById('history');
    const footerSection = document.getElementById('footer');

    if (!logo || !hamburger) return;

    // Helper to check if Element is essentially in view (taking up center of screen)
    const isInView = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        // Check if the element overlaps with the middle of the viewport
        const viewportMiddle = window.innerHeight / 2;
        return rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;
    };

    // Helper to Check if Element is entering viewport
    const isEntering = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Default State: Visible
    let shouldHide = false;
    let theme = 'light'; // 'light' means White Logo/Lines, 'dark' means Black

    // 1. Check Visibility based on specific sections
    // "vanish immediately as newera section appear"
    // "not on footer"

    // If New Era is entering or active -> Hide
    // We check if New Era top is within viewport or above it (but not so far above that we are in Centers)
    if (newEraSection) {
        const newEraRect = newEraSection.getBoundingClientRect();
        // If New Era is mostly visible or we are scrolling through it
        // User wants it to vanish "immediately as newera section appear"
        // So if top of New Era is < window height (it started entering)
        // AND bottom of New Era is > 0 (it hasn't fully left)
        if (newEraRect.top < window.innerHeight && newEraRect.bottom > 0) {
            shouldHide = true;
        }
    }

    // If Footer is entering -> Hide
    if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
            shouldHide = true;
        }
    }

    // Apply Visibility
    if (shouldHide) {
        logo.style.opacity = '0';
        logo.style.pointerEvents = 'none';
        hamburger.style.opacity = '0';
        hamburger.style.pointerEvents = 'none';
    } else {
        logo.style.opacity = '1';
        logo.style.pointerEvents = 'auto';
        hamburger.style.opacity = '1';
        hamburger.style.pointerEvents = 'auto';
        // Reset transform from previous logic if any
        logo.style.transform = 'translate(-50%, 0)';
    }

    // 2. Check Theme (Color)
    // We only care about color if it is visible
    if (!shouldHide) {
        // Default to Light (White)
        theme = 'light';

        // Check if we are in About Section
        if (isInView(aboutSection)) {
            // Check Day/Night mode
            if (aboutSection.classList.contains('day-mode')) {
                theme = 'dark'; // Day mode = Dark Logo
            } else {
                theme = 'light'; // Night mode = Light Logo
            }
        }

        // Check Centres - Dark
        if (centersSection && isInView(centersSection)) {
            theme = 'dark';
        }

        // Check History - Dark
        if (historySection && isInView(historySection)) {
            theme = 'dark';
        }

        // Check if we are in Centers or History
        // User said "both come back...". Usually these have dark backgrounds or images, so Light is safe.
        // If Centers is white background, we might need Dark.
        // Let's assume Light for now as typical for overlay.
        // Actually, if Centers has white background, we need Dark.
        // Let's check: Centers has "center__image" class. Likely standard images. 
        // History has "history_section" with dark background usually.

        // But wait, if we are in Hero -> Light.
        // If we are in About (Day) -> Dark.

        // Apply Theme
        if (theme === 'light') {
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-light.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#fff');
        } else {
            if (logoImg) logoImg.src = './assets/images/mg-select-final-logo-dark.webp';
            hamburgerLines.forEach(line => line.style.backgroundColor = '#000');
        }
    }
}

// Attach Listener
const scrollArea = document.querySelector('.body_wrapper');
if (scrollArea) {
    scrollArea.addEventListener('scroll', navScrollLogic);
    // Initial Call
    navScrollLogic();
}
