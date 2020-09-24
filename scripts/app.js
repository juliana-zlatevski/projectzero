// removing overlay pop-up message

$('.popup-close').on('click', () => {
    $('.popup-overlay').hide();
})

$('.popup-btn').on('click', () => {
    const $playerName = $('.popup-name').val();
    $('.name').text($playerName);
    $('.popup-overlay').hide();
    createAlien();
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

