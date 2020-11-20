let x=true; let y=true
let ball=document.querySelector(".ball");
let stopball=false;
let board=document.querySelector(".board");
let boardBound=board.getBoundingClientRect();
let rightPaddle=document.querySelector(".right");
let leftPaddle=document.querySelector(".left");
let leftPlayerLives=3;
let rightPlayerLives=3;
//user input listen
document.addEventListener("keydown",function(e){
    if(e.key=="w"){
movePaddle(leftPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=="s"){
        movePaddle(leftPaddle,window.innerHeight*0.1);
    }
   else if(e.key=="ArrowUp"){
    movePaddle(rightPaddle,-window.innerHeight*0.1);
   }
   else if(e.key=="ArrowDown"){
    movePaddle(rightPaddle,window.innerHeight*0.1);
   }
   else if(e.key===32){
      stopball(true);
   }
})
function setColor(index){
    let allicons=document.querySelectorAll(".fa.fa-circle");
    allicons[index].style.color="red";
    }
    
function movePaddle(cPaddle,change){
    let cPaddleBound=cPaddle.getBoundingClientRect();
    if(cPaddleBound.top+change>=boardBound.top && cPaddleBound.bottom+change<=boardBound.bottom){
        cPaddle.style.top=cPaddleBound.top+change +"px"; 
}
}


function moveBall(){
let ballCord=ball.getBoundingClientRect();
let ballTop=ballCord.top;
let ballLeft=ballCord.left;
let ballBottom=ballCord.bottom;
let ballRight=ballCord.right;
//is ball in bound 
// handleVerticalBound

// check if collided with any player horizontal boundary
let hasTouchLeft=ballLeft<boardBound.left;
let hasTouchRight=ballRight>boardBound.right;

if(hasTouchLeft||hasTouchRight){
if(hasTouchLeft){
leftPlayerLives--;
setColor(leftPlayerLives);
if(leftPlayerLives==0){
    alert("Game Over Player B Won");
    document.location.reload();
}else{
    return resetGame();
}
}
else{
rightPlayerLives--;
setColor(3+rightPlayerLives);
if(rightPlayerLives==0){
    alert("Game Over Player A Won");
    document.location.reload();
}
else{
    return resetGame();
}
}
}
function  resetGame(){
    ball.style.top=window.innerHeight*0.45+"px";
    ball.style.left=window.innerHeight*0.45+"px";
    requestAnimationFrame(moveBall);
    
}

    

if(ballTop<=boardBound.top||ballBottom>=boardBound.bottom){
    //vertical outside
    y=!y;
}
//handleHorizontal bound
// handleVertical bound
//  if(ballLeft<=boardBound.left||ballRight>=boardBound.right){
//     horizontally outside
//      x=!x;
//  }
 
//.......collision between two paddle paddle.....
let leftPaddleBound=leftPaddle.getBoundingClientRect();
let rightPaddleBound=rightPaddle.getBoundingClientRect();

if(ballLeft<=leftPaddleBound.right && 
    ballRight>=leftPaddleBound.left&&
    ballTop+30>=leftPaddleBound.top&&
    ballBottom-30<=leftPaddleBound.bottom){
    x=!x;
}

if(ballLeft<=rightPaddleBound.right &&
     ballRight>=rightPaddleBound.left&&
     ballTop+30>=rightPaddleBound.top&&
     ballBottom-30<=rightPaddleBound.bottom){
    x=!x;
}



ball.style.top= y==true?ballTop+4 +"px":ballTop-4+"px";
ball.style.left= x==true?ballLeft+4 +"px":ballLeft-4 +"px";
requestAnimationFrame(moveBall);

}

requestAnimationFrame(moveBall);