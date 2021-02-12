Adding the recent document

const { app } = require('electron')
app.addRecentDocument('/Users/USERNAME/Desktop/work.type')

Clearing the recent document

const { app } = require('electron')
app.clearRecentDocuments()

Adding the recent document to the application menu
{
  "submenu":[
    {
      "label":"Open Recent",
      "role":"recentdocuments",
      "submenu":[
        {
          "label":"Clear Recent",
          "role":"clearrecentdocuments"
        }
      ]
    }
  ]
}
