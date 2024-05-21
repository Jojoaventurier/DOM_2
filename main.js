/*
let i = board.children.length, k , temp
while(--i > 0) { // on boucle tant que 1 est oté de i est toujours positif

k = Math.floor(Math.random() * (i+1)) // k stocke un nombre aléatoire basé sur i

temp = board.children[k] // temp pointe temporairement l'élément à la position k dans le board

board.children[k] = board.children[i] // remplace l'élément à la position k par l'élément à la position i

board.appendChild(temp) // place l'élément k pointé temporairement à la fin du contenu de board
}
*/

function isNumber(value) {
    return !isNaN(parseInt(value)) && isFinite(value);
}

function shuffleChildren(parent) {
    let children = parent.children
    let i = children.length, k, temp
    while (--i > 0) {
        k = Math.floor(Math.random() * (i+1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

function showReaction(type, clickedBox) {
    clickedBox.classList.add(type)
    if(type !== "success"){
        setTimeout(function(){
            clickedBox.classList.remove(type)
        }, 800)
    } 
}

function resetGame() {
    document.querySelectorAll(".box").forEach(el => el.remove())
}
// alternative using vanilla Javascript : 
// while (boxes.length > 0) boxes[0].remove();

// version plus précise (qui permet de cibler les éléments enfants depuis un certain parent) :
/* function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
} */


const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")

let boxes = document.getElementsByClassName("box");


function startGame() {

    resetGame();
    let numberOfBoxes = 0;
    
    board.querySelectorAll(".box-clicked").forEach(function(validBox) {
        validBox.classList.remove(("box-clicked"))
    })
    
     numberOfBoxes = prompt("How many boxes?")
     //console.log(numberOfBoxes);
     console.log(board);

    if (numberOfBoxes != null && isNumber(numberOfBoxes) == true) { 
        
        let nb = 1;

        for(let i = 1; i <= numberOfBoxes; i++) {
            let newbox = box.cloneNode()
            newbox.innerText = i
            board.appendChild(newbox)
        
            newbox.addEventListener("click", function() {
        
                if (i == nb) {
                    newbox.classList.add("box-clicked")
                    // 1
                    if(nb == board.children.length) {
                        board.querySelectorAll(".box").forEach(function(box) {
                            showReaction("success", box)
                        })
                    }
                    nb++
                    shuffleChildren(board)
                }
                //2
                else if (i > nb){
                    showReaction("error", newbox)
                    nb = 1
                    board.querySelectorAll(".box-clicked").forEach(function(validBox) {
                        validBox.classList.remove(("box-clicked"))
                    })
                    shuffleChildren(board)
                }
                //3
                else {
                    showReaction("notice", newbox)
                }
            })
        }
    } else {
        nb = 1;
        startGame();
    }
}





 









