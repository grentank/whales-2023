const wait = (ms) => new Promise((res) => setTimeout(res, ms));

async function api(department) {
  switch (department) {
    case 'admin':
      await wait(1000);
      return ['Alex', 'Bob', 'Charlie'];
    case 'sales':
      await wait(1000);
      return ['Alice', 'Beth', 'Cindy'];
    case 'engineering':
      await wait(1000);
      return ['Doug', 'Ed', 'Fred'];
    default:
      return [];
  }
}

module.exports = api;
