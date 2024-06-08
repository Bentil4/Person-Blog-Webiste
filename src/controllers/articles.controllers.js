const express = require('express');
const Articles = require('../models/articles.model.js');

exports.postArticle = async (req, res) => {
  try {
    const article = Articles.create(req.body);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
