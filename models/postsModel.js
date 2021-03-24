const mongoose = require("mongoose");

// la méthode model() prend 3 arguments : la bd, le modèle (schéma) de l'objet à insérer, la collection (la table) qui stocke l'objet
const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  "posts"
);

module.exports = { PostsModel };