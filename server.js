const express = require('express');
const app = express();
const port = 4000;

// Define a route handler for the default home page
app.get('/', (req, res) => {

 

  res.send('Hello nandhu!');
 
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
