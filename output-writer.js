function writeOutput(pizzaIds) {
  let string = '';
  string += pizzaIds.length + '\r\n';
  string += pizzaIds.join(' ');
  return string;
}

module.exports = { writeOutput };