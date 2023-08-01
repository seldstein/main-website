// Auto-updating adversaria index

window.addEventListener('DOMContentLoaded', () => {
    // Function to fetch the list of filenames from the "adversaria" folder
    function fetchFileList() {
        fetch('/adversaria')
            .then(response => response.text())
            .then(data => {
                const fileList = data.split('\n').filter(file => file.trim() !== '');
                updateFileList(fileList);
            })
            .catch(error => {
                console.error('Error fetching the file list:', error);
            });
    }

    // Function to update the list of filenames in the HTML
    function updateFileList(fileList) {
        const fileListElement = document.getElementById('fileList');
        fileListElement.innerHTML = '';

        fileList.forEach(filename => {
            const listItem = document.createElement('li');
            listItem.textContent = filename;
            fileListElement.appendChild(listItem);
        });
    }

    // Fetch the file list when the page loads and update it every few seconds (auto-updating)
    fetchFileList();
    setInterval(fetchFileList, 5000); // Update the list every 5 seconds (you can adjust the interval as per your preference)
});