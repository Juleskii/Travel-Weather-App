const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static file from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// All other requests will be served in the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
