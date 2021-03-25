/* eslint-disable no-plusplus */
const { ObjectId } = require('mongodb');

let programmes = [];

const pastProgrammes = [
  {
    _id: new ObjectId('5c8a1d5b0190b214360dc032'),
    title: '2015-2017',
    description: 'Batch 2017',
    notes: 'TBA',
    image: 'https://picsum.photos/320?random=1',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
  },
  {
    _id: new ObjectId('5f8fefd60488fc06f488a533'),
    title: '2018-2020',
    description: 'Batch 2020',
    notes: 'TBA',
    image: 'https://picsum.photos/320?random=2',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
  },
];

programmes = [...programmes, ...pastProgrammes];

module.exports = programmes;
