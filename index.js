const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const userRouter = require('./src/router/userRouter');

dotenv.config();

// 👉 config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 👉 test cloudinary connection
cloudinary.api.ping()
  .then(res => console.log("✅ Cloudinary OK:", res))
  .catch(err => console.error("❌ Cloudinary error:", err));

const app = express();
const PORT = process.env.PORT || 3000;

// 👉 connect mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 👉 routes
app.use('/users', userRouter);

// 👉 global error handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: "File too large, max 10MB" });
  }
  res.status(400).json({ message: err.message || "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
