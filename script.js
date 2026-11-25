// ==========================================
// 1. СТРЕЛОЧКИ В СЕКЦИЯХ И РАСПИСАНИИ
// ==========================================
const sectionsTrack = document.querySelector('.sections-slider-track');
const sectionsNext = document.querySelector('.sections .next-btn');
const sectionsPrev = document.querySelector('.sections .prev-btn');

if (sectionsNext) {
    sectionsNext.onclick = function() {
        sectionsTrack.scrollLeft = sectionsTrack.scrollLeft + 450;
    };
}
if (sectionsPrev) {
    sectionsPrev.onclick = function() {
        sectionsTrack.scrollLeft = sectionsTrack.scrollLeft - 450;
    };
}

const scheduleTrack = document.querySelector('.schedule-slider-track');
const scheduleNext = document.querySelector('.schedule .next-btn');
const schedulePrev = document.querySelector('.schedule .prev-btn');

if (scheduleNext) {
    scheduleNext.onclick = function() {
        scheduleTrack.scrollLeft = scheduleTrack.scrollLeft + 450;
    };
}
if (schedulePrev) {
    schedulePrev.onclick = function() {
        scheduleTrack.scrollLeft = scheduleTrack.scrollLeft - 450;
    };
}


// ==========================================
// 2. ОТКРЫТИЕ ОКОШЕК ПО КНОПКАМ
// ==========================================
const openButtons = document.querySelectorAll('.open-modal-btn');

for (let i = 0; i < openButtons.length; i++) {
    const button = openButtons[i];

    button.onclick = function() {
        const modalId = button.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('is-open');
        }
    };
}


// ==========================================
// 3. ЗАКРЫТИЕ ОКОШЕК (КРЕСТИК И ТЁМНЫЙ ФОН(темно-розовый))
// ==========================================
const modals = document.querySelectorAll('.modal');

for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-open');
        }
        if (event.target.classList.contains('close-modal-btn')) {
            modal.classList.remove('is-open');
        }
    };
}


// ==========================================
// 4. БОКОВОЕ МЕНЮ В ШАПКЕ
// ==========================================
const sideMenu = document.getElementById('side-menu');
const burgerBtn = document.querySelector('.burger-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

if (burgerBtn) {
    burgerBtn.onclick = function() {
        sideMenu.classList.add('is-open');
    };
}

if (closeMenuBtn) {
    closeMenuBtn.onclick = function() {
        sideMenu.classList.remove('is-open');
    };
}

