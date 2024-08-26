function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    // Collect data from form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const contactByEmail = formData.get('contactByEmail');
    const contactByPhone = formData.get('contactByPhone');
    const topics = formData.getAll('topics');

    // Determine contact preference
    let contactMethod = '';
    if (contactByEmail) {
        contactMethod += ' email';
    }
    if (contactByPhone) {
        contactMethod += ' phone';
    }

    // Prepare email content
    const mailBody = `Dane osoby zainteresowanej kontaktem z DEKRA:
    Imię i nazwisko: ${name}
    E-mail: ${email}
    Telefon: ${phone}
    Preferowana forma kontaktu:${contactMethod}
    Wybrane tematy: ${topics.join(', ')}`;

    const mailtoLink = `mailto:vitalii.yakubovskyi@dekra.com?subject=Wynik ankiety&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;

    alert('Dziękujemy za wypełnienie formularza! Zostaniesz przekierowany do aplikacji pocztowej, aby wysłać wiadomość.');
}
