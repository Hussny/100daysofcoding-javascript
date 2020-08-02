// try, catch and finally

try {
  console.log('Start of try runs');
  unicyle;
  console.log('End of try runs -- never reached');
} catch (err) {
  console.log('Error has occurres' + err);
} finally {
  console.log('This is always run');
}
console.log('Then the execution continues...');
