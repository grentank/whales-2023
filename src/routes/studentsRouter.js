import express from 'express';
import { Student } from '../../db/models';

const studentsRouter = express.Router();

studentsRouter.get('/', async (req, res) => {
  const allStudents = await Student.findAll({
    order: [['createdAt', 'DESC']],
  });
  const initState = { allStudents };
  res.render('Layout', initState);
});

studentsRouter.post('/', async (req, res) => {
  try {
    const { name, git } = req.body;
    if (name === '' || git === '')
      return res.status(500).json({ message: 'Имя и git должны быть заполнены' });
    const newStudent = await Student.create({ name, git, bonus: 0 });
    res.json(newStudent);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
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

studentsRouter.get('/:id/delete/confirm', async (req, res) => {
  const { id } = req.params;
  await Student.destroy({ where: { id } });
  res.redirect('/students');
});

export default studentsRouter;
