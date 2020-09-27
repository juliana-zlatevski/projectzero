// global variables

const startAge = 0;
const startTime = 0;
const startHunger = 1;
const startSleepiness = 1;
const startBoredom = 1;
let time = startTime; 
let age = startAge;
let hunger = startHunger;
let sleepiness = startSleepiness;
let boredom = startBoredom;

// removing overlay pop-up message

$('.popup-close').on('click', () => {
    $('.popup-overlay').hide();
})

// initiating game

$('.popup-btn').on('click', () => {
    const $playerName = $('.popup-name').val();
    $('.name').text($playerName);
    $('.age').text(startAge);
    $('.hunger-bar').css('width', '0%');
    $('.sleep-bar').css('width', '0%');
    $('.boredom-bar').css('width', '0%');
    createAlien();
    startTimer();
    $('.popup-overlay').hide();
    $('.alien-img').addClass('animate__animated animate__backInDown');
})

// bringing back overlay pop-up message

$('.help-btn').on('click', () => {
    $('.alien-img').removeClass('animate__animated animate__backInDown');
    $('.popup-overlay').show();
})

// creating pet class

class AlienPet {
    constructor() {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
    }
}

// instantiating object on click

function createAlien () {
    const player = new AlienPet();
}

// timer, age, and health decrementer/incrementer 

const startTimer = function() {
    const timer = setInterval(function() {
        if (time < 52) {
            time++;
            age += 2;

            if (time < 50 && hunger < 10 && sleepiness < 10 && boredom < 10) {
            if (time % 10 === 0) {
                hunger += 2;
            }

            if (time % 20 === 0) {
                sleepiness += 3;
            }

            if (time % 4 === 0) {
                boredom += 1;
            }

        } else if (time < 50 && hunger >= 10) {
            alert('alien died of hunger!');
            clearInterval(timer);

        } else if (time < 50 && sleepiness >= 10) {
            alert('alien died of sleepiness!');
            clearInterval(timer);

        } else if (time < 50 && boredom >= 10) {
            alert('alien died of boredom!');
            clearInterval(timer);

        } else {
            clearInterval(timer);
            alert(`yay! i've lived a full alien life`);
        }
        

            // to update age and time elapsed on screen
            $('.time').text(50 - time + ' s');
            $('.age').text(age + ' yrs old');

            // calling on bar updater functions
            updateHungerBar();
            updateSleepBar();
            updateBoredomBar();

        }
    }, 1000);
}

// game buttons

$('.eat-btn').on('click', () => {
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');
    $('body').css('background-image', 'url(/Users/julianazlatevski/sei/deliverables/project-0/imgs/pexels-free-nature-stock-1376766.jpg)');
    $('h1').css('color', '#fff');
    $('.play-btn').css('color', '#FFF');
    $('.eat-btn').css('color', '#FFF');
    $('.sleep-btn').css('color', '#FFF');
    if (hunger > 0) {
        hunger--;
    } else {
        alert('pls stop i am full');
    }
})

$('.sleep-btn').on('click', () => {
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');
    $('body').css('background-image', 'url(/Users/julianazlatevski/sei/deliverables/project-0/imgs/pexels-min-an-813269.jpg)');
    $('h1').css('color', '#EBEC4F');
    $('.play-btn').css('color', '#EBEC4F');
    $('.eat-btn').css('color', '#EBEC4F');
    $('.sleep-btn').css('color', '#EBEC4F');
    if (sleepiness > 0) {
        sleepiness--;
    } else {
        alert('sleep is 4 the weak lol');
    }
})

$('.play-btn').on('click', () => {
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');
    $('body').css('background-image', 'url(/Users/julianazlatevski/sei/deliverables/project-0/imgs/pexels-free-nature-stock-1376766.jpg)');
    $('h1').css('color', '#fff');
    $('.play-btn').css('color', '#FFF');
    $('.eat-btn').css('color', '#FFF');
    $('.sleep-btn').css('color', '#FFF');
    if (boredom > 0) {
        boredom--;
    } else {
        alert(`i've already beat that game like 4 times...`)
    }
})

// functions to update status bars

function updateHungerBar() {
    if (hunger == 0) {
        $('.hunger-bar').css('width', '0%');
        } else if (hunger == 1) {
        $('.hunger-bar').css('width', '10%');
        } else if (hunger == 2) {
        $('.hunger-bar').css('width', '20%');
        } else if (hunger == 3) {
            $('.hunger-bar').css('width', '30%');
        } else if (hunger == 4) {
            $('.hunger-bar').css('width', '40%');
        } else if (hunger == 5) {
            $('.hunger-bar').css('width', '50%');
        } else if (hunger == 6) {
            $('.hunger-bar').css('width', '60%');
        } else if (hunger == 7) {
            $('.hunger-bar').css('width', '70%');
        } else if (hunger == 8) {
            $('.hunger-bar').css('width', '80%');
        } else if (hunger == 9) {
            $('.hunger-bar').css('width', '90%');
        } else if (hunger == 10) {
            $('.hunger-bar').css('width', '100%');
        }
}

function updateSleepBar() {
    if (sleepiness == 0) {
        $('.sleep-bar').css('width', '0%');
        } else if (sleepiness == 1) {
        $('.sleep-bar').css('width', '10%');
        } else if (sleepiness == 2) {
        $('.sleep-bar').css('width', '20%');
        } else if (sleepiness == 3) {
            $('.sleep-bar').css('width', '30%');
        } else if (sleepiness == 4) {
            $('.sleep-bar').css('width', '40%');
        } else if (sleepiness == 5) {
            $('.sleep-bar').css('width', '50%');
        } else if (sleepiness == 6) {
            $('.sleep-bar').css('width', '60%');
        } else if (sleepiness == 7) {
            $('.sleep-bar').css('width', '70%');
        } else if (sleepiness == 8) {
            $('.sleep-bar').css('width', '80%');
        } else if (sleepiness == 9) {
            $('.sleep-bar').css('width', '90%');
        } else if (sleepiness == 10) {
            $('.sleep-bar').css('width', '100%');
        }
}

function updateBoredomBar() {
    if (boredom == 0) {
        $('.boredom-bar').css('width', '0%');
        } else if (boredom == 1) {
        $('.boredom-bar').css('width', '10%');
        } else if (boredom == 2) {
        $('.boredom-bar').css('width', '20%');
        } else if (boredom == 3) {
            $('.boredom-bar').css('width', '30%');
        } else if (boredom == 4) {
            $('.boredom-bar').css('width', '40%');
        } else if (boredom == 5) {
            $('.boredom-bar').css('width', '50%');
        } else if (boredom == 6) {
            $('.boredom-bar').css('width', '60%');
        } else if (boredom == 7) {
            $('.boredom-bar').css('width', '70%');
        } else if (boredom == 8) {
            $('.boredom-bar').css('width', '80%');
        } else if (boredom == 9) {
            $('.boredom-bar').css('width', '90%');
        } else if (boredom == 10) {
            $('.boredom-bar').css('width', '100%');
        }
}