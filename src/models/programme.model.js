const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const programmeSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    notes: String,
    image: String,
    admins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
programmeSchema.plugin(toJSON);
programmeSchema.plugin(paginate);

/**
 * @typedef Programme
 */
const Programme = mongoose.model('Programme', programmeSchema);

module.exports = Programme;
