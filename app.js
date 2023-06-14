const { Actor, Cast, Movie } = require('./db/models');

const pretty = (obj) => console.dir(JSON.parse(JSON.stringify(obj, null, 1)), { depth: null });

async function run() {
  //   const allActors = await Actor.findAll();
  //   pretty(allActors);
  //   const allMovies = await Movie.findAll();
  //   pretty(allMovies);
  //   const matrixActors = await Actor.findAll({
  //     attributes: ['name'],
  //     include: {
  //       model: Cast,
  //       attributes: [],
  //       required: true,
  //       include: {
  //         model: Movie,
  //         where: { title: 'The Matrix' },
  //         required: true,
  //       },
  //     },
  //   });
  //   pretty(matrixActors);

  //   const darkKnightActors = await Movie.findOne({
  //     where: { title: 'The Dark Knight' },
  //     attributes: [],
  //     include: {
  //       model: Cast,
  //       include: {
  //         model: Actor,
  //         attributes: ['name'],
  //       },
  //     },
  //   });
  //   pretty(darkKnightActors.Casts.map((cast) => cast.Actor.name));

  try {
    // const res = await Movie.findOne({
    //   where: { title: 'The Dark Knight' },
    //   include: Actor,
    // });
    // pretty(res);
    // const frozenCast = await Movie.findOne({
    //   where: { title: 'Frozen' },
    //   include: Cast,
    // });
    // pretty(frozenCast);

    // await Cast.create({ movieId: 1, actorId: 1 });
    // await Cast.create({ movieId: 1, actorId: 1 });

    const actorMovies = await Actor.findOne({
      where: { id: 1 },
      include: {
        model: Cast,
        include: Movie,
      },
    });
    pretty(actorMovies);
  } catch (error) {
    console.error(error);
  }
}

run();
