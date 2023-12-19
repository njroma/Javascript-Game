const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let interactionCounter = 0;

let interBtnCounter = document.querySelectorAll(".interactBtn");

interBtnCounter.forEach((interactBtn)=>{
    interactBtn.addEventListener("click", (e)=>{
        e.target.style.display="none";
        interactionCounter++;
        if(interactionCounter == 1){
            document.querySelector("#coachBryl").style.display= "inline";
        }
        else if(interactionCounter > 6){
            document.querySelector("#coachBryl").style.display = "none";
            document.querySelector(".playNow").innerHTML = "Play Now!";
            document.querySelector(".playNow").addEventListener("click", () => {
                window.location = "/app.html";
            });
        }
    });
    
});