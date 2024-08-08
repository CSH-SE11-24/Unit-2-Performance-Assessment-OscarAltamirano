const prompt = require('prompt-sync')()

console.log("Welcome to the street fighting ")


let user = prompt("Enter your name rookie: ")
console.log("Welcome to street fight " + user + " you will have to choose a player")

let character = ["Ken", "Ryu", "Juri", "Bison II"]
console.log(character)

let characterData = prompt("Do you want to see the character data? (yes/no):")


if(characterData === "yes"){
  console.log("Okay here is the data of the characters ")
  
  characterData = {
    "Ken": {health: 100, attack: 15, defend: 0},
    "Ryu": {health: 100, attack: 10, defend: 4},
    "Juri": {health: 100, attack: 7, defend: 0},
    "Bison II": {health: 100, attack: 8, defend: 0}

  }
  console.log(characterData)

}else if(characterData !== "yes"){
    console.log("Okay, Choose your player ")
  console.log(character)
}  


let characters  = prompt("Who will you choose? ")
console.log("You pick " + characters)



let choice = prompt("Do you want to proceed? (yes/no): ")

if(choice === "yes"){
  console.log("Great! Let's contunue.")

  let match = prompt("And Now let the match begin! ")
console.log(match)
return

  
}else if(choice === "no"){
    console.log("If no, then choose someone else. ")
}  
  
let choices = prompt("Are you sure you want to change your player? (yes/no): ")

if(choices === "yes"){
  console.log("Okay! Then choose someone else. ")

}else{
    console.log("If not, Then let the match begin! ")
return
}  

let players = prompt("Want to see the characters again? (yes/no): ")

if(players === "yes"){
console.log("Okay here are the characters" )
  console.log(character)
  
}else if(players === "no"){
  console.log("Okay, Rookie!")
}

let player = prompt("Who will you choose? ")
console.log("Alright Rookie you pick " + player) 


let matchs = prompt("Now let the match begin!")
console.log(matchs)
  return











