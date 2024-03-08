document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');

    modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });
});


document.querySelectorAll('.container .box .ingredients').forEach(ingredients => {
    ingredients.addEventListener('click', () => {
        ingredients.parentElement.classList.toggle('flipped');
    });
});