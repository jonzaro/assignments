//Write a function that takes an array of numbers and returns the largest
// const numbers = [3, 5, 2, 8, 1]

// function largest(){
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] > numbers[0]){
//             let highNum = numbers[i]
//             return highNum
//         }
//     }
// }

// largest(numbers)
// console.log(highNum)


//Write a function that takes an array of words and a character and returns each word that has that character present.
let results = []
function lettersWithStrings(){
    for (let i = 0; i < Array.length; i++){
        if (Array[i] == "!"){
        results.push(Array[i])
        }
    }
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

console.log(results)