function showModule(moduleId) {
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => module.classList.add('hidden'));
    document.getElementById(moduleId).classList.remove('hidden');
    const moduleTitle = moduleId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('module-title').innerText = moduleTitle;
}

// Dummy data for trainers
const trainers = [
    { name: 'Jan Kowalski' },
    { name: 'Anna Nowak' },
    { name: 'Piotr Wiśniewski' },
];

// Populate trainer dropdowns
function populateTrainerDropdowns() {
    const trainerSelects = document.querySelectorAll('#open-trainer, #closed-trainer');
    trainerSelects.forEach(select => {
        trainers.forEach(trainer => {
            const option = document.createElement('option');
            option.value = trainer.name;
            option.text = trainer.name;
            select.appendChild(option);
        });
    });
}

// Add open training
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

// Add client
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

// Add offer
function addOffer() {
    const name = document.getElementById('offer-name').value;
    const date = document.getElementById('offer-date').value;
    const winChance = document.getElementById('win-chance').value;

    const table = document.getElementById('offer-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerText = name;
    cell2.innerText = date;
    cell3.innerText = winChance;

    clearForm(['offer-name', 'offer-date', 'win-chance']);
}

// Add closed training
function addClosedTraining() {
    const client = document.getElementById('closed-client').value;
    const date = document.getElementById('closed-date').value;
    const location = document.getElementById('closed-location').value;
    const trainer = document.getElementById('closed-trainer').value;
    const status = document.getElementById('closed-status').value;

    const table = document.getElementById('closed-training-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerText = client;
    cell2.innerText = date;
    cell3.innerText = location;
    cell4.innerText = trainer;
    cell5.innerText = status;

    clearForm(['closed-client', 'closed-date', 'closed-location', 'closed-trainer', 'closed-status']);
}

// Add closed project
function addClosedProject() {
    const projectName = document.getElementById('project-name').value;
    const client = document.getElementById('project-client').value;
    const date = document.getElementById('project-date').value;
    const status = document.getElementById('project-status').value;

    const table = document.getElementById('closed-project-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerText = projectName;
    cell2.innerText = client;
    cell3.innerText = date;
    cell4.innerText = status;

    clearForm(['project-name', 'project-client', 'project-date', 'project-status']);
}

// Add trainer
function addTrainer() {
    const name = document.getElementById('trainer-name').value;
    const bio = document.getElementById('trainer-bio').value;
    const files = document.getElementById('trainer-files').files;

    const table = document.getElementById('trainer-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerText = name;
    cell2.innerText = bio;
    cell3.innerText = files.length > 0 ? 'Załączone' : 'Brak plików';

    clearForm(['trainer-name', 'trainer-bio', 'trainer-files']);
}

// Add task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const employee = document.getElementById('task-employee').value;

    const ul = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerText = `${taskName} - ${employee}`;

    ul.appendChild(li);

    clearForm(['task-name', 'task-employee']);
}

// Add document
function addDocument() {
    const name = document.getElementById('document-name').value;
    const type = document.getElementById('document-type').value;
    const training = document.getElementById('document-training').value;

    const table = document.getElementById('document-list');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerText = name;
    cell2.innerText = type;
    cell3.innerText = training;
    cell4.innerText = 'Generuj PDF';

    clearForm(['document-name', 'document-type', 'document-training']);
}

// Clear form fields
function clearForm(fields) {
    fields.forEach(field => {
        document.getElementById(field).value = '';
    });
}

// Initialize chart
function initializeCharts() {
    const ctx1 = document.getElementById('dashboardChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj'],
            datasets: [{
                label: 'Statystyki',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });

    const ctx2 = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj'],
            datasets: [{
                label: 'Przychody',
                data: [3000, 2000, 4000, 5000, 6000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Koszty',
                data: [1500, 1000, 2000, 2500, 3000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        }
    });
}

// Initialize calendar
function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerText = 'Tutaj będzie kalendarz';
}

document.addEventListener('DOMContentLoaded', () => {
    populateTrainerDropdowns();
    initializeCharts();
    initializeCalendar();
});

document.addEventListener('DOMContentLoaded', function () {
    const addNormForm = document.getElementById('addNormForm');
    const normList = document.getElementById('normList');
    const pdfModal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalClose = document.querySelector('.modal-close');

    const norms = [];

    addNormForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const normName = document.getElementById('normName').value;
        const normFile = document.getElementById('normFile').files[0];
        const expiryDate = document.getElementById('expiryDate').value;
        
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const normData = {
                name: normName,
                file: e.target.result,
                expiry: new Date(expiryDate),
                id: Date.now()
            };
            
            norms.push(normData);
            renderNorms();
        };
        
        reader.readAsDataURL(normFile);
        
        addNormForm.reset();
    });

    function renderNorms() {
        normList.innerHTML = '<h3>Lista Norm</h3>';
        
        norms.forEach(norm => {
            const normElement = document.createElement('div');
            normElement.classList.add('norm');
            normElement.innerHTML = `
                <p>Nazwa: ${norm.name}</p>
                <p>Data wygaśnięcia: ${norm.expiry.toDateString()}</p>
                <button class="btn btn-secondary" data-id="${norm.id}">Podgląd</button>
            `;
            
            normElement.querySelector('button').addEventListener('click', function () {
                openPdfViewer(norm);
            });
            
            normList.appendChild(normElement);
        });
    }

    function openPdfViewer(norm) {
        const currentDate = new Date();
        
        if (currentDate > norm.expiry) {
            alert('Link do normy wygasł');
            return;
        }
        
        pdfViewer.src = norm.file;
        pdfModal.style.display = 'block';
    }

    modalClose.addEventListener('click', function () {
        pdfModal.style.display = 'none';
        pdfViewer.src = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
            pdfViewer.src = '';
        }
    });
});

