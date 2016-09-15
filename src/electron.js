var electronMenubar = require('menubar');

var mb = electronMenubar({
  dir: __dirname,
});

mb.on('ready', () => {
  console.log('electron app is ready');
});

mb.on('after-create-window', () => {
  mb.window.openDevTools();
});
