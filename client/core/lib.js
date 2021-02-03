const { BrowserWindow, Menu } = require('electron');

module.exports = {
    createLoginWindow() {
        Menu.setApplicationMenu(null);
        const win = new BrowserWindow({
            width: 450,
            height: 350,
            minimizable: false,
            maximizable: false,
            closable: false,
            fullscreen: false,
            frame: false,
            transparent: true,
            webPreferences: {
              nodeIntegration: true
            },
            resizable: false,
        });
        win.loadURL('http://localhost:8080/login.html');        
    },
    createRegisterWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webContents: {
                devTools: true,
            },            
            webPreferences: {
              nodeIntegration: true
            }
        });
        win.loadFile('../page/register.html');      
        win.webContents.openDevTools();   
    },
    createMainWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
              nodeIntegration: true
            }
        });
        win.loadFile('../page/main.html');      
    }        
};