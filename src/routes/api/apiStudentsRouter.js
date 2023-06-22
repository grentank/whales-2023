import express from 'express';
import { Student } from '../../../db/models';

const apiStudentsRouter = express.Router();

apiStudentsRouter.post('/', async (req, res) => {
  try {
    const { name, git } = req.body;
    if (name === '' || git === '')
      return res.status(500).json({ message: 'Имя и git должны быть заполнены' });
    const newStudent = await Student.create({ name, git, bonus: 0 });
    return res.json(newStudent);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

apiStudentsRouter.delete('/:id', async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default apiStudentsRouter;
