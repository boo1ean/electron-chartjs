const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

const opts = JSON.parse(process.argv[2])
function createWindow () {
	win = new BrowserWindow({width: 800, height: 600})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// workaround cause I didn't find appropriate event :(
	setTimeout(() => {
		win.webContents.send('create chart', opts)
	}, 500)

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
