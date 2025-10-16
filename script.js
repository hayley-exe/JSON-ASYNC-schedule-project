// Reference to the container where schedule cards will be inserted
const scheduleContainer = document.getElementById('scheduleCards');
const errorMessage = document.getElementById('errorMessage');

// Load a schedule JSON and populate the page
async function loadSchedule(fileName) {
    try {
        // Clear previous cards and hide error
        scheduleContainer.innerHTML = '';
        errorMessage.classList.add('d-none');

        // Fetch the schedule file
        const response = await fetch(`./json/${fileName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Loop through schedule entries and insert cards
        data.forEach(entry => {
            const html = `
                <div class="col-md-6 col-lg-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">${entry.className}</h5>
                            <p class="card-text"><strong>Teacher:</strong> ${entry.teacher}</p>
                            <p class="card-text"><strong>Room:</strong> ${entry.roomNumber}</p>
                            <p class="card-text"><strong>Period:</strong> ${entry.period}</p>
                            <p class="card-text"><strong>Subject:</strong> ${entry.subjectArea}</p>
                        </div>
                    </div>
                </div>
            `;
            // Insert each card into the schedule container
            scheduleContainer.insertAdjacentHTML('beforeend', html);
        });

    } catch (error) {
        console.error('Error loading schedule:', error);
        errorMessage.classList.remove('d-none'); // Show error message
    }
}

// Keydown event listener to switch between friends
document.addEventListener('keydown', (e) => {
    if (e.key === '1') loadSchedule('gabbi.json');
    if (e.key === '2') loadSchedule('nick.json');
    if (e.key === '3') loadSchedule('cooper.json');
    if (e.key === 'tab') loadSchedule('hayley.json')
});

// Load Gabbi's schedule by default when page loads
window.addEventListener('DOMContentLoaded', () => {
    loadSchedule('hayley.json');
});
