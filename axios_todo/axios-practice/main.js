
// const document = document.getElementById("body")


function getTodos(){
     return axios.get("https://api.vschool.io/jonzaro/todo")
        .then(response => {return response.data})
        .catch(error => console.log(error))
}

function renderTodo(data){
    const h1 = document.createElement('h1')
    h1.textContent = data.title
    document.body.appendChild(h1)
    const h3 = document.createElement('h3')
    h3.textContent = "Destination - " + data.description
    document.body.appendChild(h3)
    const h32 = document.createElement('h3')
    h32.textContent = "Price - $" + data.price
    document.body.appendChild(h32)
    return data
//add delete button (event listener?)
}

function compile(){
    getTodos().then(todos => {
        for (let i = 0; i < todos.length; i++){
            renderTodo(todos[i])
        }
    })
    
}

function createTodo(title = "", description = "", price = "", imgUrl =""){
    return axios.post("https://api.vschool.io/jonzaro/todo", {title: title, description: description, price: price, imgUrl: imgUrl})
}

function deleteTodo(){
    for (let)
    //how can i generate a button to delete a todo that was just added.  wouldn't my delete event listener need to
    //be coded before? So how can the delete button be preset to delete something which hasn't been created yet?
    // when a new todo is added, maybe spawn a delete button under it that is specific somehow to that entry?
}

function unrenderTodo(){
//may not use
}

compile()


document.todo.addEventListener("submit", function(event){
    event.preventDefault()
    createTodo(event.target.title.value, event.target.description.value, event.target.price.value)
    .then(response => compile())
})