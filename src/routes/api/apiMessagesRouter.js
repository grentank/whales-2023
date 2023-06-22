import express from 'express';
import { Message, Student } from '../../../db/models';

const apiMessagesRouter = express.Router();

apiMessagesRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allMessages = await Message.findAll();
      return res.json(allMessages);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server error' });
    }
  })
  .post(async (req, res) => {
    try {
      const newMessage = await Message.create(req.body);
      const newMessageWithStudent = await Message.findOne({
        where: { id: newMessage.id },
        include: Student,
      });
      return res.json(newMessageWithStudent);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error while creating message' });
    }
  });

apiMessagesRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const oneMessage = await Message.findOne({
        where: { id: req.params.id },
      });
      return res.json(oneMessage);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error while reading message' });
    }
  })
  .delete(async (req, res) => {
    try {
      await Message.destroy({
        where: { id: req.params.id },
      });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error while deleting message' });
    }
  })
  .put(async (req, res) => {
    try {
      const targetMessage = await Message.findOne({ where: { id: req.params.id } });
      const { authorId, title, body } = req.body;
      targetMessage.authorId = authorId;
      targetMessage.title = title;
      targetMessage.body = body;
      await targetMessage.save();
      return res.json(targetMessage);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error while updating message' });
    }
  });

export default apiMessagesRouter;
