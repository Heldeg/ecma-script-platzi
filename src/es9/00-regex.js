const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('1225-20-40');

console.table(matchers);

