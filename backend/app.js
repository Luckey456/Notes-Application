const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notesRoutes');

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// Serve static files from the "frontend/build" directory
app.use(express.static('frontend/build'));

app.use(express.json());
app.use('/api/notes', notesRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;