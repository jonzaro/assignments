const readline = require('readline-sync')
console.log("Welcome to javascript Mario World!")

let gameActive = true

class Player {
    constructor (name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    theStatus = ["powerUp", "big", "small", "dead"]

    setName (name) {
        this.name = name;
    }
    gotHit () {
        for(let i = 0; i > this.theStatus.length; i++){
            status[2] = status[3];
        } if(status === "dead"){
            let gameActive = false;
        }
    }
    
    getPowerup() {
        for(let i = 0; i > this.theStatus.length; i++){
            status = status[i] +1;
        }
    }
    
    addCoin() {
        this.totalCoins = this.totalCoins+1;
    }
    print () {
        console.log(this)
    }
}

const player = new Player ("Mario", 0, 2, false)




const random = Math.floor(Math.random()*3)
    if(random === 0){
        player.gotHit()
    } if(random === 1){
        player.getPowerup()
    } if(random === 2){
        player.addCoin()
    }
    



