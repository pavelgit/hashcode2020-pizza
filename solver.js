function solve(pizzaSizes, goal) {
  let sum = 0;
  const pizzaIds = [];
  for (let i = pizzaSizes.length - 1; i >= 0; i--) {
    const newSum = sum + pizzaSizes[i];
    if (newSum > goal) {
      continue;
    }
    pizzaIds.push(i);
    sum = newSum;
    if (newSum === goal) {
      break;
    }
  }
  return { sum, pizzaIds };
}

module.exports = { solve };