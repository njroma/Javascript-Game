 
  const ingameBGMusic = document.querySelector("#Gameboy");
  const gamestart = document.querySelector("#GameStart");
  const gameOver = document.querySelector("#GameOver");
  const safeSound = document.querySelector("#SafeSound");
  const bugSound = document.querySelector("#BugSound");
  const victorySound = document.querySelector("#VictorySound");
  const video = document.querySelector("#loadScreen");  
  const gameContainer = document.querySelector(".gameContainer");
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  var Requirements = 5; // Default
  var bugCounter = 0;
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const resetBtn = document.querySelector("#resetBtnId");
  const musicBG = document.querySelector('.musicBG');
  const Modebuttons = document.querySelectorAll(".modeBtn");
  const Win = document.querySelector(".trophy");


  
  video.addEventListener('ended', function () {
    document.querySelector("#introId").style.display = "none";
    resetBtn.style.display = "none";
    toastBootstrap.show()
    ingameBGMusic.volume = 0.1; 
    ingameBGMusic.play();
    gamestart.volume = 0.1; 
    gamestart.play();
    Win.style.display = "none";
     document.querySelector(".appHeader").style.setProperty("z-index", "1", "important");
    document.querySelector(".heroContainer").style.display = "inline";

   
 
    gameContainer.setAttribute("data-aos", "fade-up");
    gameContainer.setAttribute("data-aos-duration", "600");
    gameContainer.classList.remove("aos-animate");
    void gameContainer.offsetWidth; 
    gameContainer.classList.add("aos-animate");
  });


function safeSoundPlay (){
  safeSound.play();
};

function bugSoundPlay (){
  bugSound.play();
};


  
 
function assignbugs(totalBoxes = 30, bugCount = 10) {
  const boxes = Array.from({ length: totalBoxes }, (_, i) => ({
    id: i,
    hasBug: false
  }));

  let bugsPlaced = 0;
  while (bugsPlaced < bugCount) {
    const randomIndex = Math.floor(Math.random() * totalBoxes);
    if (!boxes[randomIndex].hasBug) {
      boxes[randomIndex].hasBug = true;
      bugsPlaced++;
    }
  }

  return boxes;
}

const bugData = assignbugs(); 


const gameCubes = document.querySelectorAll(".gameCubes");

// Add click event to each cube
gameCubes.forEach((cube, index) => {
  cube.addEventListener("click", function () {
    const p = cube.querySelector("p");
    if (this.classList.contains('clicked') || !this.classList.contains('started')) return;
    // Prevent multiple clicks from changing the result
    if (p.textContent === " ") {
      if (bugData[index].hasBug) {
      p.textContent = "💣";
      bugSoundPlay();
      loseLife();
      } else {
        p.textContent = "🐞";
        safeSoundPlay();
        bugCounter++;
      }
    };
    this.classList.add('flipped', 'clicked');
    
    if(bugCounter >= Requirements){
      victorySound.play();
      Win.style.display = "flex"
      GameOver();
    }
    console.log("Bug Counter = ", bugCounter)
  });
});

function GameOver (){
gameCubes.forEach((cube) => {
cube.classList.add('clicked');
})
}


const startBtn = document.getElementById("startBtnId");

startBtn.addEventListener("click", () => {
  startBtn.disabled = true; 
  
  resetBtn.style.display = "inline-block" ;
  gamestart.play();
  gameCubes.forEach(cube => {
    cube.classList.add("started");
  });
  Modebuttons.forEach(mdbtn =>{
    mdbtn.disabled = true;
  })
});

const levels = document.querySelectorAll(".modeBtn");
levels.forEach((level)=> {
  level.addEventListener("click", ()=>{
    bugSound.play();
  })
  
})

const lives = document.querySelectorAll('.lives');
 var livesCounter = 3;

function updateLivesDisplay() {
  lives.forEach((life, index) => {

    if (index >= livesCounter) {
      life.style.fill = "black"; 
    } else {
      life.style.fill = "red"; 
    }
  });
}

function loseLife() {
  if (livesCounter > 1) {
    livesCounter--;
    updateLivesDisplay();
  }else{
    livesCounter--;
    updateLivesDisplay();
    gameOver.play();
    toastBootstrap.show()
    GameOver();
  }
}

function BugGoal() {
  if (bugCounter < 4) {
    bugCounter++;
  }else{
    livesCounter++;

    GameOver();
  }
}



musicBG.addEventListener('change', ()=> {
  ingameBGMusic.muted = !musicBG.checked;
})




resetBtn.addEventListener("click", () => {

  gameCubes.forEach((cube) => {
    const p = cube.querySelector("p");
    p.textContent = " ";
    cube.classList.remove("flipped", "clicked", "started");
  });
  Modebuttons.forEach((mdbtn =>{
    mdbtn.disabled = false;
  }))


  livesCounter = 3;
  Requirements = 5;
  bugCounter = 0;
  updateLivesDisplay();
  Win.style.display = "none";


  const newBugData = assignbugs();
  bugData.splice(0, bugData.length, ...newBugData); 

  bugCounter = 0;

  startBtn.disabled = false;
  resetBtn.style.display = "none";
});




Modebuttons.forEach(button => {
  button.addEventListener("click", function () {
    if (this.disabled) return;

    Modebuttons.forEach(btn => btn.disabled = false);
    this.disabled = true;

    Requirements = parseInt(this.dataset.requirements);

    console.log("Requirements set to:", Requirements);
  });
});


