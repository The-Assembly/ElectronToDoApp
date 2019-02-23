const {app, BrowserWindow} = require("electron");
const path = require('path');
const Window = require("./Window")

const ElectronReload = require('electron-reload')
ElectronReload(__dirname) 

function main(){
    let mainWindow = new Window({file:path.join("web", "index.html")});
}

app.on('ready', main);

app.on('window-all-closed', function () {
    app.quit()
})