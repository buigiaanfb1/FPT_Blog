const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const enforce = require('express-sslify');

const app = express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Define Route
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/admin', require('./routes/api/admin'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
