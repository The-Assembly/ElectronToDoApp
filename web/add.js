const {ipcRenderer} =require('electron')
document.getElementById('todoForm').addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const input = evt.target[0]

    ipcRenderer.send('add-todo', input.value)

    input.value = ''
})