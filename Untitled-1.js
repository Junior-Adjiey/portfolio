

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 }
];

const num_ages = users.reduce(function (accumulator, user) {
    if (accumulator[user.firstName]) {
        accumulator[user.firstName] += 1;
    }else {
        accumulator[user.firstName] = 1;
    return accumulator;
    }
 }, {});
console.log(num_ages);

const person = users.filter(user => user.age < 30).map(user => user.firstName);
console.log(person);