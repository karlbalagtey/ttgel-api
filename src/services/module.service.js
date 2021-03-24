const httpStatus = require('http-status');
const { Module } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a module
 * @param {Object} moduleBody
 * @returns {Promise<Module>}
 */
const createModule = async (moduleBody) => {
  const module = await Module.create(moduleBody);
  return module;
};

/**
 * Query for modules
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryModules = async (filter, options) => {
  const modules = await Module.paginate(filter, options);
  return modules;
};

/**
 * Get module by id
 * @param {ObjectId} id
 * @returns {Promise<Module>}
 */
const getModuleById = async (id) => {
  return Module.findById(id);
};

/**
 * Get module by email
 * @param {string} email
 * @returns {Promise<Module>}
 */
const getModuleByTitle = async (title) => {
  return Module.findOne({ title });
};

/**
 * Update module by id
 * @param {ObjectId} moduleId
 * @param {Object} updateBody
 * @returns {Promise<Module>}
 */
const updateModuleById = async (moduleId, updateBody) => {
  const module = await getModuleById(moduleId);
  if (!module) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Module not found');
  }
  Object.assign(module, updateBody);
  await module.save();
  return module;
};

/**
 * Delete module by id
 * @param {ObjectId} moduleId
 * @returns {Promise<Module>}
 */
const deleteModuleById = async (moduleId) => {
  const module = await getModuleById(moduleId);
  if (!module) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Module not found');
  }
  await module.remove();
  return module;
};

module.exports = {
  createModule,
  queryModules,
  getModuleById,
  getModuleByTitle,
  updateModuleById,
  deleteModuleById,
};
