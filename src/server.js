import express from 'express';
import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import jsxRender from './utils/jsxRender';
import studentsRouter from './routes/render/studentsRouter';
import indexRouter from './routes/render/indexRouter';
import apiMessagesRouter from './routes/api/apiMessagesRouter';
import apiStudentsRouter from './routes/api/apiStudentsRouter';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/api/messages', apiMessagesRouter);
app.use('/api/students', apiStudentsRouter);
app.use('/', indexRouter);
app.use('/students', studentsRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
