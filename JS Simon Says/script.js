let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');
let btns = ["yellow", "green", "blue", "red"];

document.addEventListener("click", function() {
    if (!started) {
        console.log("Pressed!");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 1000);
}

function checkAns(){
    let ind=level-1;
    if(gameSeq[ind]===userSeq[ind]){
    if(gameSeq.length===userSeq.length){
        setTimeout(levelUp,1000);
    }
    }
    else{
        h3.innerText=`Game Over!Your score was ${level},Try AGAIN`;
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function levelUp() {
    level++;
    h3.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random() * 4); // Fixed random index
    let randCol = btns[randInd];
    let randBtn = document.querySelector(`#${randCol}`);
    // console.log(randInd);
    // console.log(randCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq)
    if (randBtn) { // Ensure the button exists
        gameFlash(randBtn);
    } else {
        console.error(`Button with id ${randCol} not found.`);
    }
    
}

function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns();
}

// Ensure this is using the correct class selector
let allBtns = document.querySelectorAll(".in"); 
for(allBtn of allBtns){
    allBtn.addEventListener("click",btnPress);
}