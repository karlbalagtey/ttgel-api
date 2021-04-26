const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const moduleSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    note: String,
    schedule: {
      start: {
        type: Date,
        default: null,
      },
      end: {
        type: Date,
        default: null,
      },
    },
    audio: {
      filename: String,
      mime: String,
    },
    notes: {
      filename: String,
      mime: String,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
moduleSchema.plugin(toJSON);
moduleSchema.plugin(paginate);

/**
 * @typedef Module
 */
const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
