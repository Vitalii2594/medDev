document.getElementById('dekraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Simulate sending data to server
    console.log('Form Data:', data);

    // Display a thank you message
    document.getElementById('message').innerText = 'Dziękujemy za wypełnienie oświadczenia! Sprawdź swoją skrzynkę pocztową.';

    // Simulate email to the user's email address and to vitalii.yakubovskyi@dekra.com
    console.log('Sending confirmation email to:', data.email);
    console.log('Sending notification to: vitalii.yakubovskyi@dekra.com');

    // Clear the form
    document.getElementById('dekraForm').reset();
});
