let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById('heartCount');
const coinDisplay = document.getElementById('coinCount');
const copyDisplay = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearHistory');

// Heart Button
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener('click', () => {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});

// Copy Button
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('[data-service]');
    const number = card.getAttribute('data-number');
    navigator.clipboard.writeText(number).then(() => {
      alert(`Hotline ${number} copied to clipboard`);
      copyCount++;
      copyDisplay.textContent = copyCount;
    });
  });
});

// Call Button
document.querySelectorAll('.call-btn').forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest('[data-service]');
    const name = card.getAttribute('data-service');
    const number = card.getAttribute('data-number');

    if (coinCount < 20) {
      alert('Not enough coins to make a call.');
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${name} at ${number}`);

    const time = new Date().toLocaleTimeString();
    const li = document.createElement('li');
    li.textContent = `${name} — ${number} — ${time}`;
    historyList.appendChild(li);
  });
});

// Clear History
clearBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
});
