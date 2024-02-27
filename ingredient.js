document.querySelectorAll('.myCard').forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.innedCard').classList.toggle('flip');
    });
});