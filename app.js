const sequelize = require('./connect');

async function createTables() {
  const [results, metadata] = await sequelize.query(`
    DROP TABLE IF EXISTS users;

    DROP TABLE IF EXISTS departments;

    CREATE TABLE IF NOT EXISTS departments (
        id serial PRIMARY KEY,
        title VARCHAR(30) NOT NULL
      );

  CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INTEGER,
    "departmentId" INTEGER REFERENCES departments(id) ON DELETE SET NULL
    );
  `);
  console.log(results);
}

async function seedUsers() {
  const [results, metadata] = await sequelize.query(`
    INSERT INTO departments (title) VALUES
    ('IT'),
    ('Sales'),
    ('HR');

    INSERT INTO users (name, age, "departmentId") VALUES
    ('John', 30, 1),
    ('Jane', 25, 2),
    ('Bob', 40, 3),
    ('Jack', 28, 3),
    ('Jill', 35, 1),
    ('Jake', 45, 2);

    SELECT * FROM users;
    `);
  console.log(results);
}

// seedUsers();
// createTables().then(seedUsers);

async function dataManipulation() {
  const [results, metadata] = await sequelize.query(`
    DELETE FROM users WHERE name = 'Bob';
    DELETE FROM departments WHERE id = 2;
    SELECT departments.title AS "department", users.id AS "userId", users.name, users.age
    FROM departments JOIN users ON departments.id = users."departmentId";
    `);
  console.log(results);
}

dataManipulation();
