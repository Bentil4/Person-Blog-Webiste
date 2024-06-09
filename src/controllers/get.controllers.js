const Articles = require('../models/articles.model.js');

// Get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const article = await Articles.find();
    if (!article) {
      return res.status(404).json({ messsage: 'Articles not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get article by id
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findById(id);
    if (!article) {
      return res.status(404).json({ messsage: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//   Get Article by name
exports.articleByName = async (req, res) => {
  try {
    const { name } = req.params;
    // const trimmedName = name.trim();
    // const article = await Articles.find({ title: trimmedName });
    const article = await Articles.find({ title: name });
    if (article.length === 0 || !article) {
      return res.status(404).json({ messsage: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
