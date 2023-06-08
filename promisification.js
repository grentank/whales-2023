// Есть fs.stat, работающий на колбеках
// хотим свою функцию, которая работает как fs.stat, но на промисах
// как будто мы не знаем про нормальный модуль fs.promises

const fs = require('fs');

function myFsStat(path, options) {
  return new Promise((res, rej) => {
    fs.stat(path, options, (err, stats) => {
      if (err) rej(err);
      res(stats);
    });
  });
}

// fs.stat('./api.js', 'utf8', (err, data) => {
//   console.log('stats:', data);
// });

myFsStat('./api.js', 'utf8').then((data) =>
  console.log('stats:', data),
);
