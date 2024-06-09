const express = require('express');
const router = express.Router();
const postController = require('../controllers/articles.controllers');

router.post('/post-article', postController.postArticle);

module.exports = router;
