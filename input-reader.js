function readInput(string) {
  const lines = string.split(/\r?\n/);
  const line0Match = lines[0].match(/^(\d+)\s(\d+)$/);
  const goal = Number(line0Match[1]);
  const pizzaCount = Number(line0Match[2]);
  const pizzaSizes = lines[1].split(' ').map(match => Number(match));
  if (pizzaCount !== pizzaSizes.length) {
    throw new Error('they dont match!');
  }
  return {
    goal,
    pizzaCount,
    pizzaSizes
  };
}

module.exports = { readInput };