// Diesen Text anpassen auf einen, der auf der Warteseite steht, aber danach nicht
const stringToDisappear = "20:00"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function printLine() {
    const currentTime = (new Date()).getTime()*100;
    const colorR = currentTime % 155 + 50;
    const colorG = (colorR + 85) % 55 +150;
    const colorB = (colorG + 85) % 155 +50; 
    const colorHash = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);

    document.body.style.borderBottom = "2px solid";
    document.body.style.borderColor = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);
}

function reload() {
    printLine();

    sleep(20).then(() => {
        console.log("Search for " + stringToDisappear);
        
        var content = document.body.textContent || document.body.innerText;
        var hasText = content.indexOf(stringToDisappear)!==-1;
        if (hasText) {
            console.log("reload...");
            
            window.location.reload();
        } else {
            console.log("It's over");
        }
    });
}



if (document.readyState == "complete") {
    console.log("already fully laded");
    
    reload();
} else {
    document.addEventListener("DOMContentLoaded", (event) => {
        reload();
    });
}
