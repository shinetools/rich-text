import { readdir } from 'fs';

readdir(__dirname, (err, files) => {
  if (err) {
    throw err;
  }

  const benchmarks = files
    .filter((name) => name !== 'index.js')
    .map((name) => require(`./${name}`));

  Promise.all(benchmarks).then(() => console.log('Completed all benchmarks'));
});
