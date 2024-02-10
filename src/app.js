const express = require('express');
const downloadRoutes = require('./routes/downloadRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(express.json());

app.use('/download', downloadRoutes);
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
