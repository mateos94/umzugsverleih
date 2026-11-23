const checklist = document.querySelector('#checklist');
document.querySelector('#open-checklist').addEventListener('click', () => {
  checklist.showModal();
});

for (const group of document.querySelectorAll('.packages, .sizes')) {
  group.addEventListener('click', (event) => {
    const selected = event.target.closest('button');
    if (!selected) return;
    group.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    selected.setAttribute('aria-pressed', 'true');
  });
}

const clock = document.querySelector('.clock');
const deadline = Date.parse(clock.dataset.deadline);
const clockValues = clock.querySelectorAll('b');

function updateCountdown() {
  const secondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  const values = [
    Math.floor(secondsLeft / 86400),
    Math.floor(secondsLeft / 3600) % 24,
    Math.floor(secondsLeft / 60) % 60,
    secondsLeft % 60,
  ];

  clockValues.forEach((field, index) => {
    field.textContent = String(values[index]).padStart(2, '0');
  });

  if (secondsLeft > 0) {
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();
