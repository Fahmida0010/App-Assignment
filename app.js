// Select Navbar elements
const heartCount = document.getElementById('heart-count');
const coinCount = document.getElementById('coin-count');
const copyCount = document.getElementById('copy-count');
const copyBtn = document.getElementById('copyBtn');
const clearHistoryBtn = document.getElementById('clear-history');
const historyList = document.getElementById('history-list');

// Initialize counts
let hearts = 0;
let coins = 100;
let copies = 0;

// Function to format time as HH:MM:SS
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-GB'); // 24-hour format
}

// Update Navbar counts
function updateCounts() {
  heartCount.textContent = hearts;
  coinCount.textContent = coins;
  copyCount.textContent = copies;
}

// HEART ICON CLICK - Increment heart count
document.querySelectorAll('.fa-heart').forEach((heartIcon) => {
  heartIcon.style.cursor = 'pointer';
  heartIcon.addEventListener('click', () => {
    hearts++;
    updateCounts();
  });
});

// COPY BUTTON CLICK - Copies number from card
document.querySelectorAll('button:has(.fa-copy)').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.bg-white');
    const number = card.querySelector('p.text-sm').textContent;
    navigator.clipboard.writeText(number);
    alert(`Number ${number} copied!`);
    copies++;
    updateCounts();
  });
});

// CALL BUTTON CLICK - Deduct coins and add to history
document.querySelectorAll('button:has(.fa-phone)').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.bg-white');
    const serviceName = card.querySelector('h3').textContent;
    const serviceNumber = card.querySelector('p.text-sm').textContent;

    if (coins < 20) {
      alert("You don't have enough coins to make a call!");
      return;
    }

    coins -= 20;
    updateCounts();

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to call history dynamically
    const li = document.createElement('li');
    li.classList.add('flex', 'justify-between');
    li.innerHTML = `<span>${serviceName} <br> ${serviceNumber}</span>
                    <span class="text-sm text-gray-400">${getCurrentTime()}</span>`;
    historyList.prepend(li); // latest call on top
  });
});

// CLEAR HISTORY BUTTON
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
});
