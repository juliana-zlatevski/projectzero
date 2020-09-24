// removing overlay pop-up message

$('.popup-close').on('click', () => {
    $('.popup-overlay').hide();
})

$('.popup-btn').on('click', () => {
    const $playerName = $('.popup-name').val();
    $('.name').text($playerName);
    $('.popup-overlay').hide();
})

// bringing back overlay pop-up message

$('.help-btn').on('click', () => {
    $('.popup-overlay').show();
})