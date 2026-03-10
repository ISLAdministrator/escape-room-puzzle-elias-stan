const introBox = document.getElementById('sciencelab-intro-screen');
const puzzleBox = document.getElementById('sciencelab-puzzle-screen');
const gameCanvas = document.getElementById('sciencelab-game-canvas');
const continueBtn = document.getElementById('sciencelab-continue-btn');
const startBtn = document.getElementById('js-start-btn');
const countNum = document.getElementById('sciencelab-count-num');
const statusText = document.getElementById('reactor-status');

let leversFound = 0;

continueBtn.addEventListener('click', () => {
    introBox.style.display = 'none';
    puzzleBox.style.display = 'block';
});

startBtn.addEventListener('click', () => {
    puzzleBox.style.display = 'none';
    gameCanvas.style.display = 'block';
});

function handleLeverClick(e) {
    leversFound++;
    countNum.innerText = leversFound;
    
    // Hide the lever so it can't be clicked again
    e.target.style.display = 'none';
    
    if (leversFound === 4) {
        statusText.style.display = 'block';
    }
}

document.getElementById('lever1').addEventListener('click', handleLeverClick);
document.getElementById('lever2').addEventListener('click', handleLeverClick);
document.getElementById('lever3').addEventListener('click', handleLeverClick);
document.getElementById('lever4').addEventListener('click', handleLeverClick);