const { Movie, Studio } = require('./db/models');

const pretty = (data) => JSON.parse(JSON.stringify(data));

async function seedData() {
  await Studio.create({ name: 'Disney' });
  await Studio.create({ name: 'Universal' });
  await Studio.bulkCreate([
    { name: 'Dreamworks' },
    { name: 'Warner Bros' },
    { name: 'Columbia' },
  ]);
  await Movie.bulkCreate([
    { title: 'The Lion King', duration: 120, studioId: 1 },
    { title: 'The Incredibles', duration: 115, studioId: 2 },
    { title: 'The Avengers', duration: 143, studioId: 3 },
    { title: 'Iron Man', duration: 129, studioId: 4 },
    { title: 'The Dark Knight', duration: 152, studioId: 5 },
    { title: 'The Shawshank Redemption', duration: 142, studioId: 4 },
    { title: 'The Godfather', duration: 175, studioId: 5 },
    { title: 'The Dark Knight Rises', duration: 165, studioId: 5 },
    { title: 'Pulp Fiction', duration: 154, studioId: 4 },
    { title: 'Inception', duration: 148, studioId: 1 },
    { title: 'Interstellar', duration: 169, studioId: 2 },
    { title: 'The Matrix', duration: 136, studioId: 3 },
  ]);
}

// seedData();

async function findData() {
  try {
    // const allStudios = await Studio.findAll();
    // console.log(pretty(allStudios));
    // const targetMovies = await Movie.findAll({
    //   where: { studioId: 5 },
    // });
    // console.log(pretty(targetMovies));
    const warnerBrosStudio = await Studio.findOne({
      where: { name: 'Warner Bros' },
      include: { model: Movie, attributes: ['title'] },
    });
    console.log(pretty(warnerBrosStudio))
    // console.log(
    //   pretty(warnerBrosStudio.Movies.map((movie) => movie.title)),
    // );
    // const theMatrix = await Movie.findOne({
    //   where: { title: 'The Matrix' },
    //   include: Studio,
    // });
    // console.log(pretty(theMatrix.Studio.name));
  } catch (error) {
    console.error(error);
  }
}

findData();
