/* eslint-disable no-plusplus */
const { ObjectId } = require('mongodb');

let courses = [];

const pastCourses = [
  {
    _id: new ObjectId('605a861dddaa5604f2f27c13'),
    title: 'Bible Overview',
    description: 'Setting out the big story of the Bible.',
    notes: 'Year 1',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
  {
    _id: new ObjectId('605a86272af07966a2765961'),
    title: 'Reading and applying the Bible',
    description: 'Interpreting the Bible well and understanding how to apply it to ourselves.',
    notes: 'Year 1',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
  {
    _id: new ObjectId('605a8672e8938a6041d6608f'),
    title: 'Key Christian truths',
    description:
      'The big truths we find in the Bible, such as God himself, the Bible, sin, salvation, what happens at the end.',
    notes: 'Year 1',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
  {
    _id: new ObjectId('605a872893dabc0ea75a69d8'),
    title: 'Serving Jesus well',
    description: 'Living the Christian life, learning how we can grow and become more like Jesus.',
    notes: 'Year 2',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
  {
    _id: new ObjectId('605a8730ddea31c3efceb527'),
    title: 'Understanding our world',
    description:
      'Issues we face as Christians in the UK, including the challenge of atheism, the LGBT issue, the media, and many others.',
    notes: 'Year 2',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
  {
    _id: new ObjectId('605a873692a1895193ac8281'),
    title: "Communicating God's Truth",
    description:
      "Improving our practical skills in sharing the word of God-in evangelism, or giving a Bible talk, or children's and youth Worker, or leading a small group or one to one Bible Study.",
    notes: 'Year 2',
    admins: [new ObjectId('5efec5f82516e36a501ceaaa'), new ObjectId('5efea341cb4e4c61fafb8c35')],
    programmes: [new ObjectId('5f8fefd60488fc06f488a533'), new ObjectId('5c8a1d5b0190b214360dc032')],
  },
];

courses = [...courses, ...pastCourses];

module.exports = courses;
