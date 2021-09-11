const {app} = require('electron'),
      {BrowserWindow} = require('electron');

app.on('ready', () => {
  //Your main code will be here
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "src/favicon.ico"
  });
  //Load the content
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
