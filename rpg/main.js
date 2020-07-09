const readline = require('readline-sync')
console.log("You are in the land of villainous wizards, your goal is to walk through the dark forrest, vanquishing enemies as they arise to get treasure and escape with your life!")
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
const player = new Hero(name, 100, 50, "Amulet of Stealth")

class Enemy {
    constructor(name, hp, ap, inventory){
        this.name = name;
        this.hp = hp;
        this.ap = ap;
        this.inventory = inventory;
    }
}
const saruman = new Enemy("Saruman", 100, 50, "Ring of Invisibility")
const lordVoldemort = new Enemy("Lord Voldemort", 100, 50, "Elder Wand")
const jafar = new Enemy("Jafar", 100, 50, "Magic Lamp")
const enemies = [saruman, lordVoldemort, jafar]
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
        console.log("You haven't been discovered yet!")
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
    if (player.hp > 0 && randomNum === 0 || randomNum === 1){
        takeDamage()
    } else if (player.hp > 0 && randomNum === 2 || randomNum === 3){
        console.log("The enemy missed you! Quick cast a spell at " + enemy.name)
        dealDamage()
    }
}
function takeDamage(){
    if (player.hp > 0){
        player.hp = player.hp - enemy.ap
        console.log("You Have Been Hit! Your HP is now " + player.hp)
        fight(enemy)
    } else if (player.hp <= 0){
        console.log(enemy.name + " has killed you with a magical spell!")
        isAlive = false
    }
}

function dealDamage(){
    if (enemy.hp > 0){
        enemy.hp = enemy.hp - player.ap
        console.log("ABRA KADABRA! Your spell hit " + enemy.name + "! " + enemy.name + " now has " + enemy.hp + " HP") 
        fight(enemy)
    } else if (enemy.hp <= 1){
            console.log("ALAKAZAM, your spell killed " + enemy.name)
            // player.inventory.shift(enemy.inventory)
            console.log("You picked up " + enemy.inventory + "from " + enemy.name + "'s body.")
        for (let i = 0; i < randomEnemy.length; i++){
            if (randomEnemy[i].name === enemy.name){
                randomEnemy.splice(randomEnemy.i.name, 1)
            }
        }
    }
}
function run(){
    if(randomNum === 0 || randomNum === 1){
    console.log("You were caught, and killed")
    isAlive = false
    }else if (randomNum === 2 || randomNum === 3)
        console.log('You Escaped!')
    }
}
