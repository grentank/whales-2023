import express from 'express';
import { Student, Message } from '../../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.render('Layout'));

indexRouter.get('/cats', (req, res) => res.render('Layout'));

indexRouter.get('/input', (req, res) => res.render('Layout'));

indexRouter.get('/messages', async (req, res) => {
  const allStudents = await Student.findAll();
  const allMessages = await Message.findAll({
    include: Student,
    order: [['createdAt', 'DESC']],
  });
  const initState = { allStudents, allMessages };
  res.render('Layout', initState);
});

export default indexRouter;
