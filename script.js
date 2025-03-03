let FastMode = false

let StartMenu = document.getElementById("Start-Menu")
let StartMenuButton = document.getElementById("Start-Game-Button")

let StartScene = document.querySelector("#Start-Scene");
let StartSceneButtonGoIn = document.querySelector("#Start-Scene-Button-GoIn");
let StartSceneButtonRunAway = document.querySelector("#Start-Scene-Button-RunAway");

let GoInScene = document.querySelector("#GoIn-Scene");
let GoInSceneButtonEnter = document.querySelector("#GoIn-Scene-Button-Enter");
let GoInSceneButtonFightBack = document.querySelector("#GoIn-Scene-Button-FightBack");

let GoInBasement = document.querySelector("#GoIn-Basement-Scene");
let GoInBasementButtonBed = document.querySelector("#GoInBasement-Scene-Button-Bed");
let GoInBasementButtonFightBack = document.querySelector("#GoInBasement-Scene-Button-FightBack");

let TheBackrooms1 = document.querySelector("#Backroom-1-Scene");
let TheBackrooms1ButtonYes1 = document.querySelector("#Backroom-1-Scene-Button-Yes1");
let TheBackrooms1ButtonYes2 = document.querySelector("#Backroom-1-Scene-Button-Yes2");

let TheBackrooms1Bacteria = document.querySelector("#Backroom-1-Bacteria-Scene");
let TheBackrooms1BacteriaButtonAsk = document.querySelector("#Backroom-1-Bacteria-Scene-Button-Ask");
let TheBackrooms1BacteriaButtonRunAway = document.querySelector("#Backroom-1-Bacteria-Scene-Button-Run");

let TheBackrooms1Pits = document.querySelector("#Backroom-1-Pits-Scene");
let TheBackrooms1PitsButtonContinue = document.querySelector("#Backroom-1-Pits-Scene-Button-Continue");

let TheBackroom2PoolroomStartScene = document.querySelector("#Backroom-2-Poolroom-Start-Scene");
let TheBackroom2PoolroomStartButtonContinue = document.querySelector("#Backroom-2-Poolroom-Start-Button-Continue");



let Ending1Scene = document.querySelector("#Ending-1-Scene");
let Ending2Scene = document.querySelector("#Ending-2-Scene");
let Ending3Scene = document.querySelector("#Ending-3-Scene");
let EndingToBeContinuedScene = document.querySelector("#Ending-ToBeContinued-Scene");



function ButtonTriggered(Container, OriginalTrigger){
  if (OriginalTrigger){
    OriginalTrigger.style.display = "none";
  }
  
  if (FastMode == false) {
    Container.style.display = "flex";
    Container.querySelector("h1").classList.add("typewriter");
    Container.querySelector(".Big-Image-Story").style.animation = "imagesappearing 1s linear 3.5s forwards";
    Container.querySelector(".Story-Small-Text").style.animation = "imagesappearing 1s linear 4.5s forwards";
    if (Container.querySelector(".Buttons-container")) { // checking just in case
    Container.querySelector(".Buttons-container").style.animation = "imagesappearing 1s linear 5.5s forwards";
    }
  } else {
    Container.style.display = "flex";
    Container.querySelector("h1").classList.add("typewriter");
    Container.querySelector(".Big-Image-Story").style.animation = "imagesappearing 0s linear 0s forwards";
    Container.querySelector(".Story-Small-Text").style.animation = "imagesappearing 0s linear 0s forwards";
    if (Container.querySelector(".Buttons-container")) { // checking just in case
    Container.querySelector(".Buttons-container").style.animation = "imagesappearing 0s linear 0s forwards";}
  }
};


StartMenuButton.addEventListener("click", function(){
  StartMenu.style.display = "none";
  ButtonTriggered(StartScene);
});

StartSceneButtonGoIn.addEventListener("click", function(){
  StartSceneButtonGoIn.style.display = "none";
  StartSceneButtonRunAway.style.display = "none";
  ButtonTriggered(GoInScene,StartScene);
});

