const { app } = require('electron');
const { createLoginWindow } = require('./core/lib');

app.whenReady().then(() => {
    createLoginWindow();
});