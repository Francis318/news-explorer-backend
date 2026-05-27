const Article = require("../models/article");

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send(articles))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.status(201).send(article))
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .orFail()
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        return Promise.reject(
          new Error("No puedes borrar artículos de otros usuarios"),
        );
      }
      return article
        .deleteOne()
        .then(() => res.send({ message: "Artículo eliminado" }));
    })
    .catch(next);
};
