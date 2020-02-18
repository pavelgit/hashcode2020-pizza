const fs = require('fs');
const path = require('path');

const { readInput } = require('./input-reader');
const { solve } = require('./solver');
const { writeOutput } = require('./output-writer');

const files = fs.readdirSync('files/inputs');
for (const fileName of files) {
  const inputFilePath = path.join('files', 'inputs', fileName);
  const { pizzaSizes, goal } = readInput(fs.readFileSync(inputFilePath, 'utf8'));
  const { sum, pizzaIds } = solve(pizzaSizes, goal);
  console.log('Output', fileName, sum, goal, sum - goal);
  fs.writeFileSync(path.join('files', 'outputs', fileName), writeOutput(pizzaIds), 'utf8');
}