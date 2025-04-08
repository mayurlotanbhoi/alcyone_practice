import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix "__dirname is not defined" error in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Correctly load your built React app
    const indexPath = path.join(__dirname, '../dist-react/index.html');

    if (process.env.NODE_ENV === "development") {
        // Load Vite dev server in dev mode
        mainWindow.loadURL('http://localhost:5173');
    } else {
        // Load built app in production mode
        mainWindow.loadFile(indexPath);
    }

    mainWindow.on('closed', () => (mainWindow = null));
});
