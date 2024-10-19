// Fetch logs from the API and display them in the table
function fetchLogs() {
    axios.get('https://server65010312.vercel.app/logs')
        .then(response => {
            const logs = response.data; // Assume the response data is an array of logs
            const logTableBody = document.querySelector('#logTable tbody');
            logTableBody.innerHTML = '';  // Clear existing table rows

            logs.forEach(log => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${new Date(log.created).toLocaleString()}</td>
                    <td>${log.country}</td>
                    <td>${log.drone_id}</td>
                    <td>${log.drone_name}</td>
                    <td>${log.celsius} °C</td>
                `;
                logTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching logs:', error);
            alert('Error fetching logs. Please try again later.');
        });
}

// Fetch logs when the page loads
window.onload = fetchLogs;