StartSceneButtonRunAway.addEventListener("click", function(){
  StartSceneButtonGoIn.style.display = "none";
  StartSceneButtonRunAway.style.display = "none";
  ButtonTriggered(Ending2Scene,StartScene);
});


GoInSceneButtonEnter.addEventListener("click", function(){
  GoInSceneButtonEnter.style.display = "none";
  GoInSceneButtonFightBack.style.display = "none";
  ButtonTriggered(GoInBasement,GoInScene);
});
GoInSceneButtonFightBack.addEventListener("click", function(){
  GoInSceneButtonEnter.style.display = "none";
  GoInSceneButtonFightBack.style.display = "none";
  ButtonTriggered(Ending1Scene,GoInScene);
});


GoInBasementButtonBed.addEventListener("click", function(){
  GoInBasementButtonBed.style.display = "none";
  GoInBasementButtonFightBack.style.display = "none";
  ButtonTriggered(TheBackrooms1,GoInBasement);
});
GoInBasementButtonFightBack.addEventListener("click", function(){
  GoInBasementButtonBed.style.display = "none";
  GoInBasementButtonFightBack.style.display = "none";
  ButtonTriggered(GoInBasementButtonFightBack,GoInBasement);
});

TheBackrooms1ButtonYes1.addEventListener("click", function(){
  TheBackrooms1ButtonYes1.style.display = "none";
  TheBackrooms1ButtonYes2.style.display = "none";
  ButtonTriggered(TheBackrooms1Bacteria,TheBackrooms1);
});
TheBackrooms1ButtonYes2.addEventListener("click", function(){
  TheBackrooms1ButtonYes2.style.display = "none";
  //TheBackrooms1.style.display = "flex"; // no choice lol
});

TheBackrooms1BacteriaButtonAsk.addEventListener("click", function(){
  TheBackrooms1BacteriaButtonAsk.style.display = "none";
  TheBackrooms1BacteriaButtonRunAway.style.display = "none";
  ButtonTriggered(Ending3Scene,TheBackrooms1Bacteria);
});

TheBackrooms1BacteriaButtonRunAway.addEventListener("click", function(){
  TheBackrooms1BacteriaButtonAsk.style.display = "none";
  TheBackrooms1BacteriaButtonRunAway.style.display = "none";
  ButtonTriggered(TheBackrooms1Pits,TheBackrooms1Bacteria);
});

TheBackrooms1PitsButtonContinue.addEventListener("click", function(){
  TheBackrooms1PitsButtonContinue.style.display = "none";
  ButtonTriggered(TheBackroom2PoolroomStartScene,TheBackrooms1Pits);
});

TheBackroom2PoolroomStartButtonContinue.addEventListener("click", function(){
  TheBackroom2PoolroomStartButtonContinue.style.display = "none";
  ButtonTriggered(EndingToBeContinuedScene,TheBackroom2PoolroomStartScene);
});

let topbar = document.querySelector("#Top-Bar");
let MainContent = document.querySelector("#Main-Content")

document.addEventListener("keypress", function(event){
  if (event.key == "p") {
    if (FastMode == false) {
      FastMode = true;
      topbar.style.backgroundImage = "url(Scenes-Backgrounds/HackBackground.gif)";
      MainContent.style.backgroundImage = "url(Scenes-Backgrounds/HackBackground.gif)";
    } else {
      FastMode = false;
      topbar.style.backgroundImage = "url()";
      MainContent.style.backgroundImage = "url(Backgrounds/Darkwall.jpg)";
    }
  }
});

















/* const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
  await sleep(1000)
  console.log("First")
  await sleep(1000)
  console.log("Second")
  await sleep(1000)
  console.log("Third")
}

repeatedGreetings()
*/

// https://lh3.googleusercontent.com/proxy/IvnqWCbRQQG9BArU29tP1xFmJICLCXZjqNpm124YK4ABiJwIh7vou2HhReM3x1gYFQ95HAUWvBieXlGyEtHiK5Hmf5cMO7vNWjmSVGY//
