
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

// make form for new todo in html

function createTodo(title = "", description = "", price = "", imgUrl =""){
    return axios.post("https://api.vschool.io/jonzaro/todo", {title: title, description: description, title: title, price: price, imgUrl: imgUrl})
}

function deleteTodo(){

}

function unrenderTodo(){
//may not use
}

compile()


document.todo.addEventListener("submit", function(event){
    event.preventDefault()
    createTodo(event.target.title.value, /*add other values */ )
    .then(response => compile())
})