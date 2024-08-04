const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
} else {
  // In development, we'll just send a simple message
  app.get('/', (req, res) => {
    res.send('This is the development server. Please use the Vite development server to view your React app.');
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
