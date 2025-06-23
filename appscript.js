 
 
   const video = document.querySelector("#loadScreen");
 
 video.addEventListener('ended', function () {
    document.querySelector("#introId").style.display = "none";
    document.querySelector(".appHeader").style.setProperty("z-index", "1", "important");
    document.querySelector(".heroContainer").style.display = "inline";
  });


