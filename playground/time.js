// Jan 1 1970 00:00:00 AM == time stamp of 0

const moment = require('moment');

// const date = moment();
// date.add(100, 'years');
// date.subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// console.log(date.format('h:mm a'));

const someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

const createdAt = 1234;
const date = moment(createdAt);
console.log(date.format());
