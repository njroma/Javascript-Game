const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let interactionCounter = 0;
let interBtnCounter = document.querySelectorAll(".interactBtn");

interBtnCounter.forEach((interactBtn)=>{
    interactBtn.addEventListener("click", (e)=>{
        e.target.style.display="none";
        interactionCounter++;
        if(interactionCounter == 1){
            document.querySelector("#coachBryl").style.display= "inline";
        }
        else if(interactionCounter > 5){
            document.querySelector("#coachBryl").style.display = "none";
            document.querySelector(".specialBtn").style.display = "none";
            document.querySelector(".playNow").innerHTML = "Play Now!";
            document.querySelector(".gameStart").innerHTML = `<span data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration="550">
            Oh no! Let's try to find the bugs 🐞 <br>and be a <span class="extra">developer</span> in <span class="extra">8 weeks.</span></span>`;
            document.querySelector(".subGameStart").innerHTML = "Click The Button Below To Start! 🎮";
            document.querySelector(".sub2GameStart").innerHTML = "All you need is a love for finding bugs💖.";
            document.querySelector(".playNow").addEventListener("click", () => {
                window.location = "/app.html";
            });
        }
    });
});

