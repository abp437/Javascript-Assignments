const PER_KG_AMOUNT = 500;
const GRAMS_PER_KG = 1000;
const MONEY_AND_GRAMS_LIMIT = 1000;
const STEP_FOR_CALCULATION = 25;
const ITERATION_COUNT = MONEY_AND_GRAMS_LIMIT / STEP_FOR_CALCULATION;
function getGramsForMoney(moneyValue) {
  return (moneyValue * GRAMS_PER_KG) / PER_KG_AMOUNT;
}
function getMoneyForGrams(gramValue) {
  return (PER_KG_AMOUNT * gramValue) / GRAMS_PER_KG;
}
function makeChart(chartType) {
  let value = 0;
  let getComputedValue = null;
  if (chartType === 'money-grams') {
    getComputedValue = getGramsForMoney;
  } else {
    getComputedValue = getMoneyForGrams;
  }
  for (let i = 0; i < ITERATION_COUNT; i++) {
    value += STEP_FOR_CALCULATION;
    console.log(`${value} : ${Math.floor(getComputedValue(value))}`);
  }
}
console.log('----------------------------------------------------------------');
console.log('--------------------- MONEY : WEIGHT CHART ---------------------');
console.log('----------------------------------------------------------------');
makeChart('money-grams');
console.log('----------------------------------------------------------------');
console.log('--------------------- WEIGHT : MONEY CHART ---------------------');
console.log('----------------------------------------------------------------');
makeChart('grams-money');
