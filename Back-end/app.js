const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const uploadRoutes = require('./routes/upload.routes');

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

module.exports = app;