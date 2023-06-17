// EXERCISE 1 : Rewrite the function using '?' or '||'
let exercise1 = confirm(
  "start first practice(Rewrite the function using '?' or '||') ?"
);
if (exercise1) {
  let ageMount = prompt('enter age');
  checkAge(ageMount);

  function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
  }

  function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
  }
}

// EXERCISE 2: Function min(a, b)
let exercise2 = confirm('start second practice(Function min(a, b))?');
if (exercise2) {
  let firstValue = prompt('enter first value');
  let secondValue = prompt('enter second value');
  min(firstValue, secondValue);

  function min(a, b) {
    if (a <= b) {
      alert(a);
    } else {
      alert(b);
    }
  }
}

// EXERCISE 3:Function pow(x,n)
let exercise3 = confirm('start third practice(Function pow(x,n))?');
if (exercise3) {
  let pFirstValue = prompt('enter first value');
  let pSecondValue = prompt('enter second value');

  pow(pFirstValue, pSecondValue);

  function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
      result *= x;
    }

    console.log(result);
  }
}
