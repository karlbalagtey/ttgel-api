const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProgramme = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    notes: Joi.string(),
    image: Joi.string(),
  }),
};

const getProgrammes = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    notes: Joi.string(),
    image: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProgramme = {
  params: Joi.object().keys({
    programmeId: Joi.string().custom(objectId),
  }),
};

const updateProgramme = {
  params: Joi.object().keys({
    programmeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().empty(''),
      description: Joi.string().empty(''),
      notes: Joi.string().empty(''),
      image: Joi.string().empty(''),
    })
    .min(1),
};

const deleteProgramme = {
  params: Joi.object().keys({
    programmeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProgramme,
  getProgrammes,
  getProgramme,
  updateProgramme,
  deleteProgramme,
};
