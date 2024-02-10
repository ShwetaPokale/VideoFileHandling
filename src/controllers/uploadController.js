const { uploadVideo } = require('../services/googleDriveService');

async function uploadController(req, res) {
    try {
        const { filePath, folderId } = req.body;
        if (!filePath || !folderId) {
            return res.status(400).send('Missing required parameters');
        }
        await uploadVideo(filePath, folderId);
        res.status(200).send('Upload completed successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to upload video');
    }
}

module.exports = { uploadController };
