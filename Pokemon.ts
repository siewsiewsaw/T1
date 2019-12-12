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
​
interface Pokemon {
    name: string
    hp: number
    lvl: number
    skills: Skill[]
    speed: number
}
​
let pokemon1: Pokemon = {
    name: "Charmander",
    hp: 100,
    lvl: 50,
    skills: [
        {
            name: "Tackle",
            numUses: 25,
            damage: 20,
            type: "normal"
        }, 
        {
            name: "Ember",
            numUses: 15,
            damage: 40,
            type: "fire"
        }, 
    ],
    speed: 40
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
            name: "Vine Whip",
            numUses: 10,
            damage: 50,
            type: "grass"
        }, 
    ],
    speed: 30
}
​
​
// what variable u use to keep track of the current player
// pokemon1Atks : number = 0
// pokemon2Atks : number = 0
​
// activePokemon: string = "Charmander"
// activePokemon: Pokemon = pokemon1
​
const displaySkills = (pokemon) => {
    for (let i = 0; i < pokemon.skills.length; i++) {
        const skill = pokemon.skills[i];
        const num = i + 1
        // console.log(num + ". " + skill.name + ", " + skill.type + ", Uses: " + skill.numUses + ", Damage: " + skill.damage )
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
​
    target.hp -= skill.damage
​
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
// when does the game end
// when 1 pokemon has less than or equal
// if both pokemon have more than 0 hp, continue
// if pokemon 1 has 0 hp, end
// if pokemon 2 has 0 hp, end
// if both pokemon have 0 hp, end
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