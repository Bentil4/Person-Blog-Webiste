const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controllers');
const getController = require('../controllers/get.controllers.js');
const updateController = require('../controllers/update.controller.js');
const deleteController = require('../controllers/delete.controller.js');

// Post articles routes
router.post('/post-article', postController.postArticle);

// Get all articles routes
router.get('/articles', getController.getAllArticles);

// Get article by Id
router.get('/article/:id', getController.getArticleById);

// Get article by Id
router.get('/article/title/:name', getController.articleByName);

// Update article by Id
router.put('/article/update/:id', updateController.updateById);

// Delete article by Id
router.delete('/article/delete/:id', deleteController.deleteById);

module.exports = router;
