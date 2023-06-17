// Rewrite with arrow functions
let arrowExercise1 = confirm('start first practice arrow function?');

if (arrowExercise1) {
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    'Do you agree? ',
    () => {
      alert('You agreed.');
    },

    () => {
      alert('You canceled the execution.');
    }
  );
}
