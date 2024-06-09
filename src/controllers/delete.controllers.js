const Article = require('../models/articles.model.js');

// Delete article by Id Cntroller
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteArticle = await Article.findByIdAndDelete(id);
    if (!deleteArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ message: 'Product deleted sucessfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
