var faker = require('faker');

let createRecord = (knex, id) => {
  return knex('users').insert({
    id,
    first_name : faker.name.firstName(),
    last_name : faker.name.lastName(), 
    birth_date: faker.date.between('2015-01-01', '2019-12-31'),
    email: faker.internet.exampleEmail(),
    phone: faker.phone.phoneNumber(),
    document: faker.random.number(),
    city: faker.random.word()
  })
}

exports.seed = (knex, Promise) => {
  console.log(Promise)
  return knex('users').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 10; i++) {
        console.log(i)
        records.push(createRecord(knex, i))
      }

      return (records);
    });
};