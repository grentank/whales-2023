import express from 'express';
import { Student } from '../../../db/models';

const studentsRouter = express.Router();

studentsRouter.get('/', async (req, res) => {
  const allStudents = await Student.findAll({
    order: [['createdAt', 'DESC']],
  });
  const initState = { allStudents };
  res.render('Layout', initState);
});

studentsRouter.get('/add', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

studentsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneStudent = await Student.findOne({ where: { id } });
  const initState = { oneStudent };
  res.render('Layout', initState);
});

studentsRouter.get('/:id/delete', async (req, res) => {
  const { id } = req.params;
  const oneStudent = await Student.findOne({ where: { id } });
  const initState = { oneStudent };
  res.render('Layout', initState);
});

export default studentsRouter;
