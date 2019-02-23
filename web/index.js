        const { ipcRenderer } = require('electron')
        document.getElementById('createTodoBtn').addEventListener('click', ()=> {
            ipcRenderer.send('add-todo-window')
        })

        ipcRenderer.on('todos', (event, todos) => {
            const todoList = document.getElementById('todoList')

            const todoItems = todos.reduce((html, todo) => {
                html += `<li class="todo-item">${todo}</li>`

                return html
            }, '')

            todoList.innerHTML = todoItems
        })