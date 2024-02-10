Project Name: VideoFileHandling
Project Description:                                                                                                                                                                                                                                                                                                                                                                                                                                            
This project is a Node.js application designed to interface with the Google Drive API for 
handling video files. It provides functionalities for downloading large video files from a 
specific Google Drive directory, uploading video files to another Google Drive directory, 
and monitoring the status of these processes.

The application is built using Node.js, with Express.js framework for handling API endpoints. 
It utilizes the Google Drive API for interacting with Google Drive, enabling efficient and 
resilient handling of large video files. The chunked uploading mechanism is implemented to 
facilitate smooth uploads for large files, while comprehensive error handling ensures robustness 
in handling various scenarios such as failed downloads, uploads, or API-related issues.

The project structure is organized into controllers, services, routes, and configuration directories, 
promoting code modularity, cleanliness, and ease of maintenance.

This project serves as a demonstration of backend development proficiency with Node.js, 
expertise in interacting with external APIs, particularly the Google Drive API, and adherence 
to best practices in code structuring, error handling, and documentation.                                                                                                                                                                                                                                                                                                                               


Running the Project
To run the project locally, follow these steps:
1. Prerequisites
Node.js - JavaScript runtime environment
npm - Node.js package manager

2. Clone the Repository
Clone the project repository to your local machine using Git:
git clone https://github.com/ShwetaPokale/VideoFileHandling.git

3. Install Dependencies
npm install

4. Configure OAuth 2.0 Credentials
    1. Obtain OAuth 2.0 credentials from the Google Developers Console.
    2. Edit a googleDriveCredentials.json file in the config directory of project.
    3. Add your credentials to the googleDriveCredentials.json file
    4. Replace YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URI, and YOUR_REFRESH_TOKEN with your actual credentials obtained from the Google Developers Console.

5. Prepare Test Video File:
Make sure you have a test video file available for testing purposes. Name it test_video.mp4.

6. Start the server by running the following command:
node src/app.js
By default, the server will run on port 3000. You can access it at http://localhost:3000.

7. Test the Endpoints:
You can use tools like Postman or cURL to test the endpoints. Make requests to the appropriate 
endpoints for downloading and uploading video files, providing the necessary parameters (fileId, destPath, filePath, folderId).

Run Tests:
1. Run Mocha Tests:
Execute the following command in your terminal to run the Mocha tests:
    - npx mocha
Mocha will execute the test file test.js and display the test results in the terminal.

Verify Test Results:

2. Ensure that all tests pass successfully.
If any test fails, review the error messages to identify the cause of the failure and make 
necessary corrections.