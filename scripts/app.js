// global variables

const startAge = 0;
const startTime = 0;
let time = startTime; 
let age = startAge;

// removing overlay pop-up message

$('.popup-close').on('click', () => {
    $('.popup-overlay').hide();
})

// initiating game

$('.popup-btn').on('click', () => {
    const $playerName = $('.popup-name').val();
    $('.name').text($playerName);
    $('.age').text(startAge);
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
        if (time < 25) {
            time++;
            age += 4;
            $('.time').text(time + ' s');
            $('.age').text(age + ' yrs old');
        }
    }, 1000);
}
