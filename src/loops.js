// Output even numbers in the loop
let exercise1 = confirm(
  'start first practice(Output even numbers in the loop) ?'
);
if (exercise1) {
  for (let index = 2; index <= 10; index += 2) {
    alert(index);
  }
}

// Replace "for" with "while"
let exercise2 = confirm('start second practice( Replace for with while)?');
if (exercise2) {
  let i = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}
