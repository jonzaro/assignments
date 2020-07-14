



// const form = document.addItem

const sumFunc = (a, b) => sum1 + sum2; 
let result = a + b; 
return result

// const sub = form.title.value
const subFunc = (a, b) => a - b;

// const product = form.title.value
const multFunc = (a, b) => a * b;

add.addEventListener("submit", function(event){
    event.preventDefault();
    sumFunc();
    const sumDiv = document.createElement('div');
    document.getElementById("sumContainer").append(sumDiv);
    sumDiv.textContent = result;
    const sum1 = add.sumNum1.value
    const sum2 = add.sumNum2.value
    

})

sub.addEventListener("submit", function(event){
    event.preventDefault();
    subFunc();
    const subDiv = document.createElement('div');
    document.getElementById("subContainer").append(subDiv);
    subDiv.textContent = "I'm the subtract divvvvv!";
})

mult.addEventListener("submit", function(event){
    event.preventDefault();
    multFunc();
    const multDiv = document.createElement('div');
    document.getElementById("multContainer").append(multDiv);
    multDiv.textContent = "I'm the multiplication divv woohoo!";
})