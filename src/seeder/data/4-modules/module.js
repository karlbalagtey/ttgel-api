/* eslint-disable no-plusplus */
const { ObjectId } = require('mongodb');

let modules = [];

const bibleOverviewModules = [
  {
    _id: new ObjectId('605a883b5e3a181ad1d9f054'),
    title: 'General Introduction',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
  {
    _id: new ObjectId('605a893653d8bf72fc5bf38a'),
    title: '1. Pattern of the Kingdom',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
  {
    _id: new ObjectId('605a893c4db74a91b219b584'),
    title: '2. The Perished Kingdom',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
  {
    _id: new ObjectId('605a89417e0d9a87c9e0bdce'),
    title: '3. The Promised Kingdom',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
  {
    _id: new ObjectId('605a8955709c09d396d07ed6'),
    title: '4. The Partial Kingdom - Part 1',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
  {
    _id: new ObjectId('605a894e35d578a79670f45a'),
    title: '5. The Partial Kingdom -  Part 2',
    description: 'Setting out the big story of the Bible.',
    image: 'https://picsum.photos/200',
    note: 'Year 1',
    course: [new ObjectId('605a861dddaa5604f2f27c13')],
  },
];

modules = [...modules, ...bibleOverviewModules];

module.exports = modules;
