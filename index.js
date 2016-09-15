var electronMenubar = require('menubar');

var mb = electronMenubar({
  index: `file://${__dirname}/src/index-electron.html`
});

mb.on('ready', () => {
  console.log('electron app is ready');
});

mb.on('after-create-window', () => {
  // mb.window.openDevTools();
});
