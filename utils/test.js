import TinyJson from '../index.js';

console.log('------------------------------------------------');
console.log('---------------     feedback     ---------------');
console.log('------------------------------------------------');

const obj = {
  first: { value: true },
  second: { value: false },
  third: { value: 'lorem' },
};

const t = new TinyJson();

console.log('\nInitial Value: ');
t.push(obj.first);
t.push(obj.second);
t.push(obj.third);
console.log(t.db);

console.log('\nRemove 2nd Entry:');
t.pop(t.db[1]._id);
console.log(t.db);

console.log('\nUpdate Last Entry:');
t.update(t.db[1]._id, { value: false });
console.log(t.db);

console.log('\nFind 1st Entry:');
console.log(t.find(t.db[0]._id));

console.warn('\nFinal Value: ', t.get);

console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
