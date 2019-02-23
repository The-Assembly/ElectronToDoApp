console.log("From main.js...");

const {app, BrowserWindow} = require("electron");
const path = require('path');

function main(){
    let mainWindow = new BrowserWindow({
        width: 1000, height: 1000
    });
    mainWindow.loadFile(path.join("web", "index.html"));
}

app.on('ready', main);