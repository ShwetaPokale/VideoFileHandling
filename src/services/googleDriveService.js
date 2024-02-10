const fs = require('fs');
const { google } = require('googleapis');
const credentials = require('../config/googleDriveCredentials.json');

async function uploadVideo(filePath, folderId) {
    const auth = new google.auth.OAuth2();
    auth.setCredentials(credentials);

    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
        name: 'video.mp4',
        parents: [folderId]
    };

    const media = {
        mimeType: 'video/mp4',
        body: fs.createReadStream(filePath)
    };

    const res = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
    });

    console.log('File Id:', res.data.id);
}

module.exports = { uploadVideo };
