const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;
function createWindow() {
    win = new BrowserWindow({
        icon: path.join(__dirname, 'assets/icons/appIcon.png')
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})