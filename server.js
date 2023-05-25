const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; 
// Here i have used app.use to Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// To Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
