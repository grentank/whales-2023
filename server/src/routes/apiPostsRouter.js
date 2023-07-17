const express = require('express');
const { Post, User } = require('../../db/models');

const apiPostsRouter = express.Router();

apiPostsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const Posts = await Post.findAll({ order: [['createdAt', 'DESC']], include: 'author' });
      return res.json(Posts);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body?.title) return res.status(500).json({ message: 'Empty reqbody' });
      const { title, body } = req.body;
      const newPost = await Post.create({
        title,
        body,
        authorId: req.session?.user?.id || 1,
      });
      const postWithAuthor = await Post.findByPk(newPost.id, { include: 'author' });
      return res.json(postWithAuthor);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiPostsRouter.delete('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiPostsRouter.put('/:id', async (req, res) => {
  const targetPost = await Post.findOne({ where: { id: req.params.id }, include: 'author' });
  const { title, body } = req.body;
  targetPost.title = title;
  targetPost.body = body;
  await targetPost.save();
  res.json(targetPost);
});

module.exports = apiPostsRouter;
