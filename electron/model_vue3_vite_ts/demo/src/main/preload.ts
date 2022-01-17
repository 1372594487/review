const { contextBridge, ipcRenderer } = require('electron')
// Communicate asynchronously from a renderer process to the main process.
// Create a safe, bi-directional, synchronous bridge across isolated contexts
contextBridge.exposeInMainWorld('ipc', {
    ipcRenderer
})