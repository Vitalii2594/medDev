// JavaScript for handling pop-up display
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('order-form-popup').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('order-form-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('order-form-popup')) {
        document.getElementById('order-form-popup').style.display = 'none';
    }
});
