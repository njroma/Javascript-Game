 
  const ingameBGMusic = document.querySelector("#Gameboy");
  const gamestart = document.querySelector("#GameStart");
  const safeSound = document.querySelector("#SafeSound");
  const bugSound = document.querySelector("#BugSound");
  const video = document.querySelector("#loadScreen");  
  const gameContainer = document.querySelector(".gameContainer");

    document.querySelector(".appHeader").style.setProperty("z-index", "1", "important");
    document.querySelector(".heroContainer").style.display = "inline";

  // video.addEventListener('ended', function () {
  //   document.querySelector("#introId").style.display = "none";
  //   ingameBGMusic.volume = 0.1; 
  //   ingameBGMusic.play();
  //   gamestart.volume = 0.1; 
  //   gamestart.play();

    
  //   gameContainer.setAttribute("data-aos", "fade-up");
  //   gameContainer.setAttribute("data-aos-duration", "600");
  //   gameContainer.classList.remove("aos-animate"); // reset
  //   void gameContainer.offsetWidth; // trigger reflow
  //   gameContainer.classList.add("aos-animate");
  // });

  document.querySelectorAll(".gameCubes").forEach(cube => {
  cube.addEventListener('click', function () {
    if (this.classList.contains('clicked')) return; // already clicked

    this.classList.add('flipped', 'clicked');
    
     // flip and mark as clicked
  });
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

const bugData = assignbugs(); // Your function that returns 30 boxes with 10 bugs

// Select all cubes
const gameCubes = document.querySelectorAll(".gameCubes");

// Add click event to each cube
gameCubes.forEach((cube, index) => {
  cube.addEventListener("click", function () {
    const p = cube.querySelector("p");
    
    // Prevent multiple clicks from changing the result
    if (p.textContent !== "❓") return;

    // Check if this cube has a bug
    if (bugData[index].hasBug) {
      p.textContent = "🐞";
      bugSoundPlay();
    } else {
      p.textContent = "✅";
      safeSoundPlay();
    }
  });
});
// const bugData = assignbugs(); // Get random bug assignments
// const cubeBacks = document.querySelectorAll(".gameCubes-back > p");

// cubeBacks.forEach((pTag, index) => {
//   if (bugData[index].hasBug) {
//     pTag.textContent = "🐞"; // Set bug emoji
//     pTag.parentElement.style.backgroundColor = "black";
//     pTag.parentElement.style.border = "black";
//   } else {
//     pTag.textContent = "✅"; // Set safe emoji
    
//   }
// });