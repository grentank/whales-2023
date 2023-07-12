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
const { Product, User } = require('../../db/models');

const apiProductsRouter = express.Router();

apiProductsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({ order: [['createdAt', 'DESC']], include: User });
      return res.json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(upload.single('img'), async (req, res) => {
    try {
      if (!req.body?.title) return res.status(500).json({ message: 'Empty reqbody' });
      // console.log(req.body);
      // console.log(req.file);
      const { title, description, price } = req.body;
      const newProduct = await Product.create({
        title,
        description,
        price: Number(price),
        img: req.file.filename,
        authorId: req.session.user.id
      });
      return res.json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiProductsRouter.delete('/:id', async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = apiProductsRouter;
