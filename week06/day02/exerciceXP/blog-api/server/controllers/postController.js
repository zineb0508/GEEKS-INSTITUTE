// server/controllers/postController.js
const Post = require('../models/postModel');

exports.getAll = async (req, res, next) => {
  try {
    const { rows } = await Post.getAllPosts();
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { rows } = await Post.getPostById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { rows } = await Post.createPost(title, content);
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { rows } = await Post.updatePost(req.params.id, title, content);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { rowCount } = await Post.deletePost(req.params.id);
    if (rowCount === 0) return res.status(404).json({ error: 'Post not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
