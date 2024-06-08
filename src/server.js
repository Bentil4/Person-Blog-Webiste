const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles.routes.js');
const app = express();

// Middleware
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/blogwebsite')
  .then(() => {
    console.log('Connected sucessfully');
  })
  .catch((error) => {
    console.log('connection failed', error);
  });

app.use('/api', articleRouter);

app.listen(5000, () => {
  console.log('running to port 5000');
});
