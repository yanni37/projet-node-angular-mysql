module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      full_article: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      has_qcm: {
        type: Sequelize.BOOLEAN
      }

    });
    return Article;
  };