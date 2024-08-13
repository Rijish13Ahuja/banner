document.addEventListener('DOMContentLoaded', function() {
    fetch('backend/getBanner.php')
        .then(response => response.json())
        .then(data => {
            if (data.is_visible) {
                document.getElementById('banner-container').classList.remove('hidden');
                document.getElementById('banner-description').textContent = data.description;
                document.getElementById('banner-link').href = data.link;
                startCountdown(data.timer);
            }
        });

    function startCountdown(duration) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById('timer').textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                document.getElementById('banner-container').classList.add('hidden');
            }
        }, 1000);
    }
});
