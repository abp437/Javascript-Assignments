const PER_KG_AMOUNT = 500;
const GRAMS_PER_KG = 1000;
const MONEY_AND_GRAMS_LIMIT = 1000;
const STEP_FOR_CALCULATION = 25;
const ITERATION_COUNT = MONEY_AND_GRAMS_LIMIT / STEP_FOR_CALCULATION;
console.log('----------------------------------------------------------------');
console.log('--------------------- MONEY : WEIGHT CHART ---------------------');
console.log('----------------------------------------------------------------');
let moneyValue = 0;
for (let i = 0; i < ITERATION_COUNT; i++) {
  moneyValue += STEP_FOR_CALCULATION;
  let gramsForMoney = (moneyValue * GRAMS_PER_KG) / PER_KG_AMOUNT;
  console.log(`${moneyValue} : ${Math.floor(gramsForMoney)}`);
}
console.log('----------------------------------------------------------------');
console.log('--------------------- WEIGHT : MONEY CHART ---------------------');
console.log('----------------------------------------------------------------');
let gramValue = 0;
for (let i = 0; i < ITERATION_COUNT; i++) {
  gramValue += STEP_FOR_CALCULATION;
  let moneyForGrams = (PER_KG_AMOUNT * gramValue) / GRAMS_PER_KG;
  console.log(`${gramValue} : ${Math.floor(moneyForGrams)}`);
}
