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
    courses: [
      new ObjectId('605a861dddaa5604f2f27c13'),
      new ObjectId('605a86272af07966a2765961'),
      new ObjectId('605a8672e8938a6041d6608f'),
      new ObjectId('605a872893dabc0ea75a69d8'),
      new ObjectId('605a8730ddea31c3efceb527'),
      new ObjectId('605a873692a1895193ac8281'),
    ],
  },
  {
    _id: new ObjectId('5f8fefd60488fc06f488a533'),
    title: '2018-2020',
    description: 'Batch 2020',
    notes: 'TBA',
    image: 'https://picsum.photos/320?random=2',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    courses: [
      new ObjectId('60619d7dbe56dbafdc50fa58'),
      new ObjectId('60619d85965f12aa46102f23'),
      new ObjectId('60619d8a316af82b7c882516'),
      new ObjectId('605a872893dabc0ea75a69d8'),
      new ObjectId('605a8730ddea31c3efceb527'),
      new ObjectId('605a873692a1895193ac8281'),
    ],
  },
];

programmes = [...programmes, ...pastProgrammes];

module.exports = programmes;
