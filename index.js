var electronMenubar = require('menubar');

var mb = electronMenubar({
  index: `file://${__dirname}/src/electron/index.html`
});

mb.on('ready', () => {
  console.log('electron app is ready');
});

mb.on('after-create-window', () => {
  mb.window.openDevTools();
});
