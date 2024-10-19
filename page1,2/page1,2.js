// Fetch drone config using axios
function fetchDroneConfig() {
    axios.get('https://server65010312.vercel.app/configs/65010312')
        .then(response => {
            const data = response.data;
            const configDiv = document.getElementById('config');
            configDiv.innerHTML = `
                <p><strong>Drone ID:</strong> ${data.drone_id}</p>
                <p><strong>Drone Name:</strong> ${data.drone_name}</p>
                <p><strong>Max Speed:</strong> ${data.max_speed} °C</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Light:</strong> ${data.light}</p>
                <p><strong>Population:</strong> ${data.population}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching drone config:', error);
        });
}

// Handle form submission for logging temperature using axios
document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    const temperature = document.getElementById('temperature').value;

    // Prepare the data to be sent
    const logData = {
        celsius: parseFloat(temperature)
    };

    // Send the log data using axios
    axios.post('https://server65010312.vercel.app/POST/logs', logData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        alert('Temperature log submitted successfully!');
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error submitting log:', error);
        alert('Error submitting log. Please try again.');
    });

    // Clear the form input
    document.getElementById('temperature').value = '';
});

// When the page loads, fetch drone config
window.onload = function() {
    fetchDroneConfig();  // Fetch and display drone config
};

