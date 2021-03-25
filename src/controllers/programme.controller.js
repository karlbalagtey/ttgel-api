const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { programmeService } = require('../services');

const createProgramme = catchAsync(async (req, res) => {
  const programme = await programmeService.createProgramme(req.body);
  res.status(httpStatus.CREATED).send(programme);
});

const getProgrammes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'description']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await programmeService.queryProgrammes(filter, options);
  console.log(result);
  res.send(result);
});

const getProgramme = catchAsync(async (req, res) => {
  const programme = await programmeService.getProgrammeById(req.params.programmeId);
  if (!programme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Programme not found');
  }
  res.send(programme);
});

const updateProgramme = catchAsync(async (req, res) => {
  const programme = await programmeService.updateProgrammeById(req.params.programmeId, req.body);
  res.send(programme);
});

const deleteProgramme = catchAsync(async (req, res) => {
  await programmeService.deleteProgrammeById(req.params.programmeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProgramme,
  getProgrammes,
  getProgramme,
  updateProgramme,
  deleteProgramme,
};
