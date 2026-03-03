console.log("Script loaded");

// below is basic example code for using a button
// you can use it, expand on it, or delete it
// that all depends on your team's plan.

const introBox = document.getElementById('sciencelab-intro-screen');
const puzzleBox = document.getElementById('sciencelab-puzzle-screen');
const continueBtn = document.getElementById('sciencelab-continue-btn');

continueBtn.addEventListener('click', function() {
  // 1. Hide the intro
  introBox.style.display = 'none';
  
  // 2. Show the new text
  puzzleBox.style.display = 'block';
});