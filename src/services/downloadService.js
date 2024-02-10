const fs = require('fs');
const { google } = require('googleapis');
const credentials = require('../config/googleDriveCredentials.json');

async function downloadVideo(fileId, destPath) {
    const auth = new google.auth.OAuth2();
    auth.setCredentials(credentials);

    const drive = google.drive({ version: 'v3', auth });
    const destStream = fs.createWriteStream(destPath);

    const res = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });
    
    return new Promise((resolve, reject) => {
        res.data
            .on('end', () => resolve())
            .on('error', err => reject(err))
            .pipe(destStream);
    });
}

module.exports = { downloadVideo };
