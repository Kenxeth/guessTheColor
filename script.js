const red = Math.floor(Math.random() * 257)
const green = Math.floor(Math.random() * 257)
const blue = Math.floor(Math.random() * 257)
const allBoxes = document.querySelectorAll(".rect")
let counter = 0;

const chooseColor = () => {
    document.getElementById("ChosenColor").innerHTML = `RGB(${red},${green}, ${blue})`
}

chooseColor()

const chooseBox = () => {
    const randomBox = Math.floor(Math.random() * allBoxes.length);
    allBoxes[randomBox].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    return randomBox
}
chooseBox()

const changeColor = (box) =>{
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

const randomColorforBoxes = () => {
    const randomBox = chooseBox()

    for(let i = 0; i < allBoxes.length;i++){
        allBoxes[i] != allBoxes[randomBox] ? changeColor(allBoxes[i]) : null;   
    }
}

randomColorforBoxes()


const checkWon = (box) => {
    console.log(box.style.backgroundColor);
    if(box.style.backgroundColor === `rgb(${red}, ${green}, ${blue})`){
        document.querySelector("#outcome").innerHTML = "You won"
        setTimeout(function(){
        location.reload()
        }, 1000)
    }else{
        document.querySelector("#outcome").innerHTML = "You lose"
        setTimeout(function(){
        location.reload()
        }, 1000)
    }
}

for(const boxes of allBoxes){
    boxes.addEventListener("click", function() {checkWon(boxes)})
}



