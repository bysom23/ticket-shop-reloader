function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const stringToDisappear = "20:00"

const currentTime = curTime = (new Date()).getTime()*100;
const colorR = currentTime % 155 + 50;
const colorG = (colorR + 85) % 55 +150;
const colorB = (colorG + 85) % 155 +50; 
const colorHash = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);

console.log("Start...");

document.body.style.borderBottom = "2px solid";
document.body.style.borderColor = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);


sleep(50).then(() => {
    var content = document.body.textContent || document.body.innerText;
    // Diesen Text anpassen auf einen, der auf der Warteseite steht, aber danach nicht
    var hasText = content.indexOf(stringToDisappear)!==-1;
    if (hasText) {
        console.log("reload...");
        
        window.location.reload();
    } else {
        console.log("It's over");
    }
});
