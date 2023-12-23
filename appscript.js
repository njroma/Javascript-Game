let counter = 0;

var loadingCounter = setInterval(count,1000);

function count(){
    counter++;
    console.log(counter); 
    if (counter >= 12){
        document.querySelector("#loadScreen").style.display = "none"
        clearInterval(loadingCounter);
        document.querySelector(".appContainer").style.removeProperty("height")
        document.querySelector(".appContainer").style.removeProperty("width")
    }
}


