let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerY

const winpatterns = [  //2D ARRAY
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turnO){    //if turnO is true player O ka turn ka hai
            box.innerText = "O";
            turnO = false;
        }else{   //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;      // button ko disabled kar diya value dalne ka baad 
        
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enabledbox();

}

const disabledbox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledbox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
        msg.innerText = `Conglatulations Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disabledbox();
};


const checkWinner = () => {
    for(let pattern of winpatterns) { 
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if( pos1Val === pos2Val && pos2Val === pos3Val ){
            showWinner(pos1Val);
        } 
    }
  }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click",resetGame);