// Set target launch date (YYYY, MM-1, DD, HH, MM, SS)
const launchDate = new Date(2025, 8, 15, 0, 0, 0); // Example: Sep 15, 2025

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
        countdownEl.innerHTML = "We are live!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
