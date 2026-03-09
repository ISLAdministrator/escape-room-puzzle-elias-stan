console.log("Script loaded");

// 1. Get all our elements from the HTML
const introBox = document.getElementById('sciencelab-intro-screen');
const puzzleBox = document.getElementById('sciencelab-puzzle-screen');
const continueBtn = document.getElementById('sciencelab-continue-btn');
const startBtn = document.getElementById('js-start-btn');

// 2. Click "Continue" -> Show the instructions and the Start button
continueBtn.addEventListener('click', function() {
  introBox.style.display = 'none';
  puzzleBox.style.display = 'block';
});

// 3. Click "Start" -> Hide everything so only the background remains
startBtn.addEventListener('click', function() {
  puzzleBox.style.display = 'none';
  console.log("Game started! Screen is now blank.");
});