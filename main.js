/*
let i = board.children.length, k , temp
while(--i > 0) { // on boucle tant que 1 est oté de i est toujours positif

k = Math.floor(Math.random() * (i+1)) // k stocke un nombre aléatoire basé sur i

temp = board.children[k] // temp pointe temporairement l'élément à la position k dans le board

board.children[k] = board.children[i] // remplace l'élément à la position k par l'élément à la position i

board.appendChild(temp) // place l'élément k pointé temporairement à la fin du contenu de board
}
*/

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

const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
//board.appendChild(box)
//box.innerText = 1;

for(let i = 1; i <= 10; i++) {
    let newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)

    newbox.addEventListener("click", function() {
        console.log("Boite N°"+ i +", click!")
        newbox.classList.add("box-clicked")
    })
}

// d. Prendre en charge les phases de jeu




