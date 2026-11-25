// 1. Стрелочки в секциях и расписании
let sectionsTrack = document.querySelector('.sections-slider-track');
let sectionsNext = document.querySelector('.sections .next-btn');
let sectionsPrev = document.querySelector('.sections .prev-btn');

sectionsNext.onclick = function() {
    sectionsTrack.scrollLeft += 450;
};
sectionsPrev.onclick = function() {
    sectionsTrack.scrollLeft -= 450;
};

let scheduleTrack = document.querySelector('.schedule-slider-track');
let scheduleNext = document.querySelector('.schedule .next-btn');
let schedulePrev = document.querySelector('.schedule .prev-btn');

scheduleNext.onclick = function() {
    scheduleTrack.scrollLeft += 450;
};
schedulePrev.onclick = function() {
    scheduleTrack.scrollLeft -= 450;
};

// 2. Открытие модальных окон
let openButtons = document.querySelectorAll('.open-modal-btn');

for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].onclick = function() {
        let modalId = openButtons[i].getAttribute('data-target');
        document.getElementById(modalId).classList.add('is-open');
    };
}

// 3. Закрытие модальных окон по крестику и фону
let closeButtons = document.querySelectorAll('.close-modal-btn');
let modals = document.querySelectorAll('.modal');

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        for (let j = 0; j < modals.length; j++) {
            modals[j].classList.remove('is-open');
        }
    };
}

for (let i = 0; i < modals.length; i++) {
    modals[i].onclick = function(event) {
        if (event.target === modals[i]) {
            modals[i].classList.remove('is-open');
        }
    };
}

// 4. Боковое меню
let sideMenu = document.getElementById('side-menu');
let burgerBtn = document.querySelector('.burger-btn');
let closeMenuBtn = document.getElementById('close-menu-btn');

burgerBtn.onclick = function() {
    sideMenu.classList.add('is-open');
};

closeMenuBtn.onclick = function() {
    sideMenu.classList.remove('is-open');
};
