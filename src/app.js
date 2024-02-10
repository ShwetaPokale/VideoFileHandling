const express = require('express');
const downloadRoutes = require('./routes/downloadRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const statusRoutes = require('./routes/statusRoutes');

const app = express();

app.use(express.json());

app.use('/download', downloadRoutes);
app.use('/upload', uploadRoutes);
app.use('/status', statusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
