import { question } from "readline-sync"
​
let numPlayers = 2
​
interface Skill {
    name: string
    numUses: number
    damage: number
    type: string
}

interface Effect{
    ATKmove: string
    points: number
}
​
interface Pokemon {
    name: string
    hp: number
    lvl: number
    skills: Skill[]
    effect: Effect[]
    speed: number
    ATK: number
    DEF: number
}

let pokemon1: Pokemon = {
    name: "Charmander",
    hp: 100,
    lvl: 50,
    skills: [
        {
            name: "Tackle",
            numUses: 25,
            damage: 20,
            type: "normal", 
        }, 
        {
            name: "Ember",
            numUses: 15,
            damage: 40,
            type: "fire"
        }, 
    ],
    speed: 40,
    ATK: 30,
    DEF: 20
}
​
let pokemon2: Pokemon = {
    name: "Bulbasaur",
    hp: 120,
    lvl: 45,
    skills: [
        {
            name: "Tackle",
            numUses: 25,
            damage: 20,
            type: "normal"
        }, 
        {
            name: "Tail Whip",
            numUses: 10,
            damage: 50,
            type: "grass"
        }, 
    ],
    speed: 30,
    ATK: 15,
    DEF: 8
}
​
const displaySkills = (pokemon) => {
    for (let i = 0; i < pokemon.skills.length; i++) {
        const skill = pokemon.skills[i];
        const num = i + 1
        console.log(`${num}. ${skill.name}, ${skill.type}, Uses: ${skill.numUses}, Damage: ${skill.damage}`)
      } 
}
​
const performSkill = (current: Pokemon, target: Pokemon): void => {
    console.log("--------------------------------------")
​
    const userInput = question("Please select an attack (only the number)");
    const selectedSkillIdx = parseInt(userInput) - 1
    const skill = current.skills[selectedSkillIdx]

    target.hp -= skill.damage
​    if (skill.name = "Tackle"){
       skill.damage = current.ATK
    } else {
       skill.damage = target.DEF 
    }
    if (skill.name = "Tail Whip"){
       skill.damage =  target.ATK - 5
    } 
    
    if (skill.name = "Ember"){
        skill.damage -= current.DEF + 3
     } 

    console.log(`${current.name} used ${skill.name}`)
    console.log(`${target.name} HP reduced by ${skill.damage}, ${target.hp} HP remaining`)
}
​
let isPlayer1Turn: boolean = true
​
console.log("Player 2 sends out " + pokemon2.name)
console.log("HP: " + pokemon2.hp)
console.log("Lvl: " + pokemon2.lvl)
console.log("")
​
console.log("Player 1 sends out " + pokemon1.name)
console.log("HP: " + pokemon1.hp)
console.log("Lvl: " + pokemon1.lvl)
console.log("")
​
if (pokemon1.speed > pokemon2.speed) {
    isPlayer1Turn = true
    console.log(pokemon1.name + " goes first!")
} else {
    isPlayer1Turn = false
    console.log(pokemon2.name + " goes first!")
}
​
while(pokemon2.hp > 0 && pokemon1.hp > 0) {
    if (isPlayer1Turn === true) {
        displaySkills(pokemon1)
        performSkill(pokemon1, pokemon2)
    }  else {
        displaySkills(pokemon2)
        performSkill(pokemon2, pokemon1)
    }
    
    if (pokemon2.hp <= 0 ) {
        console.log(`GAME OVER, ${pokemon1.name} won`)
    } else if (pokemon1.hp <= 0) {
        console.log(`GAME OVER, ${pokemon2.name} won`)
    } else {
        isPlayer1Turn = !isPlayer1Turn
        // how do we start the next player's turn
    }
}