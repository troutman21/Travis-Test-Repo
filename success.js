const figlet = require('figlet');

// change the first argument of the call to figlet to have it print on success
figlet('Cohort 12 is awesome!!!', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
