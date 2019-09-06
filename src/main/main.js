import { app, BrowserWindow } from 'electron';
import { format as formatUrl } from 'url';
import * as path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow = null;

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: { nodeIntegration: true },
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }));
  }

  window.on('closed', () => mainWindow = null);

  window.webContents.on('devtools-opened', function () {
    window.focus();
    setImmediate(() => window.focus());
  });

  return window;
}

app.on('activate', function () {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => mainWindow = createMainWindow());

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
