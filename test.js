const { expect } = require('chai');
const { downloadVideo } = require('./src/services/downloadService');
const { uploadVideo } = require('./src/services/googleDriveService');

describe('Video File Handling', function() {
    describe('Download Video', function() {
        it('should download a video file from Google Drive', async function() {
            const fileId = 'YOUR_FILE_ID'; // Add valid file ID from Google Drive
            const destPath = 'test_video.mp4'; // ADD valid destination path
            try {
                await downloadVideo(fileId, destPath);
            } catch (error) {
                throw new Error('Download failed');
            }
        });
    });

    describe('Upload Video', function() {
        it('should upload a video file to Google Drive', async function() {
            const filePath = 'test_video.mp4'; // Add valid file path
            const folderId = 'YOUR_FOLDER_ID'; // Addvalid folder ID in Google Drive
            try {
                await uploadVideo(filePath, folderId);
            } catch (error) {
                throw new Error('Upload failed');
            }
        });
    });
});
