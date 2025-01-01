const mongoose = require('mongoose');

const uri = 'mongodb+srv://david:fv4005@mysite.s3mz0.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
