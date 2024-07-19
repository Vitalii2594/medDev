function showModule(moduleId) {
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => module.classList.add('hidden'));
    document.getElementById(moduleId).classList.remove('hidden');
    const moduleTitle = moduleId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('module-title').innerText = moduleTitle;
}

function addOpenTraining() {
    const category = document.getElementById('open-category').value;
    const date = document.getElementById('open-date').value;
    const trainer = document.getElementById('open-trainer').value;
    const status = document.getElementById('open-status').value;

    const table = document.getElementById('open-training-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerText = category;
    cell2.innerText = date;
    cell3.innerText = trainer;
    cell4.innerText = status;

    clearForm(['open-category', 'open-date', 'open-trainer', 'open-status']);
}

function addClient() {
    const name = document.getElementById('client-name').value;
    const contact = document.getElementById('contact-name').value;
    const address = document.getElementById('address').value;

    const table = document.getElementById('client-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerText = name;
    cell2.innerText = contact;
    cell3.innerText = address;
    cell4.innerText = 'Aktywny';

    clearForm(['client-name', 'contact-name', 'address']);
}

function addClosedTraining() {
    const client = document.getElementById('closed-client').value;
    const date = document.getElementById('closed-date').value;
    const location = document.getElementById('closed-location').value;
    const status = document.getElementById('closed-status').value;

    const table = document.getElementById('closed-training-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerText = client;
    cell2.innerText = date;
    cell3.innerText = location;
    cell4.innerText = status;

    clearForm(['closed-client', 'closed-date', 'closed-location', 'closed-status']);
}

function clearForm(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

// Chart example using Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    const dashboardChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
            datasets: [{
                label: 'Szkolenia',
                data: [12, 19, 3, 5, 2, 3, 7, 10, 15, 20, 25, 30],
                backgroundColor: 'rgba(41, 128, 185, 0.2)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
