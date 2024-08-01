let boxs = document.querySelectorAll(".btn");
let msg = document.querySelector("#name");
let turn = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]



boxs.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if(turn) {
            box.innerHTML= "O";
            turn = false;
        }
        else {
            box.innerText="X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1===pos2 && pos2===pos3) {
                msg.innerText = `Winner is ${pos1}`;
                msg.computedStyleMap.colour = "yellow";
            }
        }
    }
}