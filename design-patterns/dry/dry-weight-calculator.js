// TRIVIAL DRY APPROACH -AKSHAY

// const PER_KG_AMOUNT = 520;
// const GRAMS_PER_KG = 1000;
// const MONEY_AND_GRAMS_LIMIT = 10000;
// const STEP_FOR_MONEY_AND_GRAMS = 25;
// const ITERATION_COUNT = MONEY_AND_GRAMS_LIMIT / STEP_FOR_MONEY_AND_GRAMS;
// function getGramsForMoney(moneyValue) {
//   return (moneyValue * GRAMS_PER_KG) / PER_KG_AMOUNT;
// }
// function getMoneyForGrams(gramValue) {
//   return (PER_KG_AMOUNT * gramValue) / GRAMS_PER_KG;
// }
// function makeChart(chartType) {
//   let value = 0;
//   let getComputedValue = null;
//   if (chartType === 'money-grams') {
//     getComputedValue = getGramsForMoney;
//   } else {
//     getComputedValue = getMoneyForGrams;
//   }
//   for (let i = 0; i < ITERATION_COUNT; i++) {
//     value += STEP_FOR_MONEY_AND_GRAMS;
//     console.log(`${value} : ${Math.floor(getComputedValue(value))}`);
//   }
// }
// console.log('----------------------------------------------------------------');
// console.log('--------------------- MONEY : WEIGHT CHART ---------------------');
// console.log('----------------------------------------------------------------');
// makeChart('money-grams');
// console.log('----------------------------------------------------------------');
// console.log('--------------------- WEIGHT : MONEY CHART ---------------------');
// console.log('----------------------------------------------------------------');
// makeChart('grams-money');

// MODERATE DRY APPROACH - HITESH

// const PER_KG_AMOUNT = 520;
// const GRAMS_PER_KG = 1000;
// const MONEY_AND_GRAMS_LIMIT = 10000;
// const STEP_FOR_MONEY_AND_GRAMS = 25;
// const ITERATION_COUNT = MONEY_AND_GRAMS_LIMIT / STEP_FOR_MONEY_AND_GRAMS;

// const calc = (flag = true) => {
//  let counter = 0;
//  for (let i = 0; i < ITERATION_COUNT; i++) {
//     counter += STEP_FOR_MONEY_AND_GRAMS;
//       let gramsForMoney = flag ? (counter * GRAMS_PER_KG) / PER_KG_AMOUNT : (PER_KG_AMOUNT * counter) / GRAMS_PER_KG;
//       console.log(`${counter} : ${Math.floor(gramsForMoney)}`);
//  }
// }
// console.log('----------------------------------------------------------------');
// console.log('--------------------- MONEY : WEIGHT CHART ---------------------');
// console.log('----------------------------------------------------------------');
// calc();
// console.log('----------------------------------------------------------------');
// console.log('--------------------- WEIGHT : MONEY CHART ---------------------');
// console.log('----------------------------------------------------------------');
// calc(false);


// CORRECT DRY APPROACH - SHIRISH

const PER_KG_AMOUNT = 520;
const GRAMS_PER_KG = 1000;
const MONEY_AND_GRAMS_LIMIT = 10000;
const STEP_FOR_MONEY_AND_GRAMS = 25;
const ITERATION_COUNT = MONEY_AND_GRAMS_LIMIT / STEP_FOR_MONEY_AND_GRAMS;
const printChart = (calculate) => {
  let value1 = 0;
  for (let i = 0; i < ITERATION_COUNT; i++) {
    value1 += STEP_FOR_MONEY_AND_GRAMS
    console.log(`${value1} : ${Math.floor(calculate(value1))}`);
  }
}
console.log('----------------------------------------------------------------');
console.log('--------------------- MONEY : WEIGHT CHART ---------------------');
console.log('----------------------------------------------------------------');
printChart(money => money * GRAMS_PER_KG / PER_KG_AMOUNT);
console.log('----------------------------------------------------------------');
console.log('--------------------- WEIGHT : MONEY CHART ---------------------');
console.log('----------------------------------------------------------------');
printChart(grams => PER_KG_AMOUNT * grams / GRAMS_PER_KG);
