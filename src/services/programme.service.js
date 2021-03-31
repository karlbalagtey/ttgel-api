const httpStatus = require('http-status');
const { Programme } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a programme
 * @param {Object} programmeBody
 * @returns {Promise<Programme>}
 */
const createProgramme = async (programmeBody) => {
  const programme = await Programme.create(programmeBody);
  return programme;
};

/**
 * Query for programmes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProgrammes = async (filter, options) => {
  // const programmes = await Programme.paginate(filter, options);
  const programmes = await Programme.find().select('title description');
  return programmes;
};

/**
 * Get programme by id
 * Public
 * @param {ObjectId} id
 * @returns {Promise<Programme>}
 */
const getProgrammeById = async (id) => {
  return Programme.findById(id).populate('courses').select('title');
};

/**
 * Get programme by title
 * Private
 * @param {string} title
 * @returns {Promise<Programme>}
 */
const getProgrammeByTitle = async (title) => {
  return Programme.findOne({ title }).populate('courses');
};

/**
 * Update programme by id
 * @param {ObjectId} programmeId
 * @param {Object} updateBody
 * @returns {Promise<Programme>}
 */
const updateProgrammeById = async (programmeId, updateBody) => {
  const programme = await getProgrammeById(programmeId);
  if (!programme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Programme not found');
  }
  Object.assign(programme, updateBody);
  await programme.save();
  return programme;
};

/**
 * Delete programme by id
 * @param {ObjectId} programmeId
 * @returns {Promise<Programme>}
 */
const deleteProgrammeById = async (programmeId) => {
  const programme = await getProgrammeById(programmeId);
  if (!programme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Programme not found');
  }
  await programme.remove();
  return programme;
};

module.exports = {
  createProgramme,
  queryProgrammes,
  getProgrammeById,
  getProgrammeByTitle,
  updateProgrammeById,
  deleteProgrammeById,
};
