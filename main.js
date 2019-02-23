const {app, BrowserWindow, ipcMain} = require("electron");
const path = require('path');
const Window = require("./Window")

const ElectronReload = require('electron-reload')
ElectronReload(__dirname) 

function main(){
    let mainWindow = new Window({file:path.join("web", "index.html")});

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
}           

app.on('ready', main);

app.on('window-all-closed', function () {
    app.quit()
})