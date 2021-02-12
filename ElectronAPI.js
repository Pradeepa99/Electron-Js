const electron = require('electron')

const { BrowserWindow } = require('electron')
const win = new BrowserWindow()

// In the Main process

const { ipcMain } = require('electron')

ipcMain.handle('perform-action', (event, ...args) => {
  // ... do actions on behalf of the Renderer
})

// In the Renderer process

const { ipcRenderer } = require('electron')

ipcRenderer.invoke('perform-action', ...args)
