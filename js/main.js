


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


