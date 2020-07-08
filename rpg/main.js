const readline = require('readline-sync')
let isAlive = true;
const name = readline.question('What is your name? ')
class Hero{
    constructor(name, hp, ap, inventory){
        this.name = name
        this.hp = hp
        this.ap = ap
        this.inventory = inventory
    }
}
const player = new Hero(name, 100, 50)
class Enemy {
    constructor(name, hp, ap){
        this.name = name;
        this.hp = hp;
        this.ap = ap;
    }
}
const darthSideous = new Enemy("Darth Sideous", 50, 50)
const darthVader = new Enemy("Darth Vader", 75, 50)
const darthMaul = new Enemy("Darth Maul", 50, 25)
const enemies = [darthMaul, darthSideous, darthVader]
while(isAlive){
    const action = readline.keyIn('Would you like to [w] Walk, [p] Print Inventory, or [q] Quit?', {limit: 'wqp'})
    
    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        printInventory()
    }else if(action === 'q'){
       isAlive = false
       console.log('You quit the game') 
    }
}
function walk(){
    const random = Math.floor(Math.random()*4)
    if(random === 0){
        enemyEncounter()
    }else{
        console.log('You walk safely')
    }
}
function printInventory(){
    console.log(player.inventory)
}
function enemyEncounter(){
    const randomEnemy = Math.floor(Math.random() * enemies.length)
    const randomNum = Math.floor(Math.random() *4)
    const enemy = enemies[randomEnemy]
    console.log(enemy.name + " has appeared!")
    const fightOrRun = readline.keyIn('Would you like to [f] Fight or [r] Run?', {limit: 'fr'})
    if (fightOrRun === "f"){
        fight()
    } else if (fightOrRun === "r"){
        run()
    }

function fight(){
    // for (let i = 0; i > player.hp; i++){
        if (player.hp > 0 && randomNum === 0 || randomNum === 1){
            player.hp - enemy.ap
            console.log("You Have Been Hit! Your HP is now " + player.hp)
        } else if (player.hp > 0){
            console.log("The Enemy Missed, You HP is " + player.hp)
        } else if (player.hp <= 0){
            isAlive = false
            console.log("The Enemy Has Killed You!")
        }
    }
// }

function run(){
    if(randomNum === 0 || randomNum === 1){
    console.log("You were caught, and killed")
    isAlive = false
    }else if (randomNum === 2 || randomNum === 3)
        console.log('You Escaped!')
    }
}


// conditions are always true or false
// if condition is true, code in the scope will run
// if condition is false, code will not run
// while(condition){
// }
// truthy
// everything else
// falsey
// false
// ''
// 0
// NaN
// null
// undefined
// if(''){
//     console.log('truthy')
// }else{
//     console.log('falsey')
// }
// for(let i = 0; condition; i++){
// }
//Function
// function speak(parameters){
//  return
// }
// speak(arguments)
//Method
// const person = {
//     name: 'joe',
//     speak: function(){
//         console.log('hello')
//     }
// }
// console.log(person.name)
// person.speak()