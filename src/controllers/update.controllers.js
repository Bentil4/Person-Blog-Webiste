const Article = require('../models/articles.model.js');

exports.updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateArticle = await Article.findByIdAndUpdate(id, req.body);
    if (!updateArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    const updatedArticle = await Article.findById(id);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
