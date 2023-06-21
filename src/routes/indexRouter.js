import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.render('Layout'));

indexRouter.get('/cats', (req, res) => res.render('Layout'));
indexRouter.get('/input', (req, res) => res.render('Layout'));

export default indexRouter;
