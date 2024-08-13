document.getElementById('banner-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('updateBanner.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Banner updated successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
