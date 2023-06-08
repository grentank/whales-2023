// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('whales');
//   }, 2000);
// });

const api = require('./api');

// myPromise
//   .then((data) => {
//     console.log('Promise has been resolved. Data: ', data);
//     return fetch('https://api2.chucknorris.io/jokes/random').then((res) => res.json());
//   })
//   .then((data) => {
//     console.log('Data from the second then: ', data.value);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

// console.log('Here');

// const getId = async () => {
//   const id = Math.floor(Math.random() * 100);
//   return `id: ${id}`;
// };

// console.log(getId());

const fs = require('fs').promises;

async function getJoke() {
  const response = await fetch(
    'https://api.chucknorris.io/jokes/random',
  );
  const joke = await response.json();
  await fs.writeFile(
    `./jokes/${joke.id}.txt`,
    joke.value,
    'utf8',
  );
  const filenames = await fs.readdir('./jokes', 'utf8');
  console.log(filenames);
}

// getJoke();

async function collectNames() {
  const names = [];
  const departments = ['admin', 'sales', 'engineering'];
  const promisesArray = departments.map((department) =>
    api(department),
  );
  const data = await Promise.all(promisesArray);
  names.push(...data.flat());
  // for (let index = 0; index < departments.length; index++) {
  //   const employees = await api(departments[index]);
  //   console.log(`${departments[index]} ready`);
  //   names.push(...employees);
  // }
  const persons = names.map((name) => ({ name }));
  const factsPromises = persons.map(() =>
    fetch('https://catfact.ninja/fact').then((res) =>
      res.json(),
    ),
  );
  const facts = await Promise.all(factsPromises);
  const personsWithFacts = persons.map((person, index) => ({
    ...person,
    fact: facts[index].fact,
  }));
  //   console.log(personsWithFacts);
  const strings = personsWithFacts.map(
    (obj) =>
      `${obj.name} knows a fact about cats: ${obj.fact}`,
  );
  await fs.writeFile(
    './namesAndCats.txt',
    strings.join('\n'),
    'utf8',
  );
  console.log('Done!');
}
collectNames();
