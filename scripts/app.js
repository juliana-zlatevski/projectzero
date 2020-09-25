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
    $('.hunger-count').text(startHunger);
    $('.sleepiness-count').text(startSleepiness);
    $('.boredom-count').text(startBoredom);
    createAlien();
    startTimer();
    $('.popup-overlay').hide();
    $('.alien-img').addClass('animate__animated animate__backInDown');
})

// bringing back overlay pop-up message

$('.help-btn').on('click', () => {
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
    console.log(`created successfully`);
    console.log(player);
}

// timer and age incrementer 

const startTimer = function() {
    const timer = setInterval(function() {
        if (time < 50) {
            time++;
            age += 2;


            if (time < 50 && hunger < 10 && sleepiness < 10 && boredom < 10) {
            if (time % 5 === 0) {
                hunger += 2;
            }

            if (time % 10 === 0) {
                sleepiness += 3;
            }

            if (time % 2 === 0) {
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
        }

            $('.time').text(time + ' s');
            $('.age').text(age + ' yrs old');
            $('.hunger-count').text(hunger);
            $('.sleepiness-count').text(sleepiness);
            $('.boredom-count').text(boredom);

        }
    }, 1000);
}
