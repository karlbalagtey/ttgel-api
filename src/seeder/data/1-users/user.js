/* eslint-disable no-plusplus */
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

let users = [];

// create 200 customers
for (let i = 0; i < 200; i++) {
  const newFakedUser = {
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    role: 'user',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+477#########'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };

  users = [...users, newFakedUser];
}

// create 10 admin
for (let i = 0; i < 10; i++) {
  const newFakedAdmin = {
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('password', 10),
    role: 'admin',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+477#########'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };

  users = [...users, newFakedAdmin];
}

const admin = [
  {
    _id: new ObjectId('5efec5f82516e36a501ceaaa'),
    name: 'Karl Balagtey',
    email: 'karl.balagtey@gmail.com',
    password: bcrypt.hashSync('password', 10),
    role: 'superadmin',
    acceptTerms: true,
    contactNumber: '07712221957',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectId('5efea341cb4e4c61fafb8c35'),
    name: 'John Doe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password', 10),
    role: 'admin',
    acceptTerms: true,
    contactNumber: '07712221957',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectId('605a8cb3be9f70a9bc277e4c'),
    name: 'Jane Doe',
    email: 'user@example.com',
    password: bcrypt.hashSync('password', 10),
    role: 'user',
    acceptTerms: true,
    contactNumber: '07712221957',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    programmes: [new ObjectId('5c8a1d5b0190b214360dc032'), new ObjectId('5f8fefd60488fc06f488a533')],
  },
];

users = [...users, ...admin];

module.exports = users;
