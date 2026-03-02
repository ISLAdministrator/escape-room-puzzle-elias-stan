console.log("Script loaded");

// below is basic example code for using a button
// you can use it, expand on it, or delete it
// that all depends on your team's plan.

const button = document.getElementById("button");
const output = document.getElementById("output");


// 1. Link the HTML elements to JavaScript variables
const introBox = document.getElementById('sciencelab-intro-screen');
const continueBtn = document.getElementById('sciencelab-continue-btn');

// 2. Make the magic happen on click
continueBtn.addEventListener('click', function() {
  introBox.style.display = 'none';
});