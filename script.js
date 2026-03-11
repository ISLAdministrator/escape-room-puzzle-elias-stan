const introBox = document.getElementById('sciencelab-intro-screen');
const puzzleBox = document.getElementById('sciencelab-puzzle-screen');
const gameCanvas = document.getElementById('sciencelab-game-canvas');
const continueBtn = document.getElementById('sciencelab-continue-btn');
const startBtn = document.getElementById('js-start-btn');
const countNum = document.getElementById('sciencelab-count-num');
const statusText = document.getElementById('reactor-status');

// ADD THIS LINE:
const bgMusic = document.getElementById('bg-music');

let leversFound = 0;

continueBtn.addEventListener('click', () => {
    introBox.style.display = 'none';
    puzzleBox.style.display = 'block';
});

startBtn.addEventListener('click', () => {
    puzzleBox.style.display = 'none';
    gameCanvas.style.display = 'block';
    
    // ADD THIS LINE TO START MUSIC:
    bgMusic.play();
});

function handleLeverClick(e) {
    leversFound++;
    countNum.innerText = leversFound;
    
    e.target.style.display = 'none';
    
    if (leversFound === 4) {
        statusText.style.display = 'block';
        
        // OPTIONAL: Pause music or lower volume when they win
        bgMusic.pause(); 
    }
}

// Applying the listener to all levers
const levers = [lever1, lever2, lever3, lever4];
levers.forEach(lever => {
    lever.addEventListener('click', handleLeverClick);
});