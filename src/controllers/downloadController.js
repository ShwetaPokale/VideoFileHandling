const { downloadVideo } = require('../services/downloadService');

async function downloadController(req, res) {
    try {
        const { fileId, destPath } = req.body;
        if (!fileId || !destPath) {
            return res.status(400).send('Missing required parameters');
        }
        await downloadVideo(fileId, destPath);
        res.status(200).send('Download completed successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to download video');
    }
}

module.exports = { downloadController };
