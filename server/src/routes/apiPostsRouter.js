const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/img');
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

const upload = multer({ storage });
const { Post, User } = require('../../db/models');

const apiPostsRouter = express.Router();

apiPostsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const Posts = await Post.findAll({ order: [['createdAt', 'DESC']], include: User });
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
      const postWithAuthor = await Post.findByPk(newPost.id, { include: User });
      return res.json(postWithAuthor);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiPostsRouter.delete('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = apiPostsRouter;
