// Helper to set box color
const setBoxColor = color => document.getElementById('box').style.backgroundColor = color;

// Apply text input color
document.getElementById('apply-btn').addEventListener('click', () => {
  const color = document.getElementById('color-input').value;
  setBoxColor(color);
});

// Generate a random hex color
const randomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', () => {
  const color = randomHex();
  setBoxColor(color);
});
