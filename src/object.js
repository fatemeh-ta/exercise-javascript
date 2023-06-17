// Hello, object
let objectExercise1 = confirm('start first practice object(Hello, object)?');
if (objectExercise1) {
  const user = {};
  //add
  user.name = 'John';
  user.surname = 'Smith';
  //change
  user.name = 'Pete';
  //delete
  delete user.name;
}

// Check for emptiness
let objectExercise2 = confirm(
  'start second practice object(Check for emptiness)?'
);
if (objectExercise2) {
  let schedule = {};
  isEmpty(schedule);
  function isEmpty(obj) {
    if (Object.keys(obj).length > 0) {
      alert(true);
    } else {
      alert(false);
    }
  }
}

// Sum object properties
let objectExercise3 = confirm(
  'start third practice object(Sum object properties)?'
);
if (objectExercise3) {
  let sumVal = 0;
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };

  Object.keys(salaries).forEach((key) => {
    sumVal = salaries[key] + sumVal;
  });

  salaries.sum = sumVal;
}

// Multiply numeric property values by 2
let objectExercise4 = confirm(
  'start third practice object(Multiply numeric property values by 2)?'
);
if (objectExercise4) {
  let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
  };
  multiplyNumeric(menu);

  function multiplyNumeric(menu) {
    Object.keys(menu).forEach((key) => {
      if (typeof menu[key] === 'number') {
        menu[key] = menu[key] * 2;
      }
    });
  }
}
