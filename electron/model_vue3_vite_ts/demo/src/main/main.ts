// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, protocol } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.ts')
        }
    })
    console.log("__dirname", __dirname);
    console.log("print process.env.npm_lifecycle_event", process.env.npm_lifecycle_event);
    // and load the index.html of the app.
    if (process.env.npm_lifecycle_event === "electron:dev") {
        mainWindow.loadURL('http://localhost:3000')
        // Open the DevTools.
        mainWindow.webContents.openDevTools()

    } else {
        mainWindow.loadFile('dist/index.html')
    }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    // Register a custom protocol and intercept existing protocol requests.
    protocol.registerFileProtocol('atom', (request: { url: string; }, callback: (arg0: { path: any; }) => void) => {
        const url = request.url.substr(7)
        callback({ path: path.normalize(`${__dirname}/${url}`) })
    })
})

// const { app, protocol } = require('electron')
// const path = require('path')


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.