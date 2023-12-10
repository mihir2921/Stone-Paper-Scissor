let humanScore = document.querySelector(".human_score")
let compScore = document.querySelector(".comp_score")
const result = document.querySelector(".result")
const choices= document.querySelectorAll(".choice")
const reset = document.querySelector(".reset")

const winnerCombination={
    1:3,
    2:1,
    3:2
}
let huScore = 0
let cpScore = 0
let computerChoices= ()=> 
{
    return Math.floor(Math.random()*3+1)
}

choices.forEach((choice)=>{
        choice.addEventListener("click", ()=>{

            let userChoice = choice.getAttribute("id")
            console.log(userChoice)
            let computerChoice = computerChoices()
            console.log(computerChoice)
            if(userChoice==computerChoice){
                result.innerText="Its a DRAW"
                result.classList.remove("loss")
                result.classList.remove("won")
            }
            else{
                if(userChoice == winnerCombination[computerChoice]){
                    result.innerText="Player Won"
                    result.classList.remove("loss")
                    result.classList.add("won")
                    huScore+=1;
                    humanScore.innerText=huScore

                }
                else{
                    result.innerText="Computer Won"
                    result.classList.add("loss")
                    result.classList.remove("won")
                    cpScore+=1
                    compScore.innerText=cpScore
                }

        }
})})

reset.addEventListener("click", ()=>{
    humanScore=0
    compScore=0
    humanScore.innerText=0;
    compScore.innerText=0;
    result.classList.remove("loss")
    result.classList.remove("won")
    result.innerText="Pick your Move"
})
