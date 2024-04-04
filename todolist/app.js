var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')
form.addEventListener('submit', function (e) {
    event.preventDefault()
    let val = input.value.trim()
    if (val) {
        addTodoElement({ text: val, }
        )
        saveTodoList()
    }
    console.log('ok')
})

function addTodoElement(todo) {
    // {
    // Text
    // status
    // }
    // <li>
    //     <span>Test</span>
    //     <i class="far fa-trash-alt"></i>
    // </li>   
    var li = document.createElement('li')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="far fa-trash-alt"></i>
    `
    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }
    li.addEventListener('click', function () {
        // console.log(this)
        // this.setAttribute('class', 'completed')
        this.classList.toggle('completed')
        saveTodoList()
    })

    li.querySelector('i').addEventListener('click', function () {
        // console.log(this.parentElement)
        this.parentElement.remove()
        saveTodoList()
    })
    todos.append(li)
}
function saveTodoList() {
    let todoList = document.querySelectorAll('li')
    let todoStorage = []
    todoList.forEach(
        function (item) {
            let text = item.querySelector('span').innerText
            let status = item.getAttribute('class')
            console.log(status)
            todoStorage.push({
                text,
                status
            })
        }
    )
    localStorage.setItem('todoList', JSON.stringify(todoStorage))
    // console.log(JSON.parse(localStorage.getItem('todoList')))
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function (item) {
        addTodoElement(item)
    })
}
init() 