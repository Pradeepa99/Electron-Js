JumpList
Set User Tasks

const { app } = require('electron')
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])


Clear User Tasks

const { app } = require('electron')
app.setUserTasks([])
