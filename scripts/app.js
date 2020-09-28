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

// removing overlay pop-up message after user has input name

$('.popup-close').on('click', () => {
    $('.popup-overlay').hide();
})

// initiating game after using clicks 'next' button on overlay

$('.popup-btn').on('click', () => {
    const $playerName = $('.popup-name').val();
    $('.name').text($playerName);
    $('.age').text(startAge);
    $('.hunger-bar').css('width', '0%');
    $('.sleep-bar').css('width', '0%');
    $('.boredom-bar').css('width', '0%');
    createAlien();
    startGame();
    $('.popup-overlay').hide();
    $('.alien-img').addClass('animate__animated animate__backInDown');
})

// bringing back overlay pop-up message for instructions or renaming pet

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

// game function which includes timer, age, and health decrementer/incrementer 

const startGame = function() {
    const timer = setInterval(function() {
        if (time < 300) {
            time++;

            // morphing alien by turning him duller/grayer as time passes
            if (time % 3 === 0) {
                age++;
                    if (age === 25) {
                        $('.alien-img').css('filter', 'grayscale(25%)');
                    } else if (age === 50) {
                        $('.alien-img').css('filter', 'grayscale(50%)');
                    } else if (age === 75) {
                        $('.alien-img').css('filter', 'grayscale(75%)');
                    } else if (age === 99) {
                        $('.alien-img').css('filter', 'grayscale(99%)');
                    }
            }

            // adding a flash effect to alien in the event that any of his health metrics get to dangerous levels
            if (hunger > 7 || sleepiness > 7 || boredom > 7) {
                $('.alien-img').removeClass('animate__animated animate__backInDown');
                $('.alien-img').toggleClass('animate__animated animate__flash');
            }

            // alien beaming up animation for if/when he reaches 100/user beats game
            if (age >= 100) {
                $('.alien-img').removeClass('animate__animated animate__backInDown');
                $('.alien-img').addClass('animate__animated animate__backOutUp');
            }


            // conditional loop to determine how to increment health levels while time counts down
            if (time < 300 && hunger < 10 && sleepiness < 10 && boredom < 10) {
            if (time % 10 === 0) {
                hunger += 1;
            }

            if (time % 20 === 0) {
                sleepiness += 1;
            }

            if (time % 4 === 0) {
                boredom += 1;
            }

            // separate conditions in the event that user lets levels reach 10
        } else if (time < 300 && hunger >= 10) {
            alert('you let your alien die of hunger!');
            $('.alien-img').removeClass('animate__animated animate__flash');
            $('.alien-img').addClass('animate__animated animate__backOutUp');
            clearInterval(timer);

        } else if (time < 300 && sleepiness >= 10) {
            alert('you let your alien die of sleepiness!');
            $('.alien-img').removeClass('animate__animated animate__flash');
            $('.alien-img').addClass('animate__animated animate__backOutUp');
            clearInterval(timer);

        } else if (time < 300 && boredom >= 10) {
            alert(`you let your alien die of boredom!`);
            $('.alien-img').removeClass('animate__animated animate__flash');
            $('.alien-img').addClass('animate__animated animate__backOutUp');
            clearInterval(timer);

            // if levels stay under 10 but alien makes it to 100, user wins game
        } else {
            clearInterval(timer);
            alert(`Thanks for taking care of me, friend. Goodbye!`);
        }


        
            // to update age and time on screen
            $('.time').text(300 - time + ' s');
            $('.age').text(age + ' yrs');

            // calling on bar updater functions
            updateHungerBar();
            updateSleepBar();
            updateBoredomBar();

        }
    }, 250);
}



// game buttons and their functionality/effects on layout

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
        // alien sass message if user goes overboard on buttons
        alert('plz stop, I am so full');
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
        // alien sass message if user goes overboard on buttons
        alert('sleep is for the weak lol');
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
        // alien sass message if user goes overboard on buttons
        alert(`I've already beat that game like 4 times...`);
    }
})

// functions to update status bars in sync w/ timer and button clicks

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