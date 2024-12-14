import formatCurrency from "../../scripts/utils/money.js";

console.log('test suite: format currency');
//basic case
console.log('convert cents into dollar');
if(formatCurrency(2095) === '20.95'){
  console.log('pass');
} else {
  console.log('failed');
}
//edge case
console.log('work with zero');
if(formatCurrency(0) === '0.00'){
  console.log('pass');
} else {
  console.log('failed');
}

console.log('rounds up to nearest cents');
if(formatCurrency(2000.5) === '20.01'){
  console.log('pass');
} else {
  console.log('failed');
}

console.log('negative number');
if(formatCurrency(-5025) === '-50.25'){
  console.log('pass');
} else {
  console.log('failed');
}
