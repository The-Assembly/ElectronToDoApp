const {app, BrowserWindow, ipcMain} = require("electron");
const path = require('path');
const Window = require("./Window")
const DataStore = require("./DataStore")

const ElectronReload = require('electron-reload')
ElectronReload(__dirname) 

const todosData = new DataStore({name: 'Todos Main'})

function main(){
    // console.log(app.getPath('userData'));

     //todosData.addTodo('Step 1').addTodo('Step 2').addTodo('Step 3').deleteTodo('Step 3');

    // console.log(dataTest.todos);

    let mainWindow = new Window({file:path.join("web", "index.html")});

    mainWindow.once('show', () => {
        mainWindow.webContents.send('todos', todosData.todos)
    })
    let addTodoWin

    ipcMain.on('add-todo-window', () => {
        if (!addTodoWin)
        {
             addTodoWin = new Window({
                file:path.join('web','add.html'),
                width: 400,
                height: 400,
                parent: mainWindow
            })

            addTodoWin.on('closed', () => {
                addTodoWin = null
            })
        }
    })
    
    ipcMain.on('add-todo', (event, todo) => {
        const updatedTodos = todosData.addTodo(todo).todos
        
        mainWindow.send('todos', updatedTodos)
    })
}           

app.on('ready', main);

app.on('window-all-closed', function () {   
    app.quit()
})